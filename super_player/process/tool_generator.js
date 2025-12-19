const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");

const TARGET_FILE = "source.js";
const TOOL_FILENAME = "txv_decryptor.js"; // 生成的工具文件名

// 读取源码
console.log(`正在读取文件: ${TARGET_FILE}...`);
const code = fs.readFileSync(TARGET_FILE, "utf-8");
const ast = parser.parse(code, { sourceType: "script" });

// 存储提取到的代码片段
const stringArrayFuncs = new Map(); // Name -> Code
const decryptors = new Map();       // Name -> { Code, ArrayName }
const rotators = [];                // List of Codes

const BASE64_FINGERPRINT = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";

console.log("正在提取混淆组件...");

// ============================================================================
// 1. 扫描逻辑 (复用 v10 的精准逻辑)
// ============================================================================

// [A] 扫描大数组
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

// [B] 扫描解密函数
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

// [C] 扫描洗牌器
traverse(ast, {
    CallExpression(path) {
        if (!t.isFunctionExpression(path.node.callee)) return;
        const codeStr = generate(path.node).code;

        if (!codeStr.includes('while') && !codeStr.includes('for')) return;
        if (!codeStr.includes('try') || !codeStr.includes('catch')) return;
        if (codeStr.includes('switch')) return; // 排除 VM

        const pushShiftPattern = /\.push\(\s*[\w\$_]+\.shift\(\)\s*\)/;
        if (!pushShiftPattern.test(codeStr)) return;

        let isLinked = false;
        for (const [arrName] of stringArrayFuncs) {
            if (codeStr.includes(arrName)) {
                isLinked = true;
                break;
            }
        }
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
// 2. 组装工具文件
// ============================================================================

console.log(`\n提取统计:`);
console.log(` - 数组函数: ${stringArrayFuncs.size}`);
console.log(` - 解密函数: ${decryptors.size}`);
console.log(` - 洗牌逻辑: ${rotators.length}`);

if (decryptors.size === 0) {
    console.error("❌ 未找到解密组件，无法生成工具。");
    process.exit(1);
}

console.log(`\n正在生成独立工具库: ${TOOL_FILENAME} ...`);

const funcNames = Array.from(decryptors.keys());

// 构造文件内容
const outputContent = `
/* 
 * 腾讯视频混淆字符串解密工具 (Auto Generated)
 * 包含 ${decryptors.size} 组解密逻辑
 */

// ------------------------------------------------------------------
// 1. 简易环境模拟 (Polyfills)
// ------------------------------------------------------------------
const window = {
    location: { href: "https://v.qq.com", hostname: "v.qq.com" }
};
const navigator = { userAgent: "node" };
const document = {
    createElement: () => ({ getContext: () => ({}), toDataURL: () => "" }),
    location: window.location
};
const location = window.location;

// Node.js 版 atob
function atob(str) {
    return Buffer.from(str, 'base64').toString('binary');
}

// ------------------------------------------------------------------
// 2. 核心混淆代码 (数组 + 解密器)
// ------------------------------------------------------------------
${Array.from(stringArrayFuncs.values()).join("\n\n")}

${Array.from(decryptors.values()).map(d => d.code).join("\n\n")}

// ------------------------------------------------------------------
// 3. 初始化洗牌逻辑 (Shuffle)
// ------------------------------------------------------------------
console.log("正在初始化解密字典 (Running Shufflers)...");
try {
${rotators.map(code => `    (function(){ try { ${code} } catch(e){} })();`).join("\n")}
    console.log("✅ 初始化完成！");
} catch (e) {
    console.error("⚠️ 初始化过程中出现非致命错误:", e.message);
}

// ------------------------------------------------------------------
// 4. 导出工具函数
// ------------------------------------------------------------------
module.exports = {
    ${funcNames.join(",\n    ")}
};

// 简单的自测逻辑 (直接运行此文件时触发)
if (require.main === module) {
    console.log("\\n--- 自测模式 ---");
    // 尝试调用第一个解密函数测试
    const firstFunc = "${funcNames[0]}";
    try {
        console.log("测试调用 " + firstFunc + "(369):", module.exports[firstFunc](369));
    } catch(e) {
        console.log("测试调用失败 (索引可能无效):", e.message);
    }
}
`;

fs.writeFileSync(TOOL_FILENAME, outputContent);
console.log(`🎉 工具生成成功！现在你可以直接 require('./${TOOL_FILENAME}') 来使用了。`);