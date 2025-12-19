// Zr对象分析 - SHA-1哈希算法实现
var Zr = {
  // 主模块导出函数 - 实现SHA-1哈希算法
  123: function (e) {
    e.exports = function (e) {
      // 十六进制字符数组，用于将二进制数据转换为十六进制字符串
      var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      
      // SHA-1核心压缩函数 - 处理64字节数据块
      function o(e, t) {
        var o = e[0];
        var i = e[1];
        var n = e[2];
        var A = e[3];
        // 以下是SHA-1算法的4轮压缩操作，每轮16步
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i & n | ~i & A) + t[0] - 680876936 | 0) << 7 | o >>> 25) + i | 0) & i | ~o & n) + t[1] - 389564586 | 0) << 12 | A >>> 20) + o | 0) & o | ~A & i) + t[2] + 606105819 | 0) << 17 | n >>> 15) + A | 0) & A | ~n & o) + t[3] - 1044525330 | 0) << 22 | i >>> 10) + n | 0;
        // ... 省略后续多轮压缩操作 ...
        e[0] = o + e[0] | 0;
        e[1] = i + e[1] | 0;
        e[2] = n + e[2] | 0;
        e[3] = A + e[3] | 0;
      }
      
      // 将字符串转换为32位整数数组（每次处理64字节）
      function i(e) {
        var t;
        var o = [];
        for (t = 0; t < 64; t += 4) {
          o[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
        }
        return o;
      }
      
      // 将Uint8Array转换为32位整数数组（每次处理64字节）
      function n(e) {
        var t;
        var o = [];
        for (t = 0; t < 64; t += 4) {
          o[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
        }
        return o;
      }
      
      // 对字符串进行SHA-1哈希计算
      function A(e) {
        var t;
        var n;
        var A;
        var r;
        var a;
        var s;
        var l = e.length;
        var g = [1732584193, -271733879, -1732584194, 271733878]; // SHA-1初始哈希值
        for (t = 64; t <= l; t += 64) {
          o(g, i(e.substring(t - 64, t)));
        }
        // 处理剩余数据和填充
        n = (e = e.substring(t - 64)).length;
        A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        t = 0;
        for (; t < n; t += 1) {
          A[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
        }
        A[t >> 2] |= 128 << (t % 4 << 3); // 添加1比特的填充
        if (t > 55) {
          o(g, A);
          t = 0;
          for (; t < 16; t += 1) {
            A[t] = 0;
          }
        }
        // 添加数据长度信息
        r = (r = l * 8).toString(16).match(/(.*?)(.{0,8})$/);
        a = parseInt(r[2], 16);
        s = parseInt(r[1], 16) || 0;
        A[14] = a;
        A[15] = s;
        o(g, A);
        return g;
      }
      
      // 对Uint8Array进行SHA-1哈希计算
      function r(e) {
        var t;
        var i;
        var A;
        var r;
        var a;
        var s;
        var l = e.length;
        var g = [1732584193, -271733879, -1732584194, 271733878]; // SHA-1初始哈希值
        for (t = 64; t <= l; t += 64) {
          o(g, n(e.subarray(t - 64, t)));
        }
        // 处理剩余数据和填充（与A函数类似，但针对Uint8Array）
        // ... 省略类似代码 ...
        return g;
      }
      
      // 将32位整数转换为8位十六进制字符串
      function a(e) {
        var o;
        var i = "";
        for (o = 0; o < 4; o += 1) {
          i += t[e >> o * 8 + 4 & 15] + t[e >> o * 8 & 15];
        }
        return i;
      }
      
      // 将32位整数数组转换为SHA-1哈希字符串
      function s(e) {
        var t;
        for (t = 0; t < e.length; t += 1) {
          e[t] = a(e[t]);
        }
        return e.join("");
      }
      
      // 处理Unicode字符串，确保正确编码
      function l(e) {
        if (/[\u0080-\uFFFF]/.test(e)) {
          e = unescape(encodeURIComponent(e));
        }
        return e;
      }
      
      // 将十六进制字符串转换为ASCII字符串
      function g(e) {
        var t;
        var o = [];
        var i = e.length;
        for (t = 0; t < i - 1; t += 2) {
          o.push(parseInt(e.substr(t, 2), 16));
        }
        return String.fromCharCode.apply(String, o);
      }
      
      // SHA-1构造函数 - 提供流式哈希计算
      function c() {
        this.reset();
      }
      
      // 测试代码
      s(A("hello"));
      
      // 兼容性代码：为不支持ArrayBuffer.prototype.slice的环境添加slice方法
      if (typeof ArrayBuffer != "undefined" && !ArrayBuffer.prototype.slice) {
        (function () {
          function e(e, t) {
            if ((e = e | 0 || 0) < 0) {
              return Math.max(e + t, 0);
            } else {
              return Math.min(e, t);
            }
          }
          ArrayBuffer.prototype.slice = function (t, o) {
            // ... slice方法实现 ...
          };
        })();
      }
      
      // c.prototype方法 - 字符串流式哈希计算
      c.prototype.append = function (e) {
        this.appendBinary(l(e));
        return this;
      };
      
      c.prototype.appendBinary = function (e) {
        this._buff += e;
        this._length += e.length;
        var t;
        var n = this._buff.length;
        for (t = 64; t <= n; t += 64) {
          o(this._hash, i(this._buff.substring(t - 64, t)));
        }
        this._buff = this._buff.substring(t - 64);
        return this;
      };
      
      c.prototype.end = function (e) {
        // 完成哈希计算并返回结果
        // ...
      };
      
      c.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      
      // c静态方法 - 直接哈希计算
      c.hash = function (e, t) {
        return c.hashBinary(l(e), t);
      };
      
      c.hashBinary = function (e, t) {
        var o = s(A(e));
        if (t) {
          return g(o);
        } else {
          return o;
        }
      };
      
      // c.ArrayBuffer构造函数 - 针对ArrayBuffer的流式哈希计算
      c.ArrayBuffer = function () {
        this.reset();
      };
      
      // c.ArrayBuffer.prototype方法 - ArrayBuffer流式哈希计算
      c.ArrayBuffer.prototype.append = function (e) {
        // ... ArrayBuffer追加实现 ...
      };
      
      // 返回SHA-1实现对象
      return c;
    };
  }
};