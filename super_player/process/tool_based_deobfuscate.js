const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const path = require("path");

const TARGET_FILE = "source.js";
const TOOL_FILE = "./txv_decryptor.js";
const OUTPUT_FILE = "source_deobfuscated_final.js";

// ============================================================================
// 1. 加载“正确答案” (加载生成的工具库)
// ============================================================================
console.log(`正在加载解密工具库: ${TOOL_FILE}...`);

let decryptorTool;
try {
    decryptorTool = require(TOOL_FILE);
} catch (e) {
    console.error("❌ 无法加载解密工具，请确保 'txv_decryptor.js' 存在且能正常运行。");
    console.error("错误信息:", e.message);
    process.exit(1);
}

// 获取工具里导出的所有函数名 (例如 ['Jh', 'Wh', 'fp', ...])
const availableDecryptors = Object.keys(decryptorTool);
console.log(`✅ 工具加载成功，可用解密器: ${availableDecryptors.length} 个`);

// ============================================================================
// 2. 解析源码 AST
// ============================================================================
console.log(`正在读取文件: ${TARGET_FILE}...`);
const code = fs.readFileSync(TARGET_FILE, "utf-8");
const ast = parser.parse(code, { sourceType: "script" });

// ============================================================================
// 3. 作用域追踪与替换 (Scope Tracing & Patching)
// ============================================================================
console.log("开始基于工具库进行 AST 替换...");

let replaceCount = 0;
let errorCount = 0;

traverse(ast, {
    Program(path) {
        // 初始化作用域映射表
        // Key: 当前变量名, Value: 原始解密函数名(在工具库中的名字)
        const scopeMap = new Map();

        // 将源码中的顶层函数名映射到工具库
        // 例如源码里定义了 function Jh...，我们就记录 'Jh' -> 'Jh'
        availableDecryptors.forEach(name => {
            if (path.scope.hasBinding(name)) {
                scopeMap.set(name, name);
            }
        });

        // 开始遍历程序体
        path.traverse({
            // [追踪] 变量定义: var zB = Jh;
            VariableDeclarator(p) {
                const { id, init } = p.node;
                if (t.isIdentifier(init) && scopeMap.has(init.name)) {
                    const originalName = scopeMap.get(init.name);
                    // 记录 zB -> Jh
                    scopeMap.set(id.name, originalName);
                }
            },

            // [追踪] 赋值语句: n = zB;
            AssignmentExpression(p) {
                const { left, right } = p.node;
                if (t.isIdentifier(right) && scopeMap.has(right.name) && t.isIdentifier(left)) {
                    const originalName = scopeMap.get(right.name);
                    // 记录 n -> Jh
                    scopeMap.set(left.name, originalName);
                }
            },

            // [追踪] 函数传参 (高级): !function(e){...}(Jh)
            // 这种混淆里常见 !function(e, t){...}(Wh) 或者 (Jh)
            // 如果实参是解密函数，那么形参也标记为解密函数
            CallExpression(p) {
                const { callee, arguments: args } = p.node;
                
                // 处理 IIFE 的参数传递
                if (t.isFunctionExpression(callee) || t.isArrowFunctionExpression(callee)) {
                    const params = callee.params;
                    args.forEach((arg, index) => {
                        if (params[index] && t.isIdentifier(params[index]) && t.isIdentifier(arg)) {
                            if (scopeMap.has(arg.name)) {
                                // 映射：形参 -> 原始函数名
                                scopeMap.set(params[index].name, scopeMap.get(arg.name));
                            }
                        }
                    });
                }
                
                // [核心替换逻辑]
                if (t.isIdentifier(callee) && scopeMap.has(callee.name)) {
                    const originalName = scopeMap.get(callee.name);
                    const decryptFunc = decryptorTool[originalName];

                    // 确保调用参数只有一个且为数字: Jh(525)
                    if (args.length === 1 && t.isNumericLiteral(args[0])) {
                        const idx = args[0].value;
                        
                        try {
                            // ★★★ 调用工具库进行解密 ★★★
                            const result = decryptFunc(idx);
                            
                            // 替换代码
                            if (typeof result === 'string') {
                                p.replaceWith(t.stringLiteral(result));
                                replaceCount++;
                            } else if (typeof result === 'number') {
                                p.replaceWith(t.numericLiteral(result));
                                replaceCount++;
                            } else if (typeof result === 'boolean') {
                                p.replaceWith(t.booleanLiteral(result));
                                replaceCount++;
                            } else if (result === null) {
                                p.replaceWith(t.nullLiteral());
                                replaceCount++;
                            }
                        } catch (e) {
                            // 索引越界等错误，忽略
                            errorCount++;
                        }
                    }
                }
            }
        });
    }
});

console.log(`\n🎉 任务完成！`);
console.log(` - 成功替换: ${replaceCount} 处`);
console.log(` - 解密异常: ${errorCount} 处 (通常是无效索引，可忽略)`);
console.log(`文件写入: ${OUTPUT_FILE}`);

const output = generate(ast, {}, code);
fs.writeFileSync(OUTPUT_FILE, output.code);