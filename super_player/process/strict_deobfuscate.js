const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js";
const OUTPUT_FILE = "source_deobfuscated_v6.js";

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
// 2. 严格特征识别 (修正了误判逻辑)
// ============================================================================
const stringArrayFuncs = new Map(); // Name -> Code
const decryptors = new Map();       // Name -> { Code, ArrayName }
const rotators = [];                // List of Codes

// 核心指纹
const BASE64_FINGERPRINT = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";

console.log("正在执行严格扫描...");

// [阶段一] 扫描大数组和洗牌器
traverse(ast, {
    FunctionDeclaration(path) {
        if (!path.node.body.body.length || !path.node.id) return;
        
        let isStringArray = false;
        
        traverse(path.node, {
            // 修改点：只检查赋值给变量的数组，排除内联数组
            VariableDeclarator(innerPath) {
                const init = innerPath.node.init;
                if (t.isArrayExpression(init)) {
                    // 修改点：阈值提高到 10，过滤掉简单的类型检查数组
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
    },
    
    // 寻找洗牌器
    CallExpression(path) {
        if (!t.isFunctionExpression(path.node.callee)) return;
        const codeStr = generate(path.node).code;
        if ((codeStr.includes('while') || codeStr.includes('for')) && 
            codeStr.includes('push') && codeStr.includes('shift')) {
            rotators.push(codeStr);
        }
    }
});

// [阶段二] 扫描解密函数 (依赖阶段一的结果)
traverse(ast, {
    FunctionDeclaration(path) {
        if (!path.node.id) return;
        
        const codeStr = generate(path.node).code;
        
        // 特征 1: 必须包含 Base64 指纹
        if (!codeStr.includes(BASE64_FINGERPRINT)) return;

        // 特征 2: 必须调用了已知的大数组
        let usedArrayName = null;
        for (const [arrName] of stringArrayFuncs) {
            // 严格匹配调用: xC() 或 xC =
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

// ============================================================================
// 3. 激活环境 & 4. 替换逻辑
// ============================================================================
console.log(`\n统计信息 (修正后):`);
console.log(` - 字符串数组函数: ${stringArrayFuncs.size} 个 (预期 17 个)`); // 之前是 18，现在应该是 17
console.log(` - 目标解密函数:   ${decryptors.size} 个 (预期 17 个)`);
console.log(` - 洗牌逻辑片段:   ${rotators.length} 个`);

if (stringArrayFuncs.size !== decryptors.size) {
    console.warn("⚠️ 警告: 数组函数数量与解密函数数量不一致，可能仍有误报或漏报，请检查日志。");
}

if (decryptors.size === 0) {
    console.error("❌ 未找到解密函数。");
    process.exit(1);
}

console.log("\n正在沙箱中初始化...");
stringArrayFuncs.forEach(code => vm.runInContext(code, context));
decryptors.forEach(({ code }) => vm.runInContext(code, context));
rotators.forEach(code => { try { vm.runInContext(code, context); } catch (e) {} });

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
                            // 依然保持严格的字符串检查
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