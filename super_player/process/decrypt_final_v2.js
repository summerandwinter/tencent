const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { webcrypto } = require('crypto');

// ==========================================
// 1. 环境模拟 (集成 WebCrypto)
// ==========================================
const url = "https://v.qq.com/x/cover/mzc00200123456/t00123456.html";
const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`, {
    url: url,
    referrer: "https://v.qq.com/",
    contentType: "text/html",
    runScripts: "dangerously"
});

const window = dom.window;

// [关键修复] 注入 Web Crypto API (解密核心依赖)
// Node.js 15+ 原生支持 webcrypto，将其挂载到 window
if (!window.crypto) {
    window.crypto = webcrypto;
    global.crypto = webcrypto;
}

global.window = window;
global.document = window.document;
global.self = window;
global.location = window.location;

// 补全指纹
global.navigator = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    appVersion: "5.0 (Windows)",
    platform: "Win32",
    vendor: "Google Inc.",
    webdriver: false,
    plugins: [1, 2, 3],
    languages: ["zh-CN", "zh"]
};

// 补全 API
global.atob = (str) => Buffer.from(str, 'base64').toString('binary');
global.btoa = (str) => Buffer.from(str, 'binary').toString('base64');
global.String = String;
global.Number = Number;
global.Boolean = Boolean;
global.Array = Array;
global.Date = Date;
global.Math = Math;
global.parseInt = parseInt;
global.JSON = JSON;
global.Promise = Promise;
global.RegExp = RegExp;
global.TypeError = TypeError;
global.Uint32Array = Uint32Array;
global.Error = Error;
global.console = console;

// 辅助函数
function gy(e) { return (e && typeof Symbol != "undefined" && e.constructor === Symbol) ? "symbol" : typeof e; }
function ly(e, t) { return (t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance]) ? !!t[Symbol.hasInstance](e) : e instanceof t; }

// ==========================================
// 2. VM 解释器 (带心跳监控)
// ==========================================
var cy = function() {
    function e(e, t, o) {
        var i = [];
        for (var n = 0; n++ < t;) { i.push(e += o); }
        return i;
    }
    function t(e) {
        var t, o, i = String(e).replace(/[=]+$/, "");
        for (var A = i.length, r = 0, a = 0, s = []; a < A; a++) {
            if (~(o = n[i.charCodeAt(a)]) && (t = r % 4 ? t * 64 + o : o, r++ % 4)) {
                s.push(t >> (A * -2 & 6) & 255);
            }
        }
        return s;
    }
    function o(e) { return e >> 1 ^ -(e & 1); }
    function i(e) {
        var i = [];
        var n = new Uint8Array(t(e));
        for (var A = n.length, r = 0; A > r;) {
            var a = n[r++];
            var s = a & 127;
            if (!(a >= 0)) {
                s |= ((a = n[r++]) & 127) << 7;
                if (!(a >= 0)) {
                    s |= ((a = n[r++]) & 127) << 14;
                    if (!(a >= 0)) {
                        s |= ((a = n[r++]) & 127) << 21;
                        if (!(a >= 0)) { s |= (a = n[r++]) << 28; }
                    }
                }
            }
            i.push(o(s));
        }
        return i;
    }
    var n = [];
    var a = e(0, 43, 0).concat([62, 0, 62, 0, 63]).concat(e(51, 10, 1)).concat(e(0, 8, 0)).concat(e(0, 25, 1)).concat([0, 0, 0, 0, 63, 0]).concat(e(25, 26, 1));
    var s = i;
    return function(e, t) {
        var o = s(e);
        function i(e, t, n, A, r) {
            return function a() {
                var s, l, g, c, u = [n, A, t, this, arguments, a, o, 0], E = undefined, d = e, B = [];
                let ops = 0;
                for (;;) try {
                    // [DEBUG] 心跳日志：每执行 20万条指令打印一次
                    // 如果一直打印 Ops，说明在计算；如果停住不打印了，说明卡在 await
                    if (++ops % 20 === 0) { 
                         process.stdout.write(`\r[VM Running] Ops: ${ops} ...`);
                    }
                    if (ops > 200) throw new Error("VM_INSTRUCTION_LIMIT");

                    for (;;) switch (o[++d] ^ u[7]) {
                        case 0: case 30: u[o[++d]] = u[o[++d]] == u[o[++d]]; break;
                        case 1: u[o[++d]] = u[o[++d]] ^ u[o[++d]]; break;
                        case 2: u[o[++d]] = u[o[++d]][u[o[++d]]]; break;
                        case 3: u[o[++d]] = u[o[++d]].call(E); break;
                        case 4: u[o[++d]] = u[o[++d]] + u[o[++d]]; break;
                        case 5: u[o[++d]][o[++d]] = u[o[++d]]; u[o[++d]] = ""; u[o[++d]] += String.fromCharCode(o[++d]); break;
                        case 6: u[o[++d]] = u[o[++d]] >= o[++d]; break;
                        case 7: u[o[++d]] = ""; u[o[++d]] += String.fromCharCode(o[++d]); break;
                        case 8: return u[o[++d]];
                        case 9: u[o[++d]] = u[o[++d]] / u[o[++d]]; break;
                        case 10: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = u[o[++d]].call(E); u[o[++d]][o[++d]] = u[o[++d]]; break;
                        case 11: u[o[++d]][o[++d]] = u[o[++d]]; break;
                        case 12: u[o[++d]] = ++u[o[++d]]; break;
                        case 13: u[o[++d]] = u[o[++d]].call(E, u[o[++d]], u[o[++d]]); break;
                        case 14: B.pop(); break;
                        case 15: u[o[++d]][o[++d]] = u[o[++d]]; u[o[++d]] = u[o[++d]][i[++d]]; break;
                        case 16: u[o[++d]] = u[o[++d]] > o[++d]; break;
                        case 17: u[o[++d]] = u[o[++d]] % u[o[++d]]; break;
                        case 18: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = u[o[++d]][i[++d]]; break;
                        case 19: u[o[++d]] = u[o[++d]] === o[++d]; break;
                        case 20: u[o[++d]] = !u[o[++d]]; break;
                        case 21: u[o[++d]] = E; break;
                        case 22: B.push(d + o[++d]); break;
                        case 23: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]][o[++d]] = u[o[++d]]; u[o[++d]] += String.fromCharCode(o[++d]); break;
                        case 24: u[o[++d]] = u[o[++d]] | u[o[++d]]; break;
                        case 25: d += u[o[++d]] ? o[++d] : o[d += 1, d]; break;
                        case 26: u[o[++d]] = o[++d]; break;
                        case 27: s = u[o[++d]]; if (u[o[++d]] = !!s.length) { u[o[++d]] = s.shift(); } else { ++d; } break;
                        case 28: u[o[++d]] = u[o[++d]].call(u[o[++d]]); break;
                        case 29: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = ""; u[o[++d]] += String.fromCharCode(o[++d]); break;
                        case 31: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]] += String.fromCharCode(o[++d]); break;
                        case 32: u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]]); break;
                        case 33: s = []; for (g in u[o[++d]]) { s.push(g); } u[o[++d]] = s; break;
                        case 34: u[o[++d]] = u[o[++d]] - 0; break;
                        case 35: u[o[++d]] = r; break;
                        case 36: u[o[++d]] = u[o[++d]]; u[o[++d]][u[o[++d]]] = u[o[++d]]; break;
                        case 37: throw u[o[++d]];
                        case 38: u[o[++d]] = +u[o[++d]]; break;
                        case 39: s = []; g = o[++d]; for (; g > 0; g--) { s.push(u[o[++d]]); } u[o[++d]] = u[o[++d]].apply(E, s); break;
                        case 40: u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]], u[o[++d]], u[o[++d]]); break;
                        case 41: u[o[++d]][o[++d]] = u[o[++d]]; d += u[o[++d]] ? o[++d] : o[d += 1, d]; break;
                        case 42: u[o[++d]][u[o[++d]]] = u[o[++d]]; break;
                        case 43: u[o[++d]] = new u[o[++d]](u[o[++d]]); break;
                        case 44: u[o[++d]] = new u[o[++d]](u[o[++d]], u[o[++d]]); break;
                        case 45: u[o[++d]] = ~u[o[++d]]; break;
                        case 46: u[o[++d]] = u[o[++d]] < u[o[++d]]; break;
                        case 47: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = u[o[++d]][u[o[++d]]]; break;
                        case 48: u[o[++d]] = u[o[++d]]; u[o[++d]][o[++d]] = u[o[++d]]; break;
                        case 49: u[o[++d]] = Array(o[++d]); u[o[++d]] = Array(o[++d]); break;
                        case 50: u[o[++d]] = -u[o[++d]]; break;
                        case 51: u[o[++d]] = new u[o[++d]](); break;
                        case 52: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]][o[++d]] = u[o[++d]]; break;
                        case 53: u[o[++d]] = delete u[o[++d]][u[o[++d]]]; break;
                        case 54: s = []; g = o[++d]; for (; g > 0; g--) { s.push(u[o[++d]]); } u[o[++d]] = i(d + o[++d], s, n, A, r); try { Object.defineProperty(u[o[d - 1]], "length", { value: o[++d], configurable: true, writable: false, enumerable: false }); } catch (e) {} break;
                        case 55: u[o[++d]] = Array(o[++d]); break;
                        case 56: u[o[++d]] = u[o[++d]].call(E, u[o[++d]], u[o[++d]], u[o[++d]]); break;
                        case 57: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = o[++d]; break;
                        case 58: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]] = o[++d]; u[o[++d]] += String.fromCharCode(o[++d]); break;
                        case 59: u[o[++d]] = u[o[++d]].call(E); u[o[++d]][o[++d]] = u[o[++d]]; break;
                        case 60: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = u[o[++d]][o[++d]]; break;
                        case 61: u[o[++d]] = ""; break;
                        case 62: u[o[++d]] = u[o[++d]] + o[++d]; break;
                        case 63: u[o[++d]] = u[o[++d]] * u[o[++d]]; break;
                        case 64: u[o[++d]] = gy(u[o[++d]]); break;
                        case 65: u[o[++d]] = u[o[++d]] < o[++d]; break;
                        case 66: u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]], u[o[++d]]); break;
                        case 67: u[o[++d]] = u[o[++d]] & u[o[++d]]; break;
                        case 68: u[o[++d]] = ly(u[o[++d]], u[o[++d]]); break;
                        case 69: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = ""; break;
                        case 70: u[o[++d]] = u[o[++d]] - u[o[++d]]; break;
                        case 71: u[o[++d]] = u[o[++d]] | o[++d]; break;
                        case 72: u[o[++d]] = u[o[++d]] > u[o[++d]]; break;
                        case 73: u[o[++d]] = null; break;
                        case 74: u[o[++d]] += String.fromCharCode(o[++d]); break;
                        case 75: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]] = u[o[++d]][B[i[++d]]]; break;
                        case 76: u[o[++d]] = {}; break;
                        case 77: s = []; g = o[++d]; for (; g > 0; g--) { s.push(u[o[++d]]); } u[o[++d]] = u[o[++d]].apply(u[o[++d]], s); break;
                        case 78: u[o[++d]] = u[o[++d]] - o[++d]; break;
                        case 79: s = [, ]; g = o[++d]; for (; g > 0; g--) { s.push(u[o[++d]]); } g = o[++d]; c = u[o[++d]]; u[g] = new(c.bind.apply(c, s))(); break;
                        case 80: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = u[o[++d]][o[++d]]; break;
                        case 81: u[o[++d]] = o[++d]; u[o[++d]][o[++d]] = u[o[++d]]; break;
                        case 82: u[o[++d]] = u[o[++d]].call(E, u[o[++d]]); break;
                        case 83: u[o[++d]] = u[o[++d]][o[++d]]; break;
                        case 84: u[o[++d]] = u[o[++d]];
                    }
                } catch (e) {
                    if (e.message === "VM_INSTRUCTION_LIMIT") throw e;
                    if (B.length > 0) { l = []; }
                    c = e;
                    l.push(d);
                    if (B.length === 0) { throw r ? r(e, u, l) : e; }
                    d = B.pop();
                    l.pop();
                }
            };
        }
        if (t) { return o; } else { return i; }
    };
}();

// ==========================================
// 3. 字节码加载
// ==========================================

const RAW_BYTECODE = "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"; // [在此处粘贴超长字符串]

if (!RAW_BYTECODE) {
    console.error("[!] Error: RAW_BYTECODE is empty.");
    process.exit(1);
}

const envProxy = {
    get Object() { return Object; },
    get moduleQimei() { return undefined; },
    get Uint32Array() { return Uint32Array; },
    get window() { return window; },
    get String() { return String; },
    get Symbol() { return Symbol; },
    get undefined() { return undefined; },
    get TypeError() { return TypeError; },
    get Number() { return Number; },
    get JSON() { return JSON; },
    get parseInt() { return parseInt; },
    get Date() { return Date; },
    get Array() { return Array; },
    get Math() { return Math; },
    get Promise() { return Promise; },
    get navigator() { return navigator; },
    get setTimeout() { return setTimeout; },
    get RegExp() { return RegExp; },
    get console() { return console; },
    get document() { return document; },
    get location() { return location; },
    get screen() { return screen; },
    get performance() { return performance; }
};

let responseModifier = null;
try {
    responseModifier = cy(RAW_BYTECODE, false)(6327, [], envProxy);
    console.log("[-] VM initialized.");
} catch (e) {
    console.error("[!] VM Init Error:", e);
    process.exit(1);
}

// ==========================================
// 4. 执行解密 (使用 Mock 上下文)
// ==========================================

// 模拟播放器配置上下文 (ProxyHttp 调用时的 'n' 参数)
const mockConfig = {
    // 很多反爬逻辑会检查 config 里的属性
    config: {
        instanceId: "dummy_instance",
        businessConfig: { platform: "10201" }
    },
    playerInstanceId: "dummy_instance",
    logger: {
        log: () => {},
        error: console.error
    }
};

const inputObj = {
    anc: "eyJyYyI6IkdxQ2xScU81TXZU" // 你的 anc
};

(async () => {
    console.log("Input:", inputObj);
    
    try {
        console.log("[-] VM 正在执行...");
        
        // 使用 .call(mockConfig) 模拟 this 上下文
        // 这样 VM 内部访问 this.config 时就不会报错了
        const resultPromise = responseModifier.call(mockConfig, inputObj);
        
        const result = await resultPromise;
        
        console.log("\n[+] Final Result:");
        console.log("------------------------------");
        console.log(JSON.stringify(result, null, 2));
        
        if (result && result.anc && result.anc !== inputObj.anc) {
             console.log("✅ 解密成功！anc 已更新。");
        } else {
             console.log("⚠️ anc 未变化。");
        }
    } catch(e) {
        console.error("\n[!] Execution Error:", e);
    }
})();