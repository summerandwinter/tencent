const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;
const t = require("@babel/types");
const fs = require("fs");

// ============================================================
// 1. 植入核心解密逻辑 (使用你验证通过的代码)
// ============================================================

// 原始数组
var raw_array = ["zw1PDev2Dhm", "CMvXDwvZDa", "CMv0CNLdB3vUDa", "mtCXnNzUBe9NyG", "BgfIzwW", "mtfjwgXlEMe", "uMvXuhjVEhK", "C3rYAw5NAwz5", "ntuWmtq5vvb6Ew5b", "yxnZAwDU", "ywrWyxjHBq", "z2v0uMvXDwvZDfvYBa", "AxnszxfsyxC", "CMvXihbLCMyGzw50CNKSia", "mZuWwejsB3zS", "y2fUig5VDcbWyxjZzsbHzfn0CG", "igvYCIWG", "ChjVEhLiDhrWugf0Aa", "CMvXihn0yxj0lcbUDw09", "C3nWs2v5", "ksbYzxf1zxn0igvYCJO", "DMLUzM9Hza", "q09ntu9o", "C2vUDa", "zxjYB3i", "Bg9N", "CMvZrgf0yq", "ywqGCMvZpq", "z2v0u3nWs2v5", "ntiXmw9bzM9ozG", "zw5HyMXLvhj1C3rLzePtt04", "zgvZDhjVEq", "C3nWs2v5pq", "zxjYq29Kzq", "ufjpwfLFsfruuf9tvefsva", "CgX1z2LUtxnN", "ChvZAa", "y2fUig5VDcbWyxjZzsb2Aw5MB1n0CG", "Bg9Nz2vY", "ufjpwfLFsfruuf9qqvjtrv9fuLjpuG", "ChjVEhLODhrWkg51Bt0", "CgfYC2u", "DMLUzM8", "zgf0yq", "CMvXugfYyw1Z", "n1jiCvHRsa", "C2v0uMvZrgf0yq", "EgHYuMvXrgf0yq", "lcb1CMW9", "Cg9ZDa", "DhzR", "Dw5VyNnLCNzLCG", "Aw5ZDgfUy2vjza", "BgnbzenVB2TPzq", "CMvXugf0Aa", "zw1PDa", "ywXYzwfKEvjLDhj5q291BNq", "uKvtx0npreu", "Dhj5CW", "oda5mdC2zLrAyKfs", "Dgv4Da", "x3bYB3H5Ahr0Cf9Yzxe", "B2jZzxj2zxi", "CgXHEwvYsw5ZDgfUy2vjza", "EgHY", "ywjVCNq", "BgvUz3rO", "ufjpwfLFsfruuf9srvfFru5e", "ufjpwfLFsfruuf9ftKq", "lcbJB3n0pq", "tKvu", "ngrVwe9OEa", "mtCWnZiXmMDQCfzxta", "CMvXigvUzcWGBNvTpq", "CgfYC2vszxnWB25ZzurHDge", "BwvZC2fNzq", "CgfYC2veyxrH", "mJG3nduXmNHvAe1MBq", "Bwf0y2G", "mtmWodCYmJrqC1LiD04", "y29UzMLN", "BM93", "y29Uy2f0", "ywjVCNrLza", "DhzRq29UzMLN", "mJy2mgT2D0rcsG", "DIbYzxm9", "D2fYBG"];

function xC() {
    return raw_array;
}

// 解密函数
var VC = function (e, t) {
    var o = xC();
    var inner = function (t, i) {
      var n = o[t -= 369]; 
      if (inner.WlwvWl === undefined) {
        inner.IeyDMu = function (e) {
          for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? t * 64 + o : o, A++ % 4) ? i += String.fromCharCode(t >> (A * -2 & 6) & 255) : 0) {
            o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
          }
          for (var a = 0, s = i.length; a < s; a++) {
            n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
          }
          try { return decodeURIComponent(n); } catch(e) { return n; }
        };
        inner.WlwvWl = true;
      }
      var r = n; 
      if (n && typeof n === 'string') {
          try {
             var decoded = inner.IeyDMu(n);
             return decoded;
          } catch(e) { return n; }
      }
      return n;
    };
    return inner(e, t);
};

// 执行乱序 (必须执行)
console.log("正在初始化解密环境...");
(function (e, t) {
    var o = VC;
    var i = xC();
    while (true) {
      try {
        if (parseInt(o(436)) / 1 + parseInt(o(449)) / 2 + parseInt(o(385)) / 3 * (-parseInt(o(448)) / 4) + parseInt(o(374)) / 5 * (parseInt(o(380)) / 6) + -parseInt(o(422)) / 7 * (-parseInt(o(454)) / 8) + parseInt(o(406)) / 9 * (parseInt(o(391)) / 10) + -parseInt(o(382)) / 11 * (parseInt(o(456)) / 12) == 920428) {
          break;
        }
        i.push(i.shift());
      } catch (e) {
        i.push(i.shift());
      }
    }
    console.log("✅ 数组乱序完成，解密功能已就绪。");
})();


// ============================================================
// 2. 开始 AST 源码替换
// ============================================================

const TARGET_FILE = "superplayer-txv.js"; // 你的源文件
const OUTPUT_FILE = "superplayer-txv_deobfuscated.js"; // 输出文件

// 配置你要替换的变量名列表
// 你提到了 i(369), t(405), 代码中可能还有 n, o, r, VC 等
// 我们把常见的单字母变量和 VC 都加进去
const TARGET_CALLERS = ['i', 't', 'n', 'o', 'r', 'a', 's', 'VC'];

console.log(`\n读取文件: ${TARGET_FILE}`);
const code = fs.readFileSync(TARGET_FILE, "utf-8");

console.log("解析 AST...");
const ast = parser.parse(code, { sourceType: "script" });

console.log("开始遍历并替换字符串...");
let replaceCount = 0;

traverse(ast, {
  CallExpression(path) {
    const { callee, arguments: args } = path.node;

    // 1. 判断是否是函数调用
    if (!t.isIdentifier(callee)) return;

    // 2. 判断函数名是否在我们的目标列表中 (i, t, VC 等)
    if (!TARGET_CALLERS.includes(callee.name)) return;

    // 3. 判断参数是否符合特征：只有一个参数，且是数字
    if (args.length !== 1 || !t.isNumericLiteral(args[0])) return;

    const index = args[0].value;

    try {
        // 4. 【核心】调用解密函数获取结果
        const decryptedStr = VC(index);

        // 5. 验证结果是否有效
        // 必须是字符串，且不能为空（根据需要调整过滤条件）
        if (typeof decryptedStr === 'string' && decryptedStr.length > 0) {
            
            // 打印日志：展示替换过程
            // console.log(`[替换] ${callee.name}(${index}) -> "${decryptedStr}"`);
            
            // 6. 执行替换：用字符串字面量替换原来的函数调用
            path.replaceWith(t.stringLiteral(decryptedStr));
            replaceCount++;
        }
    } catch (e) {
        // 如果解密失败（比如索引越界），则不进行替换，保持原样
    }
  }
});

console.log(`\n🎉 处理完成！共替换了 ${replaceCount} 处混淆字符串。`);
console.log(`正在写入文件: ${OUTPUT_FILE}...`);

const output = generate(ast, {}, code);
fs.writeFileSync(OUTPUT_FILE, output.code);

console.log("✅ 文件写入成功！现在代码应该清晰多了。");