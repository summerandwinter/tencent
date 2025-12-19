// Zr对象完整分析 - 包含所有方法的详细注释
// 原始文件位置: /Users/summer/dev/mine/tencent/super_player/finished/source_final.js
// 分析日期: 2025-12-19

var Zr = {
  // 123: SHA-1哈希算法的完整实现
  123: function (e) {
    e.exports = function (e) {
      // 十六进制字符映射表，用于将哈希值转换为十六进制字符串
      var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
      
      // SHA-1核心压缩函数 - 处理64字节数据块，更新哈希值
      function o(e, t) {
        // 提取当前哈希值
        var o = e[0];
        var i = e[1];
        var n = e[2];
        var A = e[3];
        
        // 4轮SHA-1压缩操作，每轮16步，更新哈希值
        // 第1轮 - 每步处理4个字节，使用F函数: F = (B & C) | (~B & D)
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i & n | ~i & A) + t[0] - 680876936 | 0) << 7 | o >>> 25) + i | 0) & i | ~o & n) + t[1] - 389564586 | 0) << 12 | A >>> 20) + o | 0) & o | ~A & i) + t[2] + 606105819 | 0) << 17 | n >>> 15) + A | 0) & A | ~n & o) + t[3] - 1044525330 | 0) << 22 | i >>> 10) + n | 0;
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i & n | ~i & A) + t[4] - 176418897 | 0) << 7 | o >>> 25) + i | 0) & i | ~o & n) + t[5] + 1200080426 | 0) << 12 | A >>> 20) + o | 0) & o | ~A & i) + t[6] - 1473231341 | 0) << 17 | n >>> 15) + A | 0) & A | ~n & o) + t[7] - 45705983 | 0) << 22 | i >>> 10) + n | 0;
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i & n | ~i & A) + t[8] + 1770035416 | 0) << 7 | o >>> 25) + i | 0) & i | ~o & n) + t[9] - 1958414417 | 0) << 12 | A >>> 20) + o | 0) & o | ~A & i) + t[10] - 42063 | 0) << 17 | n >>> 15) + A | 0) & A | ~n & o) + t[11] - 1990404162 | 0) << 22 | i >>> 10) + n | 0;
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i & n | ~i & A) + t[12] + 1804603682 | 0) << 7 | o >>> 25) + i | 0) & i | ~o & n) + t[13] - 40341101 | 0) << 12 | A >>> 20) + o | 0) & o | ~A & i) + t[14] - 1502002290 | 0) << 17 | n >>> 15) + A | 0) & A | ~n & o) + t[15] + 1236535329 | 0) << 22 | i >>> 10) + n | 0;
        
        // 第2轮 - 使用F函数: F = (B & D) | (C & ~D)
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i & A | n & ~A) + t[1] - 165796510 | 0) << 5 | o >>> 27) + i | 0) & n | i & ~n) + t[6] - 1069501632 | 0) << 9 | A >>> 23) + o | 0) & i | o & ~i) + t[11] + 643717713 | 0) << 14 | n >>> 18) + A | 0) & o | A & ~o) + t[0] - 373897302 | 0) << 20 | i >>> 12) + n | 0;
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i & A | n & ~A) + t[5] - 701558691 | 0) << 5 | o >>> 27) + i | 0) & n | i & ~n) + t[10] + 38016083 | 0) << 9 | A >>> 23) + o | 0) & i | o & ~i) + t[15] - 660478335 | 0) << 14 | n >>> 18) + A | 0) & o | A & ~o) + t[4] - 405537848 | 0) << 20 | i >>> 12) + n | 0;
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i & A | n & ~A) + t[9] + 568446438 | 0) << 5 | o >>> 27) + i | 0) & n | i & ~n) + t[14] - 1019803690 | 0) << 9 | A >>> 23) + o | 0) & i | o & ~i) + t[3] - 187363961 | 0) << 14 | n >>> 18) + A | 0) & o | A & ~o) + t[8] + 1163531501 | 0) << 20 | i >>> 12) + n | 0;
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i & A | n & ~A) + t[13] - 1444681467 | 0) << 5 | o >>> 27) + i | 0) & n | i & ~n) + t[2] - 51403784 | 0) << 9 | A >>> 23) + o | 0) & i | o & ~i) + t[7] + 1735328473 | 0) << 14 | n >>> 18) + A | 0) & o | A & ~o) + t[12] - 1926607734 | 0) << 20 | i >>> 12) + n | 0;
        
        // 第3轮 - 使用F函数: F = B ^ C ^ D
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i ^ n ^ A) + t[5] - 378558 | 0) << 4 | o >>> 28) + i | 0) ^ i ^ n) + t[8] - 2022574463 | 0) << 11 | A >>> 21) + o | 0) ^ o ^ i) + t[11] + 1839030562 | 0) << 16 | n >>> 16) + A | 0) ^ A ^ o) + t[14] - 35309556 | 0) << 23 | i >>> 9) + n | 0;
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i ^ n ^ A) + t[1] - 1530992060 | 0) << 4 | o >>> 28) + i | 0) ^ i ^ n) + t[4] + 1272893353 | 0) << 11 | A >>> 21) + o | 0) ^ o ^ i) + t[7] - 155497632 | 0) << 16 | n >>> 16) + A | 0) ^ A ^ o) + t[10] - 1094730640 | 0) << 23 | i >>> 9) + n | 0;
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i ^ n ^ A) + t[13] + 681279174 | 0) << 4 | o >>> 28) + i | 0) ^ i ^ n) + t[0] - 358537222 | 0) << 11 | A >>> 21) + o | 0) ^ o ^ i) + t[3] - 722521979 | 0) << 16 | n >>> 16) + A | 0) ^ A ^ o) + t[6] + 76029189 | 0) << 23 | i >>> 9) + n | 0;
        i = ((i += ((n = ((n += ((A = ((A += ((o = ((o += (i ^ n ^ A) + t[9] - 640364487 | 0) << 4 | o >>> 28) + i | 0) ^ i ^ n) + t[12] - 421815835 | 0) << 11 | A >>> 21) + o | 0) ^ o ^ i) + t[15] + 530742520 | 0) << 16 | n >>> 16) + A | 0) ^ A ^ o) + t[2] - 995338651 | 0) << 23 | i >>> 9) + n | 0;
        
        // 第4轮 - 使用F函数: F = C ^ (B | ~D)
        i = ((i += ((A = ((A += (i ^ ((o = ((o += (n ^ (i | ~A)) + t[0] - 198630844 | 0) << 6 | o >>> 26) + i | 0) | ~n)) + t[7] + 1126891415 | 0) << 10 | A >>> 22) + o | 0) ^ ((n = ((n += (o ^ (A | ~i)) + t[14] - 1416354905 | 0) << 15 | n >>> 17) + A | 0) | ~o)) + t[5] - 57434055 | 0) << 21 | i >>> 11) + n | 0;
        i = ((i += ((A = ((A += (i ^ ((o = ((o += (n ^ (i | ~A)) + t[12] + 1700485571 | 0) << 6 | o >>> 26) + i | 0) | ~n)) + t[3] - 1894986606 | 0) << 10 | A >>> 22) + o | 0) ^ ((n = ((n += (o ^ (A | ~i)) + t[10] - 1051523 | 0) << 15 | n >>> 17) + A | 0) | ~o)) + t[1] - 2054922799 | 0) << 21 | i >>> 11) + n | 0;
        i = ((i += ((A = ((A += (i ^ ((o = ((o += (n ^ (i | ~A)) + t[8] + 1873313359 | 0) << 6 | o >>> 26) + i | 0) | ~n)) + t[15] - 30611744 | 0) << 10 | A >>> 22) + o | 0) ^ ((n = ((n += (o ^ (A | ~i)) + t[6] - 1560198380 | 0) << 15 | n >>> 17) + A | 0) | ~o)) + t[13] + 1309151649 | 0) << 21 | i >>> 11) + n | 0;
        i = ((i += ((A = ((A += (i ^ ((o = ((o += (n ^ (i | ~A)) + t[4] - 145523070 | 0) << 6 | o >>> 26) + i | 0) | ~n)) + t[11] - 1120210379 | 0) << 10 | A >>> 22) + o | 0) ^ ((n = ((n += (o ^ (A | ~i)) + t[2] + 718787259 | 0) << 15 | n >>> 17) + A | 0) | ~o)) + t[9] - 343485551 | 0) << 21 | i >>> 11) + n | 0;
        
        // 更新哈希值
        e[0] = o + e[0] | 0;
        e[1] = i + e[1] | 0;
        e[2] = n + e[2] | 0;
        e[3] = A + e[3] | 0;
      }
      
      // 将字符串转换为32位整数数组，每4个字符转换为一个整数
      function i(e) {
        var t;
        var o = [];
        for (t = 0; t < 64; t += 4) {
          o[t >> 2] = e.charCodeAt(t) + (e.charCodeAt(t + 1) << 8) + (e.charCodeAt(t + 2) << 16) + (e.charCodeAt(t + 3) << 24);
        }
        return o;
      }
      
      // 将Uint8Array转换为32位整数数组，每4个字节转换为一个整数
      function n(e) {
        var t;
        var o = [];
        for (t = 0; t < 64; t += 4) {
          o[t >> 2] = e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
        }
        return o;
      }
      
      // 计算字符串的SHA-1哈希值（返回整数数组形式）
      function A(e) {
        var t;
        var n;
        var A;
        var r;
        var a;
        var s;
        var l = e.length;
        // SHA-1初始哈希值
        var g = [1732584193, -271733879, -1732584194, 271733878];
        
        // 处理64字节的数据块
        for (t = 64; t <= l; t += 64) {
          o(g, i(e.substring(t - 64, t)));
        }
        
        // 处理剩余数据
        n = (e = e.substring(t - 64)).length;
        A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        t = 0;
        for (; t < n; t += 1) {
          A[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
        }
        
        // 添加填充位
        A[t >> 2] |= 128 << (t % 4 << 3);
        
        // 如果数据长度超过56字节，需要额外处理一个数据块
        if (t > 55) {
          o(g, A);
          t = 0;
          for (; t < 16; t += 1) {
            A[t] = 0;
          }
        }
        
        // 添加原始数据长度（以位为单位）
        r = (r = l * 8).toString(16).match(/(.*?)(.{0,8})$/);
        a = parseInt(r[2], 16);
        s = parseInt(r[1], 16) || 0;
        A[14] = a;
        A[15] = s;
        
        // 处理最后一个数据块
        o(g, A);
        return g;
      }
      
      // 计算Uint8Array的SHA-1哈希值（返回整数数组形式）
      function r(e) {
        var t;
        var i;
        var A;
        var r;
        var a;
        var s;
        var l = e.length;
        // SHA-1初始哈希值
        var g = [1732584193, -271733879, -1732584194, 271733878];
        
        // 处理64字节的数据块
        for (t = 64; t <= l; t += 64) {
          o(g, n(e.subarray(t - 64, t)));
        }
        
        // 处理剩余数据
        i = (e = t - 64 < l ? e.subarray(t - 64) : new Uint8Array(0)).length;
        A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        t = 0;
        for (; t < i; t += 1) {
          A[t >> 2] |= e[t] << (t % 4 << 3);
        }
        
        // 添加填充位
        A[t >> 2] |= 128 << (t % 4 << 3);
        
        // 如果数据长度超过56字节，需要额外处理一个数据块
        if (t > 55) {
          o(g, A);
          t = 0;
          for (; t < 16; t += 1) {
            A[t] = 0;
          }
        }
        
        // 添加原始数据长度（以位为单位）
        r = (r = l * 8).toString(16).match(/(.*?)(.{0,8})$/);
        a = parseInt(r[2], 16);
        s = parseInt(r[1], 16) || 0;
        A[14] = a;
        A[15] = s;
        
        // 处理最后一个数据块
        o(g, A);
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
      
      // 将整数数组形式的哈希值转换为十六进制字符串
      function s(e) {
        var t;
        for (t = 0; t < e.length; t += 1) {
          e[t] = a(e[t]);
        }
        return e.join("");
      }
      
      // 将Unicode字符串转换为UTF-8编码的字符串
      function l(e) {
        if (/[\u0080-\uFFFF]/.test(e)) {
          e = unescape(encodeURIComponent(e));
        }
        return e;
      }
      
      // 将十六进制字符串转换为普通字符串
      function g(e) {
        var t;
        var o = [];
        var i = e.length;
        for (t = 0; t < i - 1; t += 2) {
          o.push(parseInt(e.substr(t, 2), 16));
        }
        return String.fromCharCode.apply(String, o);
      }
      
      // SHA-1流式哈希计算构造函数
      function c() {
        this.reset();
      }
      
      // 测试SHA-1算法
      s(A("hello"));
      
      // 为ArrayBuffer添加slice方法（兼容性处理）
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
            var i;
            var n;
            var A;
            var r;
            var a = this.byteLength;
            var s = e(t, a);
            var l = a;
            if (o !== undefined) {
              l = e(o, a);
            }
            if (s > l) {
              return new ArrayBuffer(0);
            } else {
              i = l - s;
              n = new ArrayBuffer(i);
              A = new Uint8Array(n);
              r = new Uint8Array(this, s, i);
              A.set(r);
              return n;
            }
          };
        })();
      }
      
      // 向流式哈希计算中添加字符串数据
      c.prototype.append = function (e) {
        this.appendBinary(l(e));
        return this;
      };
      
      // 向流式哈希计算中添加二进制数据
      c.prototype.appendBinary = function (e) {
        this._buff += e;
        this._length += e.length;
        var t;
        var n = this._buff.length;
        // 处理64字节的数据块
        for (t = 64; t <= n; t += 64) {
          o(this._hash, i(this._buff.substring(t - 64, t)));
        }
        // 保存剩余数据
        this._buff = this._buff.substring(t - 64);
        return this;
      };
      
      // 完成流式哈希计算并返回结果
      c.prototype.end = function (e) {
        var t;
        var o;
        var i = this._buff;
        var n = i.length;
        var A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        
        // 处理剩余数据
        for (t = 0; t < n; t += 1) {
          A[t >> 2] |= i.charCodeAt(t) << (t % 4 << 3);
        }
        
        // 完成哈希计算
        this._finish(A, n);
        o = s(this._hash);
        
        // 如果需要，将结果转换为普通字符串
        if (e) {
          o = g(o);
        }
        
        // 重置状态
        this.reset();
        return o;
      };
      
      // 重置流式哈希计算状态
      c.prototype.reset = function () {
        this._buff = "";
        this._length = 0;
        // 重置哈希值
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      
      // 获取当前哈希计算状态
      c.prototype.getState = function () {
        return {
          buff: this._buff,
          length: this._length,
          hash: this._hash.slice()
        };
      };
      
      // 设置哈希计算状态
      c.prototype.setState = function (e) {
        this._buff = e.buff;
        this._length = e.length;
        this._hash = e.hash;
        return this;
      };
      
      // 销毁哈希计算对象
      c.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
      };
      
      // 完成哈希计算的内部方法
      c.prototype._finish = function (e, t) {
        var i;
        var n;
        var A;
        var r = t;
        
        // 添加填充位
        e[r >> 2] |= 128 << (r % 4 << 3);
        
        // 如果数据长度超过56字节，需要额外处理一个数据块
        if (r > 55) {
          o(this._hash, e);
          r = 0;
          for (; r < 16; r += 1) {
            e[r] = 0;
          }
        }
        
        // 添加原始数据长度（以位为单位）
        i = (i = this._length * 8).toString(16).match(/(.*?)(.{0,8})$/);
        n = parseInt(i[2], 16);
        A = parseInt(i[1], 16) || 0;
        e[14] = n;
        e[15] = A;
        
        // 处理最后一个数据块
        o(this._hash, e);
      };
      
      // 静态方法：计算字符串的SHA-1哈希值
      c.hash = function (e, t) {
        return c.hashBinary(l(e), t);
      };
      
      // 静态方法：计算二进制数据的SHA-1哈希值
      c.hashBinary = function (e, t) {
        var o = s(A(e));
        if (t) {
          return g(o);
        } else {
          return o;
        }
      };
      
      // ArrayBuffer版本的SHA-1流式哈希计算构造函数
      c.ArrayBuffer = function () {
        this.reset();
      };
      
      // 向ArrayBuffer流式哈希计算中添加数据
      c.ArrayBuffer.prototype.append = function (e) {
        var t;
        var i = function (e, t, o) {
          var i = new Uint8Array(e.byteLength + t.byteLength);
          i.set(new Uint8Array(e));
          i.set(new Uint8Array(t), e.byteLength);
          if (o) {
            return i;
          } else {
            return i.buffer;
          }
        }(this._buff.buffer, e, true);
        var A = i.length;
        this._length += e.byteLength;
        t = 64;
        // 处理64字节的数据块
        for (; t <= A; t += 64) {
          o(this._hash, n(i.subarray(t - 64, t)));
        }
        // 保存剩余数据
        this._buff = t - 64 < A ? new Uint8Array(i.buffer.slice(t - 64)) : new Uint8Array(0);
        return this;
      };
      
      // 完成ArrayBuffer流式哈希计算并返回结果
      c.ArrayBuffer.prototype.end = function (e) {
        var t;
        var o;
        var i = this._buff;
        var n = i.length;
        var A = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        
        // 处理剩余数据
        for (t = 0; t < n; t += 1) {
          A[t >> 2] |= i[t] << (t % 4 << 3);
        }
        
        // 完成哈希计算
        this._finish(A, n);
        o = s(this._hash);
        
        // 如果需要，将结果转换为普通字符串
        if (e) {
          o = g(o);
        }
        
        // 重置状态
        this.reset();
        return o;
      };
      
      // 重置ArrayBuffer流式哈希计算状态
      c.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        // 重置哈希值
        this._hash = [1732584193, -271733879, -1732584194, 271733878];
        return this;
      };
      
      // 获取ArrayBuffer哈希计算状态
      c.ArrayBuffer.prototype.getState = function () {
        var e = c.prototype.getState.call(this);
        e.buff = function (e) {
          return String.fromCharCode.apply(null, new Uint8Array(e));
        }(e.buff);
        return e;
      };
      
      // 设置ArrayBuffer哈希计算状态
      c.ArrayBuffer.prototype.setState = function (e) {
        e.buff = function (e, t) {
          var o;
          var i = e.length;
          var n = new ArrayBuffer(i);
          var A = new Uint8Array(n);
          for (o = 0; o < i; o += 1) {
            A[o] = e.charCodeAt(o);
          }
          if (t) {
            return A;
          } else {
            return n;
          }
        }(e.buff, true);
        return c.prototype.setState.call(this, e);
      };
      
      // 销毁ArrayBuffer哈希计算对象
      c.ArrayBuffer.prototype.destroy = c.prototype.destroy;
      
      // ArrayBuffer哈希计算的完成方法
      c.ArrayBuffer.prototype._finish = c.prototype._finish;
      
      // 静态方法：计算ArrayBuffer的SHA-1哈希值
      c.ArrayBuffer.hash = function (e, t) {
        var o = s(r(new Uint8Array(e)));
        if (t) {
          return g(o);
        } else {
          return o;
        }
      };
      
      return c;
    }();
  },
  
  // 110: 定义了一些常量和默认值
  110: function (e, t, o) {
    o.r(t);
    o.d(t, {
      CHUNK_START_ID: function () {
        return A;
      },
      DEFAULT_CHUNK_KEY: function () {
        return n;
      },
      DEFAULT_COUNT_LIMIT: function () {
        return l;
      },
      DEFAULT_HEARTBEAT_MS: function () {
        return a;
      },
      DEFAULT_INTERVAL_MS: function () {
        return r;
      },
      DEFAULT_PRIMARY_KEY: function () {
        return i;
      },
      DEFAULT_RECENT_TIMESTAMP: function () {
        return s;
      },
      HEART_BEAT_TIMEOUT: function () {
        return g;
      }
    });
    
    // 默认主键名称
    var i = "primaryKey";
    // 默认分块键名称
    var n = "chunkId";
    // 分块起始ID
    var A = 1;
    // 默认间隔时间（毫秒）
    var r = 3000;
    // 默认心跳时间（毫秒）
    var a = 60000;
    // 默认最近时间戳（毫秒）
    var s = 259200000;
    // 默认计数限制
    var l = 15;
    // 心跳超时时间（毫秒）
    var g = 180000;
  },
  
  // 841: 文件创建和下载相关功能
  841: function (e, t, o) {
    o.r(t);
    o.d(t, {
      createGzipFile: function () {
        return A;
      },
      createLogFile: function () {
        return n;
      },
      downloadFile: function () {
        return r;
      }
    });
    
    // 生成日志文件名
    function i(e) {
      return `log-${e.toISOString().replace(/[:.]/g, "-")}`;
    }
    
    // 创建日志文件
    function n(e, t) {
      var o = new Date();
      var n = t || i(o);
      var A = e instanceof Uint8Array ? e : new TextEncoder().encode(e);
      return new File([A], `${n}.log`, {
        type: "text/plain",
        lastModified: +o
      });
    }
    
    // 创建Gzip文件
    function A(e, t) {
      var o = new Date();
      var n = t || i(o);
      return new File([e], `${n}.gz`, {
        type: "application/gzip",
        lastModified: +o
      });
    }
    
    // 下载文件
    function r(e) {
      if (self.document) {
        var t = document.createElement("a");
        t.href = URL.createObjectURL(e);
        t.download = e.name;
        t.click();
      }
    }
  },
  
  // 266: 随机字符串生成和索引名称验证
  266: function (e, t, o) {
    o.r(t);
    o.d(t, {
      getRandomString: function () {
        return i;
      },
      isValidIndexName: function () {
        return n;
      }
    });
    
    // 生成指定长度的随机字符串
    function i(e, t) {
      // 字符集：如果t为true，包含字母和数字；否则只包含数字
      var o = t ? "abcdefghijklmnopqrstuvwxyz0123456789" : "0123456789";
      var i = "";
      for (var n = 0; n < e; n++) {
        i += o.charAt(Math.floor(Math.random() * o.length));
      }
      return i;
    }
    
    // 验证索引名称是否有效
    function n(e) {
      // 规则：以字母、下划线或$开头，后面可以跟字母、数字、下划线或$，长度不超过255个字符
      return /^[a-zA-Z_$][a-zA-Z0-9_$]{0,254}$/.test(e);
    }
  },
  
  // 193: 日志记录功能
  193: function (e, t, o) {
    o.r(t);
    o.d(t, {
      LogMode: function () {
        return a;
      },
      Logger: function () {
        return f;
      },
      OfflineLogCore: function () {
        return b;
      },
      clearLogCache: function () {
        return r;
      },
      default: function () {
        return G;
      },
      dumpLog: function () {
        return B;
      },
      enable: function () {
        return u;
      },
      getLogCache: function () {
        return A;
      }
    });
    
    var i;
    var n = {};
    
    // 获取日志缓存
    function A(e) {
      return n[e];
    }
    
    // 清除日志缓存
    function r(e) {
      n[e] = [];
    }
    
    // 日志级别枚举
    (function (e) {
      e[e.trace = 1] = "trace";
      e[e.log = 1] = "log";
      e[e.info = 2] = "info";
      e[e.debug = 3] = "debug";
      e[e.warn = 4] = "warn";
      e[e.error = 5] = "error";
    })(i ||= {});
    
    var a;
    
    // 日志转换工具类
    var s = function () {
      function e() {}
      
      // 获取开始日志时间
      Object.defineProperty(e, "startLogTimeMs", {
        get: function () {
          return this.firstLogTimestampMs;
        },
        enumerable: false,
        configurable: true
      });
      
      // 获取作用域ID映射
      Object.defineProperty(e, "scopeIdMap", {
        get: function () {
          return this.idToScopeNameMap;
        },
        enumerable: false,
        configurable: true
      });
      
      // 转换日志格式
      e.convert = function (e, t, o, i) {
        if (this.firstLogTimestampMs === -1) {
          this.firstLogTimestampMs = t;
        }
        return [this.getLevelId(e), Math.floor(t - this.firstLogTimestampMs), this.handleScopeNames(o), i];
      };
      
      // 处理作用域名称
      e.handleScopeNames = function (t) {
        if (Array.isArray(t)) {
          return t.map(function (t) {
            return e.getScopeNameId(t);
          }).join(",");
        } else {
          return e.getScopeNameId(t);
        }
      };
      
      // 获取作用域名称ID
      e.getScopeNameId = function (e) {
        if (!this.scopeNameToIdMap[e]) {
          this.scopeNameToIdMap[e] = this.scopeNameId;
          this.idToScopeNameMap[this.scopeNameId] = e;
          this.scopeNameId++;
        }
        return this.scopeNameToIdMap[e];
      };
      
      // 获取日志级别ID
      e.getLevelId = function (e) {
        return i[e];
      };
      
      e.scopeNameToIdMap = {};
      e.idToScopeNameMap = {};
      e.scopeNameId = 0;
      e.firstLogTimestampMs = -1;
      return e;
    }();
    
    // 空函数（用于禁用日志）
    function l() {}
    
    // 默认日志函数（全部禁用）
    var g = {
      trace: l,
      debug: l,
      info: l,
      log: l,
      warn: l,
      error: l
    };
    
    // 日志模式枚举
    (function (e) {
      e[e.console = 1] = "console";
      e[e.cache = 2] = "cache";
    })(a ||= {});
    
    // 当前日志配置
    var c = Object.assign({}, g);
    
    // 启用日志
    function u(e) {
      (e || Object.keys(g)).forEach(function (e) {
        c[e] = self.console?.[e] || l;
      });
    }
    
    // 日志输出函数
    function E(e, t) {
      var o = [];
      for (var i = 2; i < arguments.length; i++) {
        o[i - 2] = arguments[i];
      }
      c[e].apply(c, function (e, t, o) {
        if (o || arguments.length === 2) {
          var i;
          for (var n = 0, A = t.length; n < A; n++) {
            if (!!i || !(n in t)) {
              i ||= Array.prototype.slice.call(t, 0, n);
              i[n] = t[n];
            }
          }
        }
        return e.concat(i || Array.prototype.slice.call(t));
      }([t], o, false));
    }
    
    // 检查是否为原始类型
    function d(e) {
      return ["string", "number", "bigint", "boolean", "symbol", "undefined"].indexOf(typeof e) !== -1;
    }
    
    // 下载日志文件
    function B(e) {
      var t = document.createElement("a");
      var o = e.join("\n\n");
      t.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(o)}`);
      t.setAttribute("download", `tp-log-${Date.now()}.txt`);
      t.style.display = "none";
      document.body.appendChild(t);
      t.click();
      document.body.removeChild(t);
    }
    
    var h;
    function p() {
      // 此函数未完成，可能是一个空实现或者后续会添加内容
    }
  }
};