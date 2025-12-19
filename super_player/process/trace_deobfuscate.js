const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js";
const OUTPUT_FILE = "source_deobfuscated.js";

// ============================================================================
// 1. 增强型沙箱 (模拟浏览器环境，防止洗牌逻辑报错)
// ============================================================================
const sandbox = {
    window: {},
    document: {
        createElement: () => ({
            getContext: () => ({}),
            toDataURL: () => ""
        }),
        location: { href: "http://localhost", hostname: "localhost" }
    },
    navigator: { userAgent: "node", appVersion: "5.0" },
    location: { href: "http://localhost", search: "" },
    atob: (str) => Buffer.from(str, 'base64').toString('binary'),
    String: String,
    Array: Array,
    Object: Object,
    parseInt: parseInt,
    parseFloat: parseFloat,
    decodeURIComponent: decodeURIComponent,
    JSON: JSON,
    Math: Math,
    Date: Date,
    console: { log: () => {}, warn: () => {}, error: () => {} }, // 屏蔽噪声
    setTimeout: () => {},
    setInterval: () => {}
};

// 允许自引用，防止 window.window 报错
sandbox.window = sandbox;
sandbox.self = sandbox;
sandbox.global = sandbox;

const context = vm.createContext(sandbox);

console.log(`正在读取文件: ${TARGET_FILE}...`);
const code = fs.readFileSync(TARGET_FILE, "utf-8");
const ast = parser.parse(code, { sourceType: "script" });

// 存储找到的组件
const stringArrayFuncs = new Map(); // name -> code
const decryptors = new Map();       // name -> { arrayName, code }
const rotators = [];                // list of codes

console.log("正在分析混淆结构...");

// ============================================================================
// 2. 扫描 AST 寻找特征 (与上一版相同，因为这部分工作正常)
// ============================================================================
traverse(ast, {
    // A. 寻找字符串大数组函数
    FunctionDeclaration(path) {
        const { node } = path;
        if (!node.body.body.length) return;
        let hasLargeArray = false;
        traverse(node, {
            ArrayExpression(innerPath) {
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

// B. 寻找解密函数
traverse(ast, {
    FunctionDeclaration(path) {
        const { node } = path;
        if (!node.id) return;
        const codeStr = generate(node).code;
        let usedArrayName = null;
        for (const [arrName] of stringArrayFuncs) {
            if (codeStr.includes(`${arrName}()`) || codeStr.includes(`${arrName} =`)) {
                usedArrayName = arrName;
                break;
            }
        }
        if (!usedArrayName) return;
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
            decryptors.set(node.id.name, { arrayName: usedArrayName, code: codeStr });
        }
    }
});

// C. 寻找 Rotator (洗牌逻辑)
traverse(ast, {
    CallExpression(path) {
        const { node } = path;
        if (!t.isFunctionExpression(node.callee)) return;
        const codeStr = generate(node).code;
        if ((codeStr.includes('while') || codeStr.includes('for')) &&
            codeStr.includes('push') && 
            codeStr.includes('shift')) {
            let related = false;
            for (const [decName] of decryptors) {
                if (codeStr.includes(decName)) { related = true; break; }
            }
            if (!related) {
                for (const [arrName] of stringArrayFuncs) {
                    if (codeStr.includes(arrName)) { related = true; break; }
                }
            }
            if (related) rotators.push(codeStr);
        }
    }
});

// ============================================================================
// 3. 执行解密环境
// ============================================================================
console.log(`\n统计信息:`);
console.log(` - 大数组: ${stringArrayFuncs.size}, 解密器: ${decryptors.size}, 洗牌器: ${rotators.length}`);

if (decryptors.size === 0) {
    console.error("❌ 未找到解密函数，请检查源码。");
    process.exit(1);
}

console.log("\n正在沙箱中运行洗牌逻辑...");
stringArrayFuncs.forEach(code => vm.runInContext(code, context));
decryptors.forEach(({ code }) => vm.runInContext(code, context));
rotators.forEach(code => {
    try { vm.runInContext(code, context); } catch (e) {}
});

// ============================================================================
// 4. 增强版替换逻辑：作用域追踪 (Scope Tracing)
// ============================================================================
console.log("\n开始作用域追踪与替换...");
let replaceCount = 0;
let failCount = 0;

traverse(ast, {
    CallExpression(path) {
        const { callee, arguments: args } = path.node;
        
        // 只处理有一个数字参数的调用
        if (args.length !== 1 || !t.isNumericLiteral(args[0])) return;

        let targetDecryptorName = null;

        // 情况 1: 直接调用，如 VC(123)
        if (t.isIdentifier(callee) && decryptors.has(callee.name)) {
            targetDecryptorName = callee.name;
        } 
        // 情况 2: 别名调用，如 var a = VC; a(123)
        else if (t.isIdentifier(callee)) {
            // 使用 Babel 强大的作用域查找功能
            const binding = path.scope.getBinding(callee.name);
            
            // 如果找到了变量定义
            if (binding && binding.path.isVariableDeclarator()) {
                const init = binding.path.node.init;
                // 检查定义是否为: var a = VC;
                if (init && t.isIdentifier(init) && decryptors.has(init.name)) {
                    targetDecryptorName = init.name;
                }
            }
        }

        // 如果确定是解密调用
        if (targetDecryptorName) {
            const idx = args[0].value;
            try {
                // 在沙箱里跑一下
                const result = vm.runInContext(`${targetDecryptorName}(${idx})`, context);
                
                if (typeof result === 'string') {
                    path.replaceWith(t.stringLiteral(result));
                    replaceCount++;
                } else {
                    // 结果不是字符串，可能是索引错误或空值
                    // failCount++;
                }
            } catch (e) {
                failCount++;
            }
        }
    }
});

console.log(`\n🎉 任务完成！`);
console.log(` - 成功替换: ${replaceCount} 处`);
console.log(` - 解密失败/跳过: ${failCount} 处`);
console.log(`文件写入: ${OUTPUT_FILE}`);

const output = generate(ast, {}, code);
fs.writeFileSync(OUTPUT_FILE, output.code);