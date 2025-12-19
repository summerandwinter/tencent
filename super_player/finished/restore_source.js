const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");

const TARGET_FILE = "source.js";
const TOOL_FILE = "./txv_decryptor.js";
const OUTPUT_FILE = "source_deobfuscated_final.js";

// ============================================================================
// 1. 加载解密工具
// ============================================================================
console.log(`正在加载解密工具库: ${TOOL_FILE}...`);
let decryptorTool;
try {
    decryptorTool = require(TOOL_FILE);
} catch (e) {
    console.error("❌ 工具加载失败:", e.message);
    process.exit(1);
}

// 转为 Set 以便快速查找
const decryptorNames = new Set(Object.keys(decryptorTool));
console.log(`✅ 工具加载成功，包含解密器: ${decryptorNames.size} 个`);

// ============================================================================
// 2. 解析 AST
// ============================================================================
console.log(`正在读取文件: ${TARGET_FILE}...`);
const code = fs.readFileSync(TARGET_FILE, "utf-8");
const ast = parser.parse(code, { sourceType: "script" });

// ============================================================================
// 3. 递归变量追踪器
// ============================================================================
/**
 * 递归查找变量的原始名称
 * @param {string} variableName 当前变量名 (如 'zB')
 * @param {Object} scope 当前 Babel 作用域
 * @param {Set} visited 防止循环引用
 * @returns {string|null} 如果找到原始解密函数名(如 'Jh')则返回，否则 null
 */
function resolveDecryptorName(variableName, scope, visited = new Set()) {
    // 1. 如果变量名本身就是已知的解密器名字 (如 'Jh')
    if (decryptorNames.has(variableName)) {
        return variableName;
    }

    if (visited.has(variableName)) return null;
    visited.add(variableName);

    // 2. 查找绑定信息
    const binding = scope.getBinding(variableName);
    if (!binding) return null;

    // 3. 处理变量赋值: var zB = Jh;
    if (binding.path.isVariableDeclarator()) {
        const init = binding.path.node.init;
        if (t.isIdentifier(init)) {
            return resolveDecryptorName(init.name, binding.path.scope, visited);
        }
    }
    
    // 4. 处理赋值语句: n = zB;
    // 这种情况比较复杂，通常需要结合 Control Flow Analysis，
    // 但在这个混淆中，简单的赋值追踪通常够用。
    // 我们在这里简化处理，只看 VariableDeclarator 已经能覆盖 90% 的情况。
    // 如果混淆使用了 function wrapper(param) { param(1) }，
    // 我们需要追踪 CallExpression 的参数。
    
    // 5. 处理函数参数传递: !function(t){ t(1) }(Jh)
    if (binding.kind === 'param') {
        const funcPath = binding.path.parentPath; // FunctionDeclaration/Expression
        if (funcPath.isFunctionExpression() || funcPath.isArrowFunctionExpression()) {
            const parentCall = funcPath.parentPath;
            if (parentCall.isCallExpression() && parentCall.node.callee === funcPath.node) {
                // 这是一个 IIFE 调用
                // 找到当前参数是第几个
                const paramIndex = funcPath.node.params.indexOf(binding.path.node);
                const arg = parentCall.node.arguments[paramIndex];
                if (t.isIdentifier(arg)) {
                    return resolveDecryptorName(arg.name, parentCall.scope, visited);
                }
            }
        }
    }

    return null;
}

// ============================================================================
// 4. 遍历与替换
// ============================================================================
console.log("开始深度追踪与替换...");

let replaceCount = 0;
let errorCount = 0;

traverse(ast, {
    CallExpression(path) {
        const { callee, arguments: args } = path.node;
        
        // 只处理 Identifier 调用: a(123)
        if (!t.isIdentifier(callee)) return;
        
        // 参数必须是 1 个且是数字
        if (args.length !== 1 || !t.isNumericLiteral(args[0])) return;

        // 【核心】追踪这个变量到底是谁
        const originalName = resolveDecryptorName(callee.name, path.scope);

        if (originalName) {
            const idx = args[0].value;
            const decryptFunc = decryptorTool[originalName];
            
            try {
                // 调用工具解密
                const result = decryptFunc(idx);
                
                // 执行替换
                if (typeof result === 'string') {
                    path.replaceWith(t.stringLiteral(result));
                    replaceCount++;
                } else if (typeof result === 'number') {
                    path.replaceWith(t.numericLiteral(result));
                    replaceCount++;
                } else if (typeof result === 'boolean') {
                    path.replaceWith(t.booleanLiteral(result));
                    replaceCount++;
                } else if (result === null) {
                    path.replaceWith(t.nullLiteral());
                    replaceCount++;
                }
            } catch (e) {
                // 索引错误等，忽略
                errorCount++;
            }
        }
    }
});

console.log(`\n🎉 任务完成！`);
console.log(` - 成功替换: ${replaceCount} 处`);
console.log(` - 解密异常: ${errorCount} 处 (通常是死代码中的无效索引)`);
console.log(`文件写入: ${OUTPUT_FILE}`);

const output = generate(ast, {}, code);
fs.writeFileSync(OUTPUT_FILE, output.code);