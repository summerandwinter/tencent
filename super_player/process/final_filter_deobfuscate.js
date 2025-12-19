const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js";
const OUTPUT_FILE = "source_deobfuscated_v9.js";

// ============================================================================
// 1. 沙箱环境
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
// 增加 allowReturnOutsideFunction 选项以防源码并非标准模块
const ast = parser.parse(code, { sourceType: "script", allowReturnOutsideFunction: true });

// ============================================================================
// 2. 特征定义
// ============================================================================
const stringArrayFuncs = new Map(); // Name -> Code
const decryptors = new Map();       // Name -> { Code, ArrayName }
const rotators = [];                // List of Codes

// 白名单特征：解密函数必须包含这个
const BASE64_FINGERPRINT = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";

// 【新增】黑名单特征：洗牌器绝对不能包含这些字符串
// AGFzb: WebAssembly 二进制头 \0asm 的 Base64
// __esModule: Webpack 模块标记
const BLACKLIST_KEYWORDS = ["AGFzb", "__esModule", "exports"];

console.log("正在执行带黑名单过滤的扫描...");

// [步骤 1] 扫描大数组
traverse(ast, {
    FunctionDeclaration(path) {
        if (!path.node.body.body.length || !path.node.id) return;
        
        let isStringArray = false;
        traverse(path.node, {
            VariableDeclarator(innerPath) {
                const init = innerPath.node.init;
                if (t.isArrayExpression(init)) {
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

// [步骤 2] 扫描解密函数
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

// [步骤 3] 扫描洗牌器 (含黑名单过滤)
traverse(ast, {
    CallExpression(path) {
        // 必须是 IIFE
        if (!t.isFunctionExpression(path.node.callee)) return;
        
        const codeStr = generate(path.node).code;

        // 基础特征检测
        const hasLoop = codeStr.includes('while') || codeStr.includes('for');
        const hasTryCatch = codeStr.includes('try') && codeStr.includes('catch');
        const hasArrayOp = codeStr.includes('push') && codeStr.includes('shift');

        if (hasLoop && hasTryCatch && hasArrayOp) {
            
            // 【过滤逻辑 1】黑名单检查
            // 如果包含了 WASM 相关的关键字，直接判定为“伪装者”，跳过
            const isBlacklisted = BLACKLIST_KEYWORDS.some(kw => codeStr.includes(kw));
            if (isBlacklisted) {
                // console.log("排除疑似 WASM/模块加载器代码...");
                return; 
            }

            // 【过滤逻辑 2】强关联检查
            // 必须引用了已知的大数组函数名
            let isLinked = false;
            for (const [arrName] of stringArrayFuncs) {
                if (codeStr.includes(arrName)) {
                    isLinked = true;
                    break;
                }
            }
            // 或者引用了解密函数名 (有些混淆变种会 var a = DecryptFunc)
            if (!isLinked) {
                for (const [decName] of decryptors) {
                    if (codeStr.includes(decName)) {
                        isLinked = true;
                        break;
                    }
                }
            }

            if (isLinked) {
                console.log("洗牌期")
                console.log(codeStr)
                rotators.push(codeStr);
            }
        }
    }
});

// ============================================================================
// 3. 激活与替换
// ============================================================================
console.log(`\n统计信息 (黑名单过滤后):`);
console.log(` - 字符串数组函数: ${stringArrayFuncs.size} 个 (预期 17)`);
console.log(` - 目标解密函数:   ${decryptors.size} 个 (预期 17)`);
console.log(` - 洗牌逻辑片段:   ${rotators.length} 个 (预期 17)`);

if (stringArrayFuncs.size === 0) {
    console.error("❌ 未找到混淆组件。");
    process.exit(1);
}

// 再次校验数量匹配
if (rotators.length > stringArrayFuncs.size) {
    console.warn("⚠️ 警告：洗牌器数量依然多于数组数量，可能有其他未知类型的 IIFE 混入，但应不影响运行。");
}

console.log("\n正在沙箱中初始化...");
stringArrayFuncs.forEach(code => vm.runInContext(code, context));
decryptors.forEach(({ code }) => vm.runInContext(code, context));

console.log("执行洗牌逻辑...");
// 为了防止个别错误的洗牌器卡死（死循环），我们给每个执行加个超时限制是不现实的（VM不支持），
// 但我们可以通过 try-catch 包裹来容错。
rotators.forEach(code => { 
    try { 
        vm.runInContext(code, context); 
    } catch (e) {
        // 忽略非关键错误
    } 
});

console.log("开始数据流追踪与替换...");

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