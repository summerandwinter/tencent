const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js"; // 你的源文件
const OUTPUT_FILE = "source_deobfuscated_v4.js";

// ============================================================================
// 1. 强力沙箱环境 (模拟完整浏览器环境)
// ============================================================================
const sandbox = {
    window: {
        addEventListener: () => {},
        removeEventListener: () => {},
        document: {},
        location: { href: "https://v.qq.com", hostname: "v.qq.com" }
    },
    navigator: { userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)", appVersion: "5.0" },
    document: {
        createElement: () => ({ getContext: () => ({}), toDataURL: () => "" }),
        location: { href: "https://v.qq.com" },
        cookie: ""
    },
    location: { href: "https://v.qq.com", hostname: "v.qq.com" },
    atob: (str) => Buffer.from(str, 'base64').toString('binary'),
    String, Array, Object, parseInt, parseFloat, decodeURIComponent, JSON, Math, Date,
    console: { log: () => {}, warn: () => {}, error: () => {} },
    setTimeout: (fn) => fn(), // 立即执行
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
// 2. 自动化特征识别 (识别解密器、数组、洗牌器)
// ============================================================================
const decryptorNames = new Set(); // 存储所有确定的解密函数名 (例如 'VC', 'fp')
const componentMap = new Map();   // 存储代码片段

console.log("正在扫描代码特征...");

traverse(ast, {
    // 步骤 A: 寻找字符串大数组
    FunctionDeclaration(path) {
        if (!path.node.body.body.length) return;
        let isStringArray = false;
        traverse(path.node, {
            ArrayExpression(p) {
                if (p.node.elements.length > 5 && p.node.elements.every(el => t.isStringLiteral(el))) {
                    isStringArray = true;
                    p.stop();
                }
            },
            noScope: true
        });
        if (isStringArray && path.node.id) {
            componentMap.set(path.node.id.name, { type: 'array', code: generate(path.node).code });
        }
    },
    // 步骤 B: 寻找洗牌器 (Rotator) - IIFE
    CallExpression(path) {
        if (!t.isFunctionExpression(path.node.callee)) return;
        const codeStr = generate(path.node).code;
        if ((codeStr.includes('while') || codeStr.includes('for')) && 
            codeStr.includes('push') && codeStr.includes('shift')) {
            // 这是一个洗牌器，先存起来，稍后执行
            componentMap.set(`rotator_${path.key}`, { type: 'rotator', code: codeStr });
        }
    }
});

// 步骤 C: 寻找解密函数 (关联数组)
traverse(ast, {
    FunctionDeclaration(path) {
        if (!path.node.id) return;
        const codeStr = generate(path.node).code;
        // 检查是否引用了已知的大数组
        for (const [name, info] of componentMap) {
            if (info.type === 'array' && codeStr.includes(`${name}()`)) {
                // 且包含偏移量计算
                if (codeStr.includes('-=') || codeStr.includes('+=')) {
                    decryptorNames.add(path.node.id.name);
                    componentMap.set(path.node.id.name, { type: 'decryptor', code: codeStr });
                }
            }
        }
    }
});

// ============================================================================
// 3. 激活沙箱 (Execute)
// ============================================================================
console.log(`激活解密环境: 发现 ${decryptorNames.size} 个解密函数...`);

// 按依赖顺序执行：数组 -> 解密函数 -> 洗牌器
try {
    for (const [name, info] of componentMap) { if (info.type === 'array') vm.runInContext(info.code, context); }
    for (const [name, info] of componentMap) { if (info.type === 'decryptor') vm.runInContext(info.code, context); }
    for (const [name, info] of componentMap) { 
        if (info.type === 'rotator') {
            try { vm.runInContext(info.code, context); } catch(e) {} 
        }
    }
} catch (e) {
    console.error("沙箱初始化部分失败，尝试继续...", e.message);
}

// ============================================================================
// 4. 数据流追踪与替换 (Data Flow Analysis)
// ============================================================================
console.log("开始数据流追踪与替换...");

let replaceCount = 0;

// 这是一个作用域感知的遍历
traverse(ast, {
    Program(path) {
        // 在整个程序范围内追踪变量
        // map: 变量名 -> 原始解密函数名 (例如: {'a': 'VC', 'b': 'VC'})
        const scopeMap = new Map();
        
        // 初始化：把已知的解密函数放入 Map
        decryptorNames.forEach(name => scopeMap.set(name, name));

        path.traverse({
            // 1. 变量定义追踪: var a = VC;
            VariableDeclarator(p) {
                if (t.isIdentifier(p.node.init) && scopeMap.has(p.node.init.name)) {
                    scopeMap.set(p.node.id.name, scopeMap.get(p.node.init.name));
                }
            },
            // 2. 赋值追踪: a = VC;
            AssignmentExpression(p) {
                if (t.isIdentifier(p.node.right) && scopeMap.has(p.node.right.name) && t.isIdentifier(p.node.left)) {
                    scopeMap.set(p.node.left.name, scopeMap.get(p.node.right.name));
                }
            },
            // 3. 函数调用替换
            CallExpression(p) {
                const { callee, arguments: args } = p.node;
                
                // 检查被调用的函数是否在我们的追踪列表中
                if (t.isIdentifier(callee) && scopeMap.has(callee.name)) {
                    const originalDecryptorName = scopeMap.get(callee.name);

                    // 确保参数只有一个且是数字
                    if (args.length === 1 && t.isNumericLiteral(args[0])) {
                        const idx = args[0].value;
                        
                        try {
                            // 在沙箱中调用原始解密函数
                            // 注意：这里调用的是 originalDecryptorName (如 VC)，而不是别名 a
                            const result = vm.runInContext(`${originalDecryptorName}(${idx})`, context);
                            
                            // 替换逻辑：支持字符串、数字、布尔
                            if (typeof result === 'string') {
                                p.replaceWith(t.stringLiteral(result));
                                replaceCount++;
                            } else if (typeof result === 'number') {
                                p.replaceWith(t.numericLiteral(result));
                                replaceCount++;
                            } else if (typeof result === 'boolean') {
                                p.replaceWith(t.booleanLiteral(result));
                                replaceCount++;
                            }
                        } catch (e) {
                            // 解密失败跳过
                        }
                    }
                }
            }
        });
    }
});

console.log(`\n🎉 任务完成！共还原 ${replaceCount} 处混淆内容。`);
console.log(`文件写入: ${OUTPUT_FILE}`);

const output = generate(ast, {}, code);
fs.writeFileSync(OUTPUT_FILE, output.code);