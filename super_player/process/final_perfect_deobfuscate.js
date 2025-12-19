const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js";
const OUTPUT_FILE = "source_deobfuscated_v8.js";

// ============================================================================
// 1. 强力沙箱
// ============================================================================
const sandbox = {
    window: {
        addEventListener: () => {},
        removeEventListener: () => {},
        document: {},
        location: { href: "https://v.qq.com", hostname: "v.qq.com" }
    },
    navigator: { userAgent: "node" },
    document: {
        createElement: () => ({ getContext: () => ({}), toDataURL: () => "" }),
        location: { href: "https://v.qq.com" },
        cookie: ""
    },
    location: { href: "https://v.qq.com", hostname: "v.qq.com" },
    atob: (str) => Buffer.from(str, 'base64').toString('binary'),
    String, Array, Object, parseInt, parseFloat, decodeURIComponent, JSON, Math, Date,
    console: { log: () => {}, warn: () => {}, error: () => {} },
    setTimeout: (fn) => fn(), 
    setInterval: () => {}, 
    self: {}
};
sandbox.window.window = sandbox.window;
sandbox.self = sandbox.window;
sandbox.global = sandbox.window;

const context = vm.createContext(sandbox);

console.log(`正在读取文件: ${TARGET_FILE}...`);
const code = fs.readFileSync(TARGET_FILE, "utf-8");
const ast = parser.parse(code, { sourceType: "script" });

// ============================================================================
// 2. 强关联 + 结构特征识别
// ============================================================================
const stringArrayFuncs = new Map(); // Name -> Code
const decryptors = new Map();       // Name -> { Code, ArrayName }
const rotators = [];                // List of Codes

const BASE64_FINGERPRINT = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";

console.log("正在执行高精度扫描...");

// [步骤 1] 扫描大数组 (特征: 赋值给变量且长度>10的纯字符串数组)
traverse(ast, {
    FunctionDeclaration(path) {
        if (!path.node.body.body.length || !path.node.id) return;
        
        let isStringArray = false;
        traverse(path.node, {
            VariableDeclarator(innerPath) {
                const init = innerPath.node.init;
                if (t.isArrayExpression(init)) {
                    // 严格: 长度 > 10 且元素全是字符串
                    if (init.elements.length > 10 && 
                        init.elements.every(el => t.isStringLiteral(el))) {
                        isStringArray = true;
                        innerPath.stop();
                    }
                }
            },
            noScope: true
        });

        if (isStringArray) {
            stringArrayFuncs.set(path.node.id.name, generate(path.node).code);
        }
    }
});

// [步骤 2] 扫描解密函数 (特征: 包含Base64指纹 + 调用了步骤1中的数组)
traverse(ast, {
    FunctionDeclaration(path) {
        if (!path.node.id) return;
        const codeStr = generate(path.node).code;
        
        if (!codeStr.includes(BASE64_FINGERPRINT)) return;

        let usedArrayName = null;
        for (const [arrName] of stringArrayFuncs) {
            if (codeStr.includes(`${arrName}()`) || codeStr.includes(`${arrName}=`)) {
                usedArrayName = arrName;
                break;
            }
        }

        if (usedArrayName) {
            decryptors.set(path.node.id.name, {
                code: codeStr,
                arrayName: usedArrayName
            });
        }
    }
});

