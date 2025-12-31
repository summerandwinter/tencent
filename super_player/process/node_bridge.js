const vm = require('vm');

// ================== [ 1. 字符串注入区 ] ==================
// 1. 原始代码变量 i 的值 (AGFzb...)
const WASM_I = "在此粘贴 i 变量字符串";

// 2. a(xxx, !0) 里的第一个长字符串参数 (eiY+Jug...)
const ENCODED_STR = "在此粘贴第一个参数字符串";

// 3. 这里是你的加密数据
const encryptedPayload = { "anc": "在此粘贴加密内容" };
// ========================================================

/**
 * 2. 构造递归 Mock 环境
 * 能够自动应对 VM 的各种环境审计（如 Logger, n, Promise 等）
 */
const createRecursiveMock = (name) => {
    const dummy = function() { return createRecursiveMock(`${name}()`); };
    return new Proxy(dummy, {
        get(target, prop) {
            if (prop === Symbol.toPrimitive) return () => `[Mock ${name}]`;
            if (prop === 'prototype') return {};
            if (prop === 'constructor') return target.constructor;
            return createRecursiveMock(`${name}.${String(prop)}`);
        },
        set() { return true; }
    });
};

const baseEnv = {
    atob: (s) => Buffer.from(s, 'base64').toString('binary'),
    btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
    Uint8Array, Int8Array, Uint32Array, Symbol, Promise, WebAssembly,
    console, setTimeout, Math, Date,
    navigator: { userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)' },
    location: { href: 'https://v.qq.com/', hostname: 'v.qq.com' },
    document: { 
        createElement: (t) => createRecursiveMock(`el_${t}`),
        documentElement: createRecursiveMock('docEl')
    }
};

const sandbox = new Proxy(baseEnv, {
    get(target, prop) {
        if (['window', 'self', 'global', 'n'].includes(prop)) return sandbox;
        if (prop in target) return target[prop];
        return createRecursiveMock(String(prop));
    }
});

/**
 * 3. 核心执行逻辑
 * 使用原始代码逻辑生成指令集。注意：此处使用了模板字符串包装原始逻辑，
 * 这样 Node.js 不会提前解析语法，从而避开 Case 33 的 for 循环报错。
 */
