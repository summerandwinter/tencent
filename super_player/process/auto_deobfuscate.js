const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");
const vm = require("vm");

const TARGET_FILE = "source.js";
const OUTPUT_FILE = "source_cleaned.js";

// Polyfill: 模拟浏览器环境，防止解密函数内部调用 window/atob 报错
const VM_SANDBOX = {
  window: {},
  navigator: { userAgent: "node" },
  document: {},
  atob: (str) => Buffer.from(str, 'base64').toString('binary'),
  String: String,
  Array: Array,
  parseInt: parseInt,
  decodeURIComponent: decodeURIComponent,
  JSON: JSON
};

// 读取代码
const code = fs.readFileSync(TARGET_FILE, "utf-8");
const ast = parser.parse(code, { sourceType: "script", attachComment: false });

// 存储找到的解密器信息
const decryptors = [];

console.log("正在扫描代码中的混淆簇...");

// ============================================================
// 阶段 1: 扫描并识别 [数组, 解密器, 洗牌逻辑] 三件套
// ============================================================
traverse(ast, {
  // 1. 寻找解密函数
  // 特征：函数体内第一行通常是 var x = ArrayFunc();
  // 且包含对参数的减法操作 (t -= 123)
  FunctionDeclaration(path) {
    const { node } = path;
    const body = node.body.body;
    
    if (!body || body.length < 2) return;

    // 检查是否包含偏移量运算 ( t -= 123 )
    let hasOffsetCalc = false;
    let arrayFuncName = null;

    // 简单的特征匹配
    if (
      body[0].type === 'VariableDeclaration' &&
      body[0].declarations[0].init &&
      body[0].declarations[0].init.type === 'CallExpression'
    ) {
        // 第一行: var o = xC();
        arrayFuncName = body[0].declarations[0].init.callee.name;
        
        // 扫描后续代码寻找 -= 运算
        traverse(node, {
            AssignmentExpression(innerPath) {
                if (innerPath.node.operator === '-=') {
                    hasOffsetCalc = true;
                }
            },
            noScope: true
        });
    }

    if (hasOffsetCalc && arrayFuncName) {
        const decoderName = node.id.name;
        
        // 找到疑似解密器，现在去寻找它的 Array 函数节点
        const binding = path.scope.getBinding(arrayFuncName);
        if (!binding) return;
        
        const arrayFuncNode = binding.path.node;
        
        // 寻找洗牌逻辑 (Rotator)
        // 洗牌逻辑通常是一个 IIFE (立即执行函数)，里面包含 while(true)
        // 且引用了解密函数 或 数组函数
        let rotatorNode = null;
        
        // 在同级作用域查找调用了 解密函数 的 IIFE
        const parentBody = path.parent.body;
        if (Array.isArray(parentBody)) {
            parentBody.forEach((stmt) => {
                if (stmt.type === 'ExpressionStatement' && stmt.expression.type === 'CallExpression') {
                    // 检查 IIFE 内部是否引用了解密函数名
                    const codeSnippet = generate(stmt).code;
                    if (codeSnippet.includes(decoderName) && codeSnippet.includes('while')) {
                        rotatorNode = stmt;
                    }
                }
            });
        }

        if (arrayFuncNode && rotatorNode) {
            decryptors.push({
                name: decoderName,
                arrayName: arrayFuncName,
                decoderCode: generate(node).code,
                arrayCode: generate(arrayFuncNode).code,
                rotatorCode: generate(rotatorNode).code
            });
            console.log(`✅ 发现混淆簇: 解密函数[${decoderName}] <-> 数组[${arrayFuncName}]`);
        }
    }
  }
});

// ============================================================
// 阶段 2: 在沙箱中执行解密环境
// ============================================================
console.log(`\n共发现 ${decryptors.length} 组混淆逻辑，开始执行沙箱解密...`);

// 创建一个全局 VM 上下文，把所有解密器都扔进去跑
const context = vm.createContext(VM_SANDBOX);

decryptors.forEach(d => {
    try {
        // 拼接代码：数组 + 解密器 + 洗牌
        // 注意顺序：先定义数组和解密器，再运行洗牌
        const scriptCode = `
            ${d.arrayCode}
            ${d.decoderCode}
            ${d.rotatorCode}
        `;
        vm.runInContext(scriptCode, context);
    } catch (e) {
        console.error(`❌ 运行解密簇 [${d.name}] 失败:`, e.message);
    }
});

// ============================================================
// 阶段 3: 遍历 AST 并替换所有调用
// ============================================================
console.log("\n开始批量替换源代码...");

let totalReplaced = 0;

traverse(ast, {
  CallExpression(path) {
    const { callee, arguments: args } = path.node;
    
    // 检查是否是已知的解密函数调用 (如 VC(123), fp(456))
    if (t.isIdentifier(callee)) {
        const decryptor = decryptors.find(d => d.name === callee.name);
        
        if (decryptor && args.length === 1 && t.isNumericLiteral(args[0])) {
            const idx = args[0].value;
            
            try {
                // 在沙箱中调用解密函数
                // 例如: result = context.VC(369)
                const result = vm.runInContext(`${decryptor.name}(${idx})`, context);
                
                if (typeof result === 'string') {
                    // 替换节点
                    path.replaceWith(t.stringLiteral(result));
                    totalReplaced++;
                }
            } catch (e) {
                // 解密失败忽略
            }
        }
    }
  }
});

console.log(`🎉 处理完成！共还原了 ${totalReplaced} 处混淆字符串。`);
console.log(`写入文件: ${OUTPUT_FILE}`);

const output = generate(ast);
fs.writeFileSync(OUTPUT_FILE, output.code);