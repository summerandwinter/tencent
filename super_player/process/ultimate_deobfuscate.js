const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js";
const OUTPUT_FILE = "source_deobfuscated.js";

// ============================================================================
// 1. 初始化沙箱
// ============================================================================
const sandbox = {
    window: {},
    navigator: { userAgent: "node" },
    atob: (str) => Buffer.from(str, 'base64').toString('binary'),
    String: String,
    Array: Array,
    parseInt: parseInt,
    decodeURIComponent: decodeURIComponent,
    JSON: JSON,
    console: { log: () => {} } // 屏蔽日志
};
const context = vm.createContext(sandbox);

console.log(`正在读取文件: ${TARGET_FILE}...`);
const code = fs.readFileSync(TARGET_FILE, "utf-8");
const ast = parser.parse(code, { sourceType: "script" });

// 存储找到的组件
const stringArrayFuncs = new Map(); // name -> code
const decryptors = new Map();       // name -> { arrayName, code }
const rotators = [];                // list of codes

console.log("正在深度分析 AST 结构...");

// ============================================================================
// 2. 扫描 AST 寻找特征
// ============================================================================
traverse(ast, {
    // A. 寻找字符串大数组函数
    FunctionDeclaration(path) {
        const { node } = path;
        // 特征1: 函数体不为空
        if (!node.body.body.length) return;
        
        // 特征2: 寻找数组定义 var x = ["...", "..."]
        let hasLargeArray = false;
        traverse(node, {
            ArrayExpression(innerPath) {
                // 数组长度通常很大 (>10) 且全是字符串
                if (innerPath.node.elements.length > 10 && 
                    innerPath.node.elements.every(el => t.isStringLiteral(el))) {
                    hasLargeArray = true;
                    innerPath.stop();
                }
            },
            noScope: true
        });

        if (hasLargeArray && node.id) {
            stringArrayFuncs.set(node.id.name, generate(node).code);
        }
    }
});

// B. 寻找解密函数 (依赖已找到的数组函数名)
traverse(ast, {
    FunctionDeclaration(path) {
        const { node } = path;
        if (!node.id) return;
        
        const codeStr = generate(node).code;
        
        // 特征1: 必须调用了某个已知的大数组函数
        let usedArrayName = null;
        for (const [arrName] of stringArrayFuncs) {
            // 简单的字符串包含检查（速度快）
            // 严谨点应该检查 CallExpression，但这里为了容错率
            if (codeStr.includes(`${arrName}()`) || codeStr.includes(`${arrName} =`)) {
                usedArrayName = arrName;
                break;
            }
        }
        
        if (!usedArrayName) return;

        // 特征2: 包含 -= 或 += 运算 (偏移量计算)
        let hasOffsetMath = false;
        traverse(node, {
            AssignmentExpression(innerPath) {
                if (innerPath.node.operator === '-=' || innerPath.node.operator === '+=') {
                    hasOffsetMath = true;
                    innerPath.stop();
                }
            },
            noScope: true
        });

        if (hasOffsetMath) {
            decryptors.set(node.id.name, {
                arrayName: usedArrayName,
                code: codeStr
            });
        }
    }
});

// C. 寻找 Rotator (洗牌逻辑)
traverse(ast, {
    // 洗牌逻辑通常是 IIFE (立即执行函数)
    CallExpression(path) {
        const { node } = path;
        // 必须是函数表达式被调用: (function(){...})()
        if (!t.isFunctionExpression(node.callee)) return;

        const funcBody = node.callee.body;
        const codeStr = generate(node).code;

        // 特征1: 包含 while(true) 或 for(;;)
        // 特征2: 包含 push 和 shift 调用
        if ((codeStr.includes('while') || codeStr.includes('for')) &&
            codeStr.includes('push') && 
            codeStr.includes('shift')) {
            
            // 确认它是否引用了我们找到的解密器或数组
            // 这样可以避免误伤普通业务逻辑
            let related = false;
            for (const [decName] of decryptors) {
                if (codeStr.includes(decName)) {
                    related = true;
                    break;
                }
            }
            if (!related) {
                for (const [arrName] of stringArrayFuncs) {
                    if (codeStr.includes(arrName)) {
                        related = true;
                        break;
                    }
                }
            }

            if (related) {
                rotators.push(codeStr);
            }
        }
    }
});

// ============================================================================
// 3. 执行解密环境
// ============================================================================
console.log(`\n统计信息:`);
console.log(` - 发现大数组函数: ${stringArrayFuncs.size} 个`);
console.log(` - 发现解密函数: ${decryptors.size} 个`);
console.log(` - 发现洗牌逻辑: ${rotators.length} 个`);

if (decryptors.size === 0) {
    console.error("❌ 无法识别解密函数，请检查代码格式是否标准。");
    process.exit(1);
}

console.log("\n正在沙箱中激活解密逻辑...");

// 1. 注入数组函数
stringArrayFuncs.forEach(code => vm.runInContext(code, context));
// 2. 注入解密函数
decryptors.forEach(({ code }) => vm.runInContext(code, context));
// 3. 执行洗牌 (Rotators)
rotators.forEach(code => {
    try {
        vm.runInContext(code, context);
    } catch (e) {
        // 洗牌代码可能会因为环境缺失报错，通常忽略即可，只要数组变了就行
    }
});

// ============================================================================
// 4. 批量替换
// ============================================================================
console.log("\n开始替换源代码中的混淆调用...");
let replaceCount = 0;

traverse(ast, {
    CallExpression(path) {
        const { callee, arguments: args } = path.node;
        
        // 检查是否是已知的解密函数
        if (t.isIdentifier(callee) && decryptors.has(callee.name)) {
            // 参数必须是 1 个且是数字
            if (args.length === 1 && t.isNumericLiteral(args[0])) {
                const idx = args[0].value;
                const funcName = callee.name;
                
                try {
                    // 调用沙箱解密
                    const result = vm.runInContext(`${funcName}(${idx})`, context);
                    
                    if (typeof result === 'string') {
                        // 替换节点
                        path.replaceWith(t.stringLiteral(result));
                        replaceCount++;
                    }
                } catch (e) {
                    // 某些索引可能导致解密失败，跳过
                }
            }
        }
    }
});

console.log(`\n🎉 任务完成！共还原 ${replaceCount} 处混淆字符串。`);
console.log(`文件写入: ${OUTPUT_FILE}`);

const output = generate(ast, {}, code);
fs.writeFileSync(OUTPUT_FILE, output.code);