const vmSourceCode = `
    const wasm_i = "${WASM_I}";
    const encoded_str = "${ENCODED_STR}";

    const g_init_func = (function() {
        var _e = (e, t, o) => { var i = []; for (var n = 0; n++ < t; ) i.push(e += o); return i; };
        var a_map = _e(0, 43, 0).concat([62, 0, 62, 0, 63]).concat(_e(51, 10, 1)).concat(_e(0, 8, 0)).concat(_e(0, 25, 1)).concat([0, 0, 0, 0, 63, 0]).concat(_e(25, 26, 1));
        var _t = (e) => {
            for (var t, o, i_str = String(e).replace(/[=]+$/, ""), n = i_str.length, A = 0, r = 0, s = []; r < n; r++)
                ~(o = a_map[i_str.charCodeAt(r)]) && (t = A % 4 ? 64 * t + o : o, A++ % 4) && s.push(255 & t >> (-2 * A & 6));
            return s;
        };
        var _o = (e) => e >> 1 ^ -(1 & e);
        var bytes = _t(encoded_str), n_raw = new Int8Array(bytes), instructions = [], r_idx = 0;
        while (r_idx < n_raw.length) {
            var a_val = n_raw[r_idx++], s_val = 127 & a_val;
            if (a_val < 0) {
                s_val |= (127 & (a_val = n_raw[r_idx++])) << 7;
                if (a_val < 0) {
                    s_val |= (127 & (a_val = n_raw[r_idx++])) << 14;
                    if (a_val < 0) {
                        s_val |= (127 & (a_val = n_raw[r_idx++])) << 21;
                        if (a_val < 0) s_val |= (a_val = n_raw[r_idx++]) << 28;
                    }
                }
            }
            instructions.push(_o(s_val));
        }

        var factory = function(e, t, o, s, l) {
            return function g() {
                var c, u, E, d, n_stack, B = [o, s, t, this, arguments, g, instructions, 0], h = void 0, p = e, v = [];
                for (; ;) {
                    try {
                        for (; ;) {
                            switch (instructions[++p] ^ B[7]) {
                                case 0: case 30: B[instructions[++p]] = B[instructions[++p]] == B[instructions[++p]]; break;
                                case 1: B[instructions[++p]] = B[instructions[++p]] ^ B[instructions[++p]]; break;
                                case 2: B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]]; break;
                                case 3: B[instructions[++p]] = B[instructions[++p]].call(h); break;
                                case 4: B[instructions[++p]] = B[instructions[++p]] + B[instructions[++p]]; break;
                                case 5: B[instructions[++p]][instructions[++p]] = B[instructions[++p]], B[instructions[++p]] = "", B[instructions[++p]] += String.fromCharCode(instructions[++p]); break;
                                case 6: B[instructions[++p]] = B[instructions[++p]] >= instructions[++p]; break;
                                case 7: B[instructions[++p]] = "", B[instructions[++p]] += String.fromCharCode(instructions[++p]); break;
                                case 8: return B[instructions[++p]];
                                case 9: B[instructions[++p]] = B[instructions[++p]] / B[instructions[++p]]; break;
                                case 10: B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]], B[instructions[++p]] = B[instructions[++p]].call(h), B[instructions[++p]][instructions[++p]] = B[instructions[++p]]; break;
                                case 11: B[instructions[++p]][instructions[++p]] = B[instructions[++p]]; break;
                                case 12: B[instructions[++p]] = ++B[instructions[++p]]; break;
                                case 13: B[instructions[++p]] = B[instructions[++p]].call(h, B[instructions[++p]], B[instructions[++p]]); break;
                                case 14: v.pop(); break;
                                case 15: B[instructions[++p]][instructions[++p]] = B[instructions[++p]], B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]]; break;
                                case 16: B[instructions[++p]] = B[instructions[++p]] > instructions[++p]; break;
                                case 17: B[instructions[++p]] = B[instructions[++p]] % B[instructions[++p]]; break;
                                case 18: B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]], B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]]; break;
                                case 19: B[instructions[++p]] = B[instructions[++p]] === instructions[++p]; break;
                                case 20: B[instructions[++p]] = !B[instructions[++p]]; break;
                                case 21: B[instructions[++p]] = h; break;
                                case 22: v.push(p + instructions[++p]); break;
                                case 23: B[instructions[++p]] += String.fromCharCode(instructions[++p]), B[instructions[++p]][instructions[++p]] = B[instructions[++p]], B[instructions[++p]] += String.fromCharCode(instructions[++p]); break;
                                case 24: B[instructions[++p]] = B[instructions[++p]] | B[instructions[++p]]; break;
                                case 25: p += B[instructions[++p]] ? instructions[++p] : instructions[(++p, ++p)]; break;
                                case 26: B[instructions[++p]] = instructions[++p]; break;
                                case 27: u = B[instructions[++p]], (B[instructions[++p]] = !!u.length) ? B[instructions[++p]] = u.shift() : ++p; break;
                                case 28: B[instructions[++p]] = B[instructions[++p]].call(B[instructions[++p]]); break;
                                case 29: B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]], B[instructions[++p]] = "", B[instructions[++p]] += String.fromCharCode(instructions[++p]); break;
                                case 31: B[instructions[++p]] += String.fromCharCode(instructions[++p]), B[instructions[++p]] += String.fromCharCode(instructions[++p]); break;
                                case 32: B[instructions[++p]] = B[instructions[++p]].call(B[instructions[++p]], B[instructions[++p]]); break;
                                case 33: u = []; (function(idx){ for(var E_key in B[idx]) u.push(E_key); })(instructions[++p]); B[instructions[++p]] = u; break;
                                case 34: B[instructions[++p]] = B[instructions[++p]] - 0; break;
                                case 35: B[instructions[++p]] = c; break;
                                case 36: B[instructions[++p]] = B[instructions[++p]], B[instructions[++p]][B[instructions[++p]]] = B[instructions[++p]]; break;
                                case 37: throw B[instructions[++p]];
                                case 38: B[instructions[++p]] = +B[instructions[++p]]; break;
                                case 39: u = []; (function(cnt){ while(cnt-- > 0) u.push(B[instructions[++p]]); })(instructions[++p]); B[instructions[++p]] = B[instructions[++p]].apply(h, u); break;
                                case 40: B[instructions[++p]] = B[instructions[++p]].call(h, B[instructions[++p]], B[instructions[++p]], B[instructions[++p]]); break;
                                case 41: B[instructions[++p]][instructions[++p]] = B[instructions[++p]], p += B[instructions[++p]] ? instructions[++p] : instructions[(++p, ++p)]; break;
                                case 42: B[instructions[++p]][B[instructions[++p]]] = B[instructions[++p]]; break;
                                case 43: B[instructions[++p]] = new B[instructions[++p]](B[instructions[++p]]); break;
                                case 44: B[instructions[++p]] = new B[instructions[++p]](B[instructions[++p]], B[instructions[++p]]); break;
                                case 45: B[instructions[++p]] = ~B[instructions[++p]]; break;
                                case 46: B[instructions[++p]] = B[instructions[++p]] < instructions[++p]; break;
                                case 47: B[instructions[++p]] = B[instructions[++p]][instructions[++p]], B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]]; break;
                                case 48: B[instructions[++p]] = B[instructions[++p]], B[instructions[++p]][instructions[++p]] = B[instructions[++p]]; break;
                                case 49: B[instructions[++p]] = Array(instructions[++p]), B[instructions[++p]] = Array(instructions[++p]); break;
                                case 50: B[instructions[++p]] = -B[instructions[++p]]; break;
                                case 51: B[instructions[++p]] = new B[instructions[++p]]; break;
                                case 52: B[instructions[++p]] = B[instructions[++p]][instructions[++p]], B[instructions[++p]][instructions[++p]] = B[instructions[++p]]; break;
                                case 53: B[instructions[++p]] = delete B[instructions[++p]][B[instructions[++p]]]; break;
                                case 54: u = []; (function(cnt){ while(cnt-- > 0) u.push(B[instructions[++p]]); })(instructions[++p]); B[instructions[++p]] = factory(p + instructions[++p], u, o, s, l); try { Object.defineProperty(B[instructions[p-1]], "length", { value: instructions[++p], configurable: !0, writable: !1, enumerable: !1 }) } catch(e){} break;
                                case 55: B[instructions[++p]] = Array(instructions[++p]); break;
                                case 56: B[instructions[++p]] = B[instructions[++p]].call(h, B[instructions[++p]], B[instructions[++p]], B[instructions[++p]]); break;
                                case 57: B[instructions[++p]] = B[instructions[++p]][instructions[++p]], B[instructions[++p]] = instructions[++p]; break;
                                case 58: B[instructions[++p]] += String.fromCharCode(instructions[++p]), B[instructions[++p]] = instructions[++p], B[instructions[++p]] += String.fromCharCode(instructions[++p]); break;
                                case 59: B[instructions[++p]] = B[instructions[++p]].call(h), B[instructions[++p]][instructions[++p]] = B[instructions[++p]]; break;
                                case 60: B[instructions[++p]] = B[instructions[++p]][instructions[++p]], B[instructions[++p]] = B[instructions[++p]][instructions[++p]], B[instructions[++p]] = B[instructions[++p]][instructions[++p]]; break;
                                case 61: B[instructions[++p]] = ""; break;
                                case 62: B[instructions[++p]] = B[instructions[++p]] + instructions[++p]; break;
                                case 63: B[instructions[++p]] = B[instructions[++p]] * B[instructions[++p]]; break;
                                case 64: B[instructions[++p]] = typeof B[instructions[++p]]; break;
                                case 65: B[instructions[++p]] = B[instructions[++p]] < instructions[++p]; break;
                                case 66: B[instructions[++p]] = B[instructions[++p]].call(B[instructions[++p]], B[instructions[++p]], B[instructions[++p]]); break;
                                case 67: B[instructions[++p]] = B[instructions[++p]] & B[instructions[++p]]; break;
                                case 68: B[instructions[++p]] = B[instructions[++p]] instanceof B[instructions[++p]]; break;
                                case 69: B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]], B[instructions[++p]] = ""; break;
                                case 70: B[instructions[++p]] = B[instructions[++p]] - B[instructions[++p]]; break;
                                case 71: B[instructions[++p]] = B[instructions[++p]] | instructions[++p]; break;
                                case 72: B[instructions[++p]] = B[instructions[++p]] > B[instructions[++p]]; break;
                                case 73: B[instructions[++p]] = null; break;
                                case 74: B[instructions[++p]] += String.fromCharCode(instructions[++p]); break;
                                case 75: B[instructions[++p]] += String.fromCharCode(instructions[++p]), B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]]; break;
                                case 76: B[instructions[++p]] = {}; break;
                                case 77: u = []; (function(cnt){ while(cnt-- > 0) u.push(B[instructions[++p]]); })(instructions[++p]); B[instructions[++p]] = B[instructions[p-1]].apply(h, u); break;
                                case 78: B[instructions[++p]] = B[instructions[++p]] - instructions[++p]; break;
                                case 79: u = [,]; (function(cnt){ while(cnt-- > 0) u.push(B[instructions[++p]]); })(instructions[++p]); E = instructions[++p]; d = B[instructions[++p]]; B[E] = new (d.bind.apply(d, u)); break;
                                case 80: B[instructions[++p]] = B[instructions[++p]][instructions[++p]], B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]]; break;
                                case 81: B[instructions[++p]] = instructions[++p], B[instructions[p-1]][instructions[++p]] = B[instructions[p-2]]; break;
                                case 82: B[instructions[++p]] = B[instructions[++p]].call(h, B[instructions[++p]]); break;
                                case 83: B[instructions[++p]] = B[instructions[++p]][B[instructions[++p]]]; break;
                                case 84: B[instructions[++p]] = B[instructions[++p]]; break;
                            }
                        }
                    } catch (err) {
                        if (v.length > 0 && (n_stack = []), c = err, n_stack.push(p), 0 === v.length) throw err;
                        p = v.pop(), n_stack.pop();
                    }
                }
            };
        };

        var n_ctx = Object.assign({ t: 0, n: {}, e: {}, wb: wasm_i }, window);
        return factory(70008, [], n_ctx, [void 0, null, .5], void 0)();
    })();

    // 挂载到全局
    global.g_decrypter = g_init_func;
`;

// 4. 执行沙箱
const context = vm.createContext(sandbox);
console.log("--- 启动 VM 引擎 ---");
try {
    vm.runInContext(vmSourceCode, context);
    console.log("--- 初始化成功 ---");
} catch (e) {
    console.error("--- 初始化崩溃 ---");
    console.error(e);
}

// 5. 导出解密方法
async function decryptAnc(input) {
    const g = sandbox.g_decrypter;
    if (typeof g !== 'function') throw new Error("VM 未能生成解密函数");
    return g.call(sandbox, input);
}

// 调用示例
decryptAnc(encryptedPayload).then(res => {
    console.log("解密结果:", res);
}).catch(err => {
    console.error("解密异常:", err);
});