// [步骤 3] 扫描洗牌器 (特征: IIFE + try-catch + push/shift + 引用数组)
traverse(ast, {
    CallExpression(path) {
        if (!t.isFunctionExpression(path.node.callee)) return;
        const codeStr = generate(path.node).code;

        // 特征 1: 必须包含 while 或 for 循环
        if (!codeStr.includes('while') && !codeStr.includes('for')) return;
        
        // 特征 2: 【关键修正】必须包含 try...catch 结构
        // 混淆器的洗牌逻辑依赖异常捕获来退出循环或继续
        if (!codeStr.includes('try') || !codeStr.includes('catch')) return;

        // 特征 3: 必须包含 push 和 shift 操作 (移位)
        if (!codeStr.includes('push') || !codeStr.includes('shift')) return;

        // 特征 4: 强关联检查 - 必须引用了已知的数组函数名
        let isLinked = false;
        for (const [arrName] of stringArrayFuncs) {
            if (codeStr.includes(arrName)) {
                isLinked = true;
                break;
            }
        }
        
        // 双重保险：如果没有直接引用数组名，检查是否引用了解密函数名
        // 有些混淆器会 var a = DecryptFunc; 然后用 a 里的数组引用
        if (!isLinked) {
             for (const [decName] of decryptors) {
                if (codeStr.includes(decName)) {
                    isLinked = true;
                    break;
                }
            }
        }

        if (isLinked) {
            rotators.push(codeStr);
        }
    }
});

// ============================================================================
// 3. 激活环境 & 4. 替换
// ============================================================================
console.log(`\n统计信息 (v8.0 精准模式):`);
console.log(` - 字符串数组函数: ${stringArrayFuncs.size} 个 (预期 17)`);
console.log(` - 目标解密函数:   ${decryptors.size} 个 (预期 17)`);
console.log(` - 洗牌逻辑片段:   ${rotators.length} 个 (预期 ~17)`);

if (stringArrayFuncs.size === 0 || decryptors.size === 0 || rotators.size === 0) {
    console.error("❌ 严重错误：未找到完整的混淆组件。");
    process.exit(1);
}

// 检查数量是否匹配
if (rotators.length !== stringArrayFuncs.size) {
    console.warn(`⚠️ 注意：洗牌器数量 (${rotators.length}) 与数组数量 (${stringArrayFuncs.size}) 不完全一致，可能仍有少量误判或复用，但 try-catch 过滤已剔除大部分业务代码。`);
}

console.log("\n正在沙箱中初始化...");
stringArrayFuncs.forEach(code => vm.runInContext(code, context));
decryptors.forEach(({ code }) => vm.runInContext(code, context));

console.log("执行洗牌逻辑 (这可能需要几秒钟)...");
rotators.forEach(code => { 
    try { 
        vm.runInContext(code, context); 
    } catch (e) {
        // 洗牌器内部报错通常是预期的（在退出条件前），或者是环境差异，只要数组变了就行
    } 
});

console.log("开始替换...");
let replaceCount = 0;
let skipCount = 0;

traverse(ast, {
    Program(path) {
        const scopeMap = new Map();
        decryptors.forEach((_, name) => scopeMap.set(name, name));

        path.traverse({
            VariableDeclarator(p) {
                if (t.isIdentifier(p.node.init) && scopeMap.has(p.node.init.name)) {
                    scopeMap.set(p.node.id.name, scopeMap.get(p.node.init.name));
                }
            },
            AssignmentExpression(p) {
                if (t.isIdentifier(p.node.right) && scopeMap.has(p.node.right.name) && t.isIdentifier(p.node.left)) {
                    scopeMap.set(p.node.left.name, scopeMap.get(p.node.right.name));
                }
            },
            CallExpression(p) {
                const { callee, arguments: args } = p.node;
                if (t.isIdentifier(callee) && scopeMap.has(callee.name)) {
                    const originalName = scopeMap.get(callee.name);
                    if (args.length === 1 && t.isNumericLiteral(args[0])) {
                        const idx = args[0].value;
                        try {
                            const result = vm.runInContext(`${originalName}(${idx})`, context);
                            if (typeof result === 'string' && result.length > 0) {
                                p.replaceWith(t.stringLiteral(result));
                                replaceCount++;
                            } else {
                                skipCount++;
                            }
                        } catch (e) {
                            skipCount++;
                        }
                    }
                }
            }
        });
    }
});

console.log(`\n🎉 任务完成！`);
console.log(` - 成功还原: ${replaceCount} 处`);
console.log(` - 放弃替换: ${skipCount} 处`);
console.log(`文件写入: ${OUTPUT_FILE}`);

const output = generate(ast, {}, code);
fs.writeFileSync(OUTPUT_FILE, output.code);