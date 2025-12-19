const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js";
const OUTPUT_FILE = "source_deobfuscated_v7.js";

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
// 2. 强关联特征识别
// ============================================================================
const stringArrayFuncs = new Map(); // Name -> Code
const decryptors = new Map();       // Name -> { Code, ArrayName }
const rotators = [];                // List of Codes

const BASE64_FINGERPRINT = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";

console.log("正在执行强关联扫描...");

// [步骤 1] 扫描大数组 (特征: 赋值给变量且长度>10的纯字符串数组)
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

// [步骤 3] 扫描洗牌器 (特征: IIFE + 循环位移 + 必须引用了步骤1中的数组名)
traverse(ast, {
    CallExpression(path) {
        if (!t.isFunctionExpression(path.node.callee)) return;
        const codeStr = generate(path.node).code;

        // 基础结构特征
        if ((codeStr.includes('while') || codeStr.includes('for')) && 
            codeStr.includes('push') && 
            codeStr.includes('shift')) {
            
            // 【关键改进】强关联检查：代码中必须出现某个已知大数组的名字
            let isLinked = false;
            for (const [arrName] of stringArrayFuncs) {
                // 检查是否调用了数组函数 (例如 xC() )
                // 或者作为参数传递 (这种情况较少，通常是直接闭包调用)
                if (codeStr.includes(arrName)) {
                    isLinked = true;
                    break;
                }
            }

            if (isLinked) {
                console.log(codeStr)
                rotators.push(codeStr);
            }
        }
    }
});

// ============================================================================
// 3. 激活环境 & 4. 替换
// ============================================================================
console.log(`\n统计信息 (强关联模式):`);
console.log(` - 字符串数组函数: ${stringArrayFuncs.size} 个`);
console.log(` - 目标解密函数:   ${decryptors.size} 个`);
console.log(` - 洗牌逻辑片段:   ${rotators.length} 个 (预期应与数组数量一致)`);

// 完整性校验
if (stringArrayFuncs.size === 0 || decryptors.size === 0 || rotators.size === 0) {
    console.error("❌ 严重错误：未找到完整的混淆组件，请检查文件是否为标准格式。");
    process.exit(1);
}
// 提示：通常洗牌器数量应该 >= 数组数量 (有时一个数组会被多个地方初始化，虽然少见)
if (rotators.length > stringArrayFuncs.size + 2) {
    console.warn("⚠️ 警告：洗牌器数量依然略多，请检查是否有其他代码也引用了数组函数名。");
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