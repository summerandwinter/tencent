// ==========================================
// 1. 原始数组 (来自你之前提供的 xC 函数)
// ==========================================
var raw_array = ["zw1PDev2Dhm", "CMvXDwvZDa", "CMv0CNLdB3vUDa", "mtCXnNzUBe9NyG", "BgfIzwW", "mtfjwgXlEMe", "uMvXuhjVEhK", "C3rYAw5NAwz5", "ntuWmtq5vvb6Ew5b", "yxnZAwDU", "ywrWyxjHBq", "z2v0uMvXDwvZDfvYBa", "AxnszxfsyxC", "CMvXihbLCMyGzw50CNKSia", "mZuWwejsB3zS", "y2fUig5VDcbWyxjZzsbHzfn0CG", "igvYCIWG", "ChjVEhLiDhrWugf0Aa", "CMvXihn0yxj0lcbUDw09", "C3nWs2v5", "ksbYzxf1zxn0igvYCJO", "DMLUzM9Hza", "q09ntu9o", "C2vUDa", "zxjYB3i", "Bg9N", "CMvZrgf0yq", "ywqGCMvZpq", "z2v0u3nWs2v5", "ntiXmw9bzM9ozG", "zw5HyMXLvhj1C3rLzePtt04", "zgvZDhjVEq", "C3nWs2v5pq", "zxjYq29Kzq", "ufjpwfLFsfruuf9tvefsva", "CgX1z2LUtxnN", "ChvZAa", "y2fUig5VDcbWyxjZzsb2Aw5MB1n0CG", "Bg9Nz2vY", "ufjpwfLFsfruuf9qqvjtrv9fuLjpuG", "ChjVEhLODhrWkg51Bt0", "CgfYC2u", "DMLUzM8", "zgf0yq", "CMvXugfYyw1Z", "n1jiCvHRsa", "C2v0uMvZrgf0yq", "EgHYuMvXrgf0yq", "lcb1CMW9", "Cg9ZDa", "DhzR", "Dw5VyNnLCNzLCG", "Aw5ZDgfUy2vjza", "BgnbzenVB2TPzq", "CMvXugf0Aa", "zw1PDa", "ywXYzwfKEvjLDhj5q291BNq", "uKvtx0npreu", "Dhj5CW", "oda5mdC2zLrAyKfs", "Dgv4Da", "x3bYB3H5Ahr0Cf9Yzxe", "B2jZzxj2zxi", "CgXHEwvYsw5ZDgfUy2vjza", "EgHY", "ywjVCNq", "BgvUz3rO", "ufjpwfLFsfruuf9srvfFru5e", "ufjpwfLFsfruuf9ftKq", "lcbJB3n0pq", "tKvu", "ngrVwe9OEa", "mtCWnZiXmMDQCfzxta", "CMvXigvUzcWGBNvTpq", "CgfYC2vszxnWB25ZzurHDge", "BwvZC2fNzq", "CgfYC2veyxrH", "mJG3nduXmNHvAe1MBq", "Bwf0y2G", "mtmWodCYmJrqC1LiD04", "y29UzMLN", "BM93", "y29Uy2f0", "ywjVCNrLza", "DhzRq29UzMLN", "mJy2mgT2D0rcsG", "DIbYzxm9", "D2fYBG"];

function xC() {
    return raw_array;
}

// ==========================================
// 2. 解密函数 VC (必须在 Shuffle 之前定义)
// ==========================================
var VC = function (e, t) {
    var o = xC(); // 获取数组引用
    
    // 闭包内部逻辑
    var inner = function (t, i) {
      var n = o[t -= 369]; // 这里用了 369 偏移量
      if (inner.WlwvWl === undefined) {
        inner.IeyDMu = function (e) {
          // Base64 解码算法
          for (var t, o, i = "", n = "", A = 0, r = 0; o = e.charAt(r++); ~o && (t = A % 4 ? t * 64 + o : o, A++ % 4) ? i += String.fromCharCode(t >> (A * -2 & 6) & 255) : 0) {
            o = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(o);
          }
          for (var a = 0, s = i.length; a < s; a++) {
            n += "%" + ("00" + i.charCodeAt(a).toString(16)).slice(-2);
          }
          return decodeURIComponent(n);
        };
        inner.WlwvWl = true;
      }
      // 这里原代码可能有 var A = t + o[0]，但通常只是干扰，关键看 n
      var r = n; 
      // 简单判断是否需要解密（原代码有缓存机制，这里简化为直接解密）
      if (n && typeof n === 'string' && n.length > 0) {
          try {
             // 尝试 Base64 解码，如果不成功则返回原值
             // 注意：有些值本身不需要解码，或者解码后才是真实值
             // 这里为了演示，我们强制走一遍解码流程
             var decoded = inner.IeyDMu(n);
             return decoded;
          } catch(e) {
              return n;
          }
      }
      return n;
    };
    return inner(e, t);
};

// ==========================================
// 3. 洗牌逻辑 (Shuffle) - 你提供的核心代码
// ==========================================
console.log("正在执行数组乱序 (Shuffle)...");

(function (e, t) {
    var o = VC; // 引用上面的解密函数
    var i = xC(); // 获取数组引用
    var loopCount = 0;
    
    while (true) {
      try {
        // 这是你提供的校验逻辑
        // 它会不断计算，直到数组移位正确
        if (parseInt(o(436)) / 1 + parseInt(o(449)) / 2 + parseInt(o(385)) / 3 * (-parseInt(o(448)) / 4) + parseInt(o(374)) / 5 * (parseInt(o(380)) / 6) + -parseInt(o(422)) / 7 * (-parseInt(o(454)) / 8) + parseInt(o(406)) / 9 * (parseInt(o(391)) / 10) + -parseInt(o(382)) / 11 * (parseInt(o(456)) / 12) == 920428) {
          console.log("✅ 数组顺序校验成功！(Loop: " + loopCount + ")");
          break;
        }
        // 移位：把第一个移到最后一个
        i.push(i.shift());
        loopCount++;
      } catch (e) {
        // 如果中间解密报错，也继续移位
        i.push(i.shift());
        loopCount++;
      }
    }
})();

// ==========================================
// 4. 见证奇迹：查看解密结果
// ==========================================
console.log("\n------ 解密结果 ------");

// 测试你之前问的 ID
console.log("i(369) =", VC(369));
console.log("t(405) =", VC(405));

// 顺便把数组里所有的值都打印出来看看
console.log("\n------ 完整字典预览 (部分) ------");
for(let j=369; j<369+20; j++) {
    try {
        console.log(`VC(${j}) = ${VC(j)}`);
    } catch(e) {}
}