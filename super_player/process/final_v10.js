const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js";
const OUTPUT_FILE = "source_deobfuscated_v10.js";

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
// 2. 特征识别 (引入反VM机制)
// ============================================================================
const stringArrayFuncs = new Map(); 
const decryptors = new Map();       
const rotators = [];                

const BASE64_FINGERPRINT = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";

console.log("正在执行 v10.0 智能扫描...");

// [步骤 1] 扫描大数组
traverse(ast, {
    FunctionDeclaration(path) {
        if (!path.node.body.body.length || !path.node.id) return;
        let isStringArray = false;
        traverse(path.node, {
            VariableDeclarator(innerPath) {
                const init = innerPath.node.init;
                if (t.isArrayExpression(init)) {
                    // 长度必须大于 10 且全为字符串
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

// [步骤 3] 扫描洗牌器 (剔除 VM 和 伪装者)
traverse(ast, {
    CallExpression(path) {
        if (!t.isFunctionExpression(path.node.callee)) return;
        const codeStr = generate(path.node).code;

        // 基础特征
        if (!codeStr.includes('while') && !codeStr.includes('for')) return;
        if (!codeStr.includes('try') || !codeStr.includes('catch')) return;

        // 【关键过滤 1】绝对排除 switch 语句
        // 真正的洗牌器是纯算术比较，不会用到 switch 分发指令，那是 VM 的特征
        if (codeStr.includes('switch')) return;

        // 【关键过滤 2】紧耦合检查
        // 真正的洗牌器必须包含类似 array.push(array.shift()) 的模式
        // 而 VM 通常是 stack.push(...) 和 args.shift() 分开的
        // 正则匹配 .push( .shift() ) 结构，允许中间有变量名和空白
        const pushShiftPattern = /\.push\(\s*[\w\$_]+\.shift\(\)\s*\)/;
        if (!pushShiftPattern.test(codeStr)) return;

        // 【关键过滤 3】强关联检查
        let isLinked = false;
        for (const [arrName] of stringArrayFuncs) {
            if (codeStr.includes(arrName)) {
                isLinked = true;
                break;
            }
        }
        if (!isLinked) {
            // 双重保险：检查是否引用了解密函数别名
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
// 3. 执行 & 4. 替换
// ============================================================================
console.log(`\n统计信息:`);
console.log(` - 字符串数组函数: ${stringArrayFuncs.size} 个 (预期 17)`);
console.log(` - 目标解密函数:   ${decryptors.size} 个 (预期 17)`);
console.log(` - 洗牌逻辑片段:   ${rotators.length} 个 (预期 17)`);

// 安全检查
if (stringArrayFuncs.size === 0) {
    console.error("❌ 未找到数组函数。");
    process.exit(1);
}

if (rotators.length > stringArrayFuncs.size) {
    console.warn("⚠️ 警告：洗牌器数量仍多于数组数量，可能有极少数顽固分子，但影响应该不大了。");
}

console.log("\n正在沙箱中初始化...");

// 执行顺序非常重要
stringArrayFuncs.forEach(code => vm.runInContext(code, context));
decryptors.forEach(({ code }) => vm.runInContext(code, context));

console.log("执行洗牌逻辑...");
rotators.forEach(code => { 
    try { 
        vm.runInContext(code, context); 
    } catch (e) {
        // console.warn("洗牌器执行异常(可忽略):", e.message.substring(0, 50));
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