const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js";
const OUTPUT_FILE = "source_cleaned.js";

// 1. 读取源码
console.log(`正在读取文件: ${TARGET_FILE}...`);
const code = fs.readFileSync(TARGET_FILE, "utf-8");

// ============================================================
// 核心逻辑：利用正则“抠”出混淆代码块
// ============================================================
const decryptors = {};

// 步骤 A: 寻找所有的大数组函数 (特征: 返回一个字符串数组)
// 匹配: function xC(){var e=["..."];return(xC=function(){return e})()}
const arrayFuncRegex = /function\s+(\w+)\(\)\s*\{\s*var\s+\w+\s*=\s*(\[[^;]+\]);\s*return\s*\(\1\s*=\s*function\s*\(\)\s*\{\s*return\s+\w+\s*\}\s*\)\(\)\s*\}/g;

// 步骤 B: 寻找解密函数 (特征: 接受两个参数，调用大数组，有 -= 操作)
// 匹配: function VC(e,t){var o=xC();return VC=function(t,i){...},VC(e,t)}
const decryptFuncRegex = /function\s+(\w+)\(\w+,\s*\w+\)\s*\{\s*var\s+\w+\s*=\s*(\w+)\(\);[\s\S]*?return\s+\1\(\w+,\s*\w+\)\s*\}/g;

// 步骤 C: 寻找洗牌逻辑 (特征: 死循环, parseInt, push, shift)
// 匹配: !function(e,t){ ... }( ... )
const rotatorRegex = /[\(!]\s*function\s*\([^\)]*\)\s*\{[\s\S]*?parseInt[\s\S]*?shift\(\)\s*\}\s*(\)\(\)|}\(\))/g;

// --- 提取代码 ---
console.log("正在扫描混淆代码块...");

// 1. 提取所有大数组代码
const arrayFuncs = {};
let match;
while ((match = arrayFuncRegex.exec(code)) !== null) {
    const funcName = match[1];
    const funcCode = match[0];
    arrayFuncs[funcName] = funcCode;
}

// 2. 提取所有解密函数代码，并尝试匹配对应的数组和洗牌逻辑
while ((match = decryptFuncRegex.exec(code)) !== null) {
    const decName = match[1];      // 例如 VC
    const arrName = match[2];      // 例如 xC
    const decCode = match[0];

    if (arrayFuncs[arrName]) {
        decryptors[decName] = {
            name: decName,
            arrayName: arrName,
            code: arrayFuncs[arrName] + "\n" + decCode
        };
    }
}

// 3. 扫描洗牌逻辑，并关联到对应的解密器
// 我们遍历所有找到的 rotator，看它里面用到了哪个解密函数
let rotatorMatch;
while ((rotatorMatch = rotatorRegex.exec(code)) !== null) {
    const rotatorCode = rotatorMatch[0];
    // 检查这个 rotator 属于哪个解密器
    for (const decName in decryptors) {
        // 特征：洗牌代码里一定会出现 "var o = VC" 或者直接调用 VC
        // 或者 "var o = " + decName
        if (rotatorCode.includes(`= ${decName};`) || rotatorCode.includes(`${decName}(`)) {
            decryptors[decName].rotator = rotatorCode;
            // 补全 IIFE 的调用部分，有些正则可能没匹配到末尾的 ()
            if (!decryptors[decName].rotator.endsWith(")")) {
                decryptors[decName].rotator += "()";
            }
        }
    }
}

// 统计找到的完整簇
const validDecryptors = Object.values(decryptors).filter(d => d.rotator);
console.log(`✅ 成功识别 ${validDecryptors.length} 组完整混淆逻辑 (数组+解密+洗牌)`);

if (validDecryptors.length === 0) {
    console.error("❌ 未找到完整的混淆簇，请检查正则表达式或文件内容。");
    // 强制退出，避免空跑
    process.exit(1);
}

// ============================================================
// 执行阶段：沙箱解密
// ============================================================
console.log("正在初始化沙箱环境...");

const sandbox = {
    window: {},
    navigator: { userAgent: "node" },
    atob: (str) => Buffer.from(str, 'base64').toString('binary'),
    String: String,
    Array: Array,
    parseInt: parseInt,
    decodeURIComponent: decodeURIComponent,
    JSON: JSON,
    console: console // 允许打印日志
};

const context = vm.createContext(sandbox);

// 把所有解密代码扔进沙箱跑一遍 (数组定义 + 解密函数定义 + 洗牌)
validDecryptors.forEach(d => {
    try {
        console.log(` - 激活解密器: ${d.name}`);
        // 拼接代码：数组函数 + 解密函数 + 洗牌逻辑
        // 有些 rotator 是 !function... 我们要把它变成表达式或者直接执行
        let fullScript = d.code + ";\n" + d.rotator + ";";
        // 修正开头可能是 ! 的情况
        if (fullScript.trim().startsWith("!")) {
             fullScript = fullScript.trim().substring(1) + ";"; 
        }
        vm.runInContext(fullScript, context);
    } catch (e) {
        console.warn(`   ⚠️ 激活 ${d.name} 失败: ${e.message}`);
    }
});

// ============================================================
// 替换阶段：AST 遍历
// ============================================================
console.log("\n正在解析 AST 并执行替换...");
const ast = parser.parse(code, { sourceType: "script" });
let replaceCount = 0;

traverse(ast, {
    CallExpression(path) {
        const { callee, arguments: args } = path.node;
        
        // 检查是否是已激活的解密函数调用
        if (t.isIdentifier(callee) && decryptors[callee.name]) {
            const decryptorName = callee.name;
            
            // 必须是单参数且为数字
            if (args.length === 1 && t.isNumericLiteral(args[0])) {
                const idx = args[0].value;
                try {
                    // 调用沙箱中的解密函数
                    const result = vm.runInContext(`${decryptorName}(${idx})`, context);
                    
                    if (typeof result === 'string') {
                        path.replaceWith(t.stringLiteral(result));
                        replaceCount++;
                    }
                } catch (e) {
                    // 忽略解密错误
                }
            }
        }
    }
});

console.log(`\n🎉 任务完成！共还原 ${replaceCount} 处混淆字符串。`);
console.log(`文件已保存至: ${OUTPUT_FILE}`);

const output = generate(ast, {}, code);
fs.writeFileSync(OUTPUT_FILE, output.code);