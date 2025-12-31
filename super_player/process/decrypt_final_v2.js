const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { webcrypto } = require('crypto');

// ============================================================
// [!] 1. 请在此处粘贴浏览器 copy 出来的数组 [73, 18, ...]
// ============================================================
const OPCODE_JSON = [];
// [!] 2. 确认入口点
const ENTRY_POINT = 21646;

if (!OPCODE_JSON || OPCODE_JSON.length === 0) {
    console.error("❌ 错误: 请填入 OPCODE_JSON 数组！");
    process.exit(1);
}

// ============================================================
// [!] 3. 真实数据配置 (Mac 环境)
// ============================================================
// 你的真实 UA
const REAL_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36";
const REAL_PLATFORM = "MacIntel"; // [关键] 必须与浏览器一致，之前写死 Win32 会挂

const REAL_URL = "https://v.qq.com/x/cover/mzc00200123456/t00123456.html";
const REAL_VID = "t00123456";
const REAL_CID = "mzc00200123456";

// 真实 Config
const REAL_CONFIG_JSON = {
  "enableDegradeOnLowPerformance": true, "enableTVK": true, "enableP2P": true, "logLevel": 0,
  "appVer": "3.5.57",
  "businessConfig": {
    "platform": "10201", "sdtfrom": "v1010", "businessId": "100101",
    "appKey": "100Gw1PWQUJTlIAEEIMAklPHh0NHx0HTUZTBUgEHQENDAUSFUUKFhIcWwEUHR5MEw8RTAJBBxUdGgJHQAwaDBROUhVJAAQRG0cKQQ8VBhVMDl9DDRQDEE8aXBxPHFlFDhgJRw8cCgIKFwoME0USDA0SBQJWBxoSDxQXWB4fB1obGQZaGxkGGVYHGloJB0VYUlgdXlYQAhcXG0cFVhUEGBVYGhAdGUUZVAACGxVaQQUJWAgRF1gaWg4fDxkER1sFVhUEAklHW0ZIRxdETUVcRARGFwEZAVxCSRkJFxQXAUAJQRsODRUeFw8RExJJHl8ZQA4aFw4cGREUGRgXTA8AExcVEUMXQVMeHgMGHE8SWUEPEVMYQBkeBhQRBgwKBh4VGxtcDEAEHRcOBQ4cSwEaHhoDXwZOBwwQEwdbGggGCE0IAlw",
    "vid": REAL_VID, "cid": REAL_CID
  },
  "instanceId": "521a46a4b6abb17acdec8c56f89f5360"
};

// 真实指纹
const REAL_FEATURE = {
  "canvas": { "id": "47c5be3f048f3feabeb369e6fcdc1b02", "winding": true, "geometry": "370e84f739a7e0be98c4be33e93bf686" },
  "screen": { "colorDepth": 24, "resolution": "3360x2100", "availResolution": "3360x1930" },
  "navigator": {
    "deviceMemory": 8, "hardwareConcurrency": 4, "networkType": "4g", "pdfViewerEnabled": true,
    "platform": REAL_PLATFORM, // [一致性修复]
    "productSub": "20030107",
    "userAgent": REAL_UA,
    "vendor": "Google Inc.",
    "cookieEnabled": true
  },
  "indexedDB": true, "localStorage": true, "sessionStorage": true, "timezoneOffset": -480,
  "webgl": "Google Inc. (Intel Inc.)~ANGLE (Intel Inc., Intel Iris Pro OpenGL Engine, OpenGL 4.1)"
};

// ==========================================
// 4. 环境准备 (JSDOM 设置 UA)
// ==========================================
const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body></body></html>`, {
    url: REAL_URL,
    referrer: "https://v.qq.com/",
    userAgent: REAL_UA, // [一致性修复] 设置 JSDOM 的 UA
    runScripts: "dangerously"
});
const window = dom.window;

if (!window.crypto) { window.crypto = webcrypto; global.crypto = webcrypto; }
if (!window.crypto.subtle) { window.crypto.subtle = webcrypto.subtle; }

global.window = window; global.document = window.document; global.navigator = window.navigator;
// [一致性修复] 覆盖 navigator 属性
Object.defineProperty(global.navigator, 'platform', { get: () => REAL_PLATFORM });
Object.defineProperty(global.navigator, 'userAgent', { get: () => REAL_UA });
Object.defineProperty(global.navigator, 'vendor', { get: () => "Google Inc." });

global.atob = (s) => Buffer.from(s, 'base64').toString('binary');
global.btoa = (s) => Buffer.from(s, 'binary').toString('base64');
global.Array = Array; global.String = String; global.Date = Date; global.Math = Math; global.console = console;
global.setTimeout = setTimeout; global.clearTimeout = clearTimeout;
global.Uint8Array = Uint8Array; global.Uint32Array = Uint32Array; global.Promise = Promise;

global.gy = function(e) { return (e && typeof Symbol != "undefined" && e.constructor === Symbol) ? "symbol" : typeof e; }
global.ly = function(e, t) { return (t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance]) ? !!t[Symbol.hasInstance](e) : e instanceof t; }

// ==========================================
// 5. Qimei Mock (逻辑一致性)
// ==========================================
function x64hash128(e, t) {
    function multiply(e, t) {
        e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535]; t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
        var o = [0, 0, 0, 0];
        o[3] += e[3] * t[3]; o[2] += o[3] >>> 16; o[3] &= 65535; o[2] += e[2] * t[3]; o[1] += o[2] >>> 16; o[2] &= 65535; o[2] += e[3] * t[2]; o[1] += o[2] >>> 16; o[2] &= 65535;
        o[1] += e[1] * t[3]; o[0] += o[1] >>> 16; o[1] &= 65535; o[1] += e[2] * t[2]; o[0] += o[1] >>> 16; o[1] &= 65535; o[1] += e[3] * t[1]; o[0] += o[1] >>> 16; o[1] &= 65535;
        o[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0]; o[0] &= 65535;
        return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
    }
    function add(e, t) {
        e = [e[0] >>> 16, e[0] & 65535, e[1] >>> 16, e[1] & 65535]; t = [t[0] >>> 16, t[0] & 65535, t[1] >>> 16, t[1] & 65535];
        var o = [0, 0, 0, 0];
        o[3] += e[3] + t[3]; o[2] += o[3] >>> 16; o[3] &= 65535; o[2] += e[2] + t[2]; o[1] += o[2] >>> 16; o[2] &= 65535; o[1] += e[1] + t[1]; o[0] += o[1] >>> 16; o[1] &= 65535;
        o[0] += e[0] + t[0]; o[0] &= 65535;
        return [o[0] << 16 | o[1], o[2] << 16 | o[3]];
    }
    function rotl(e, t) {
        if ((t %= 64) == 32) return [e[1], e[0]]; else if (t < 32) return [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t]; else { t -= 32; return [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t]; }
    }
    function xor(e, t) { return [e[0] ^ t[0], e[1] ^ t[1]]; }
    function fmix(e) {
        e = xor(e, [0, e[0] >>> 1]); e = multiply(e, [4283543511, 3981806797]); e = xor(e, [0, e[0] >>> 1]); e = multiply(e, [3301882366, 444984403]); return xor(e, [0, e[0] >>> 1]);
    }
    function shift(e, t) { if ((t %= 64) == 0) return e; else if (t < 32) return [e[0] << t | e[1] >>> 32 - t, e[1] << t]; else return [e[1] << t - 32, 0]; }
    t = t || 0; var s = (e = e || "").length % 16, l = e.length - s, g = [0, t], c = [0, t], u = [0, 0], E = [0, 0]; var d_const = [2277735313, 289559509], B_const = [1291169091, 658871167];
    for (var h = 0; h < l; h += 16) {
        u = [e.charCodeAt(h + 4) & 255 | (e.charCodeAt(h + 5) & 255) << 8 | (e.charCodeAt(h + 6) & 255) << 16 | (e.charCodeAt(h + 7) & 255) << 24, e.charCodeAt(h) & 255 | (e.charCodeAt(h + 1) & 255) << 8 | (e.charCodeAt(h + 2) & 255) << 16 | (e.charCodeAt(h + 3) & 255) << 24];
        E = [e.charCodeAt(h + 12) & 255 | (e.charCodeAt(h + 13) & 255) << 8 | (e.charCodeAt(h + 14) & 255) << 16 | (e.charCodeAt(h + 15) & 255) << 24, e.charCodeAt(h + 8) & 255 | (e.charCodeAt(h + 9) & 255) << 8 | (e.charCodeAt(h + 10) & 255) << 16 | (e.charCodeAt(h + 11) & 255) << 24];
        u = rotl(u = multiply(u, d_const), 31); u = multiply(u, B_const); g = add(g = rotl(g = xor(g, u), 27), c); g = add(multiply(g, [0, 5]), [0, 1390208809]);
        E = rotl(E = multiply(E, B_const), 33); E = multiply(E, d_const); c = add(c = rotl(c = xor(c, E), 31), g); c = add(multiply(c, [0, 5]), [0, 944331445]);
    }
    u = [0, 0]; E = [0, 0];
    switch (s) {
        case 15: E = xor(E, shift([0, e.charCodeAt(h + 14)], 48)); case 14: E = xor(E, shift([0, e.charCodeAt(h + 13)], 40)); case 13: E = xor(E, shift([0, e.charCodeAt(h + 12)], 32)); case 12: E = xor(E, shift([0, e.charCodeAt(h + 11)], 24)); case 11: E = xor(E, shift([0, e.charCodeAt(h + 10)], 16)); case 10: E = xor(E, shift([0, e.charCodeAt(h + 9)], 8)); case 9: E = xor(E, [0, e.charCodeAt(h + 8)]); E = rotl(E = multiply(E, B_const), 33); E = multiply(E, d_const); c = xor(c, E);
        case 8: u = xor(u, shift([0, e.charCodeAt(h + 7)], 56)); case 7: u = xor(u, shift([0, e.charCodeAt(h + 6)], 48)); case 6: u = xor(u, shift([0, e.charCodeAt(h + 5)], 40)); case 5: u = xor(u, shift([0, e.charCodeAt(h + 4)], 32)); case 4: u = xor(u, shift([0, e.charCodeAt(h + 3)], 24)); case 3: u = xor(u, shift([0, e.charCodeAt(h + 2)], 16)); case 2: u = xor(u, shift([0, e.charCodeAt(h + 1)], 8)); case 1: u = xor(u, [e.charCodeAt(h)]); u = rotl(u = multiply(u, d_const), 31); u = multiply(u, B_const); g = xor(g, u);
    }
    g = add(g = xor(g, [0, e.length]), c = xor(c, [0, e.length])); c = add(c, g); g = add(g = fmix(g), c = fmix(c)); c = add(c, g);
    return `00000000${(g[0] >>> 0).toString(16)}`.slice(-8) + `00000000${(g[1] >>> 0).toString(16)}`.slice(-8) + `00000000${(c[0] >>> 0).toString(16)}`.slice(-8) + `00000000${(c[1] >>> 0).toString(16)}`.slice(-8);
}

const QimeiTools = {
    x64hash128: x64hash128,
    getNavigator: () => REAL_FEATURE.navigator, // 确保这里返回的是 REAL_FEATURE 里的 MacIntel
    getFeature: () => REAL_FEATURE,
    getCookieQ36: () => "", getCookieUUID: () => "", getStorageItem: () => null, setStorageItem: () => {},
    http: () => Promise.resolve({ code: 0, data: {} }), promiseSingleton: (fn) => fn(),
    getTimestamp: () => Math.floor(Date.now() / 1000).toString(),
    padStart: (e, t, o) => String(e).padStart(t, o)
};
const QimeiMock = { tools: QimeiTools, QimeiWebLite: {}, getFrameworkVersion: () => "1.0.0" };

// ==========================================
// 6. 防爆 Mock & 追踪系统
// ==========================================
// 用于追踪 VM 最后的行为
const opLog = []; 
function logOp(msg) {
    opLog.push(msg);
    if(opLog.length > 50) opLog.shift();
}

const UniversalMock = new Proxy(function(){}, {
    get: function(target, prop) {
        if (prop === Symbol.toPrimitive) return () => 0;
        if (prop === 'toString') return () => "[object Object]";
        if (prop === 'then') return undefined; 
        return UniversalMock;
    },
    apply: () => UniversalMock, construct: () => UniversalMock, set: () => true
});

// ==========================================
// 7. VM 解释器 (Native Array + Trace)
// ==========================================
var cy = function() {
    return function(opcodeArray) {
        var o = opcodeArray; // Native
        
        function SAFE_GET(obj, prop) {
            if (obj === undefined || obj === null) return UniversalMock;
            try {
                // [Trace] 记录关键属性读取
                if (String(prop).length > 2) logOp(`Read: ${String(prop)}`);
                if (typeof prop === 'function' || typeof prop === 'object') return obj[String(prop)];
                return obj[prop];
            } catch(e) { return UniversalMock; }
        }

        function n(e, t, A, r, a) {
            return function s() {
                var l, g, c;
                var safe_r = r || {};
                var ctx = this || UniversalMock;
                var u = [A, safe_r, t, ctx, arguments, s, o, 0];
                var E = undefined;
                var d = e;
                var B = []; 
                let ops = 0;
                let traceStack = []
                while (true) {
                    try {
                        switch (o[++d]) {
                            case 0: u[o[++d]] += String.fromCharCode(o[++d]); { let t = o[++d]; let src = o[++d]; u[t] = SAFE_GET(u[t], u[src]); } break;
                            case 1: u[o[++d]][u[o[++d]]] = u[o[++d]]; break;
                            case 2: u[o[++d]] = u[o[++d]] | u[o[++d]]; break;
                            case 3: case 62: u[o[++d]] = u[o[++d]] == u[o[++d]]; break;
                            case 4: u[o[++d]] = u[o[++d]] % u[o[++d]]; break;
                            case 5: { let t1 = o[++d]; let o1 = o[++d]; let p1 = o[++d]; u[t1] = SAFE_GET(u[o1], u[p1]); let t2 = o[++d]; let f2 = o[++d]; let th2 = o[++d]; let a2 = o[++d]; let func = u[f2]; if (typeof func === 'function') { u[t2] = func.call(u[th2], u[a2]); } else { u[t2] = UniversalMock; } } break;
                            case 6: u[o[++d]] = delete u[o[++d]][u[o[++d]]]; break;
                            case 7: u[o[++d]] = gy(u[o[++d]]); break;
                            case 8: u[o[++d]] = u[o[++d]].call(E, u[o[++d]], u[o[++d]]); break;
                            case 9: u[o[++d]] = ~u[o[++d]]; break;
                            case 10: u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]]); break;
                            case 11: u[o[++d]] = ""; break;
                            case 12: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]] += String.fromCharCode(o[++d]); break;
                            case 13: u[o[++d]] = u[o[++d]].call(E, u[o[++d]]); break;
                            case 14: u[o[++d]] = u[o[++d]]; B.push(d + o[++d]); u[o[++d]] = u[o[++d]][o[++d]]; break;
                            case 15: case 34: u[o[++d]] = u[o[++d]] == u[o[++d]]; u[o[++d]] = !u[o[++d]]; d += u[o[++d]] ? o[++d] : o[++d, ++d]; break;
                            case 16: { let t = o[++d]; let src = o[++d]; let prop = o[++d]; u[t] = SAFE_GET(u[src], u[prop]); } break;
                            case 17: u[o[++d]] = u[o[++d]] | o[++d]; break;
                            case 18: g = []; for (c in u[o[++d]]) { g.push(c); } u[o[++d]] = g; break;
                            case 19: g = []; c = o[++d]; for (; c > 0; c--) { g.push(u[o[++d]]); } u[o[++d]] = n(d + o[++d], g, A, r, a); try { Object.defineProperty(u[o[d - 1]], "length", { value: o[++d], configurable: true, writable: false, enumerable: false }); } catch (e) {} break;
                            case 20: u[o[++d]][o[++d]] = u[o[++d]]; u[o[++d]] = u[o[++d]][o[++d]]; break;
                            case 21: g = u[o[++d]]; if (u[o[++d]] = !!g.length) { u[o[++d]] = g.shift(); } else { ++d; } break;
                            case 22: u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]], u[o[++d]]); break;
                            case 23: d += o[++d]; break;
                            case 24: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]][u[o[++d]]] = u[o[++d]]; u[o[++d]] = ""; break;
                            case 25: u[o[++d]] = u[o[++d]]; u[o[++d]] = u[o[++d]] - 0; u[o[++d]] = ++u[o[++d]]; break;
                            case 26: { let t = o[++d]; let src = o[++d]; let idx = o[++d]; u[t] = SAFE_GET(u[src], idx); let func = u[o[++d]]; let target = u[o[++d]]; if (typeof func === 'function') { u[target] = func.call(E); } else { u[target] = UniversalMock; } u[o[++d]] = u[o[++d]]; } break;
                            case 27: u[o[++d]] = u[o[++d]].call(E, u[o[++d]], u[o[++d]], u[o[++d]]); break;
                            case 28: u[o[++d]] = u[o[++d]]; { let t = o[++d]; let src = o[++d]; let idx = o[++d]; u[t] = SAFE_GET(u[src], idx); } break;
                            case 29: u[o[++d]] = l; break;
                            case 30: u[o[++d]] = u[o[++d]]; break;
                            case 31: u[o[++d]] = u[o[++d]] in u[o[++d]]; break;
                            case 32: { let t = o[++d]; let src = o[++d]; let idx = o[++d]; u[t] = SAFE_GET(u[src], idx); let func = u[o[++d]]; let arg = u[o[++d]]; if(typeof func === 'function') u[t] = func.call(E, arg); else u[t] = UniversalMock; } break;
                            case 33: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = u[o[++d]]; break;
                            case 35: u[o[++d]] = false; break;
                            case 36: d += u[o[++d]] ? o[++d] : o[++d, ++d]; break;
                            case 37: u[o[++d]] = u[o[++d]] > u[o[++d]]; break;
                            case 38: u[o[++d]] = null; u[o[++d]] = u[o[++d]] == u[o[++d]]; d += u[o[++d]] ? o[++d] : o[++d, ++d]; break;
                            case 39: u[o[++d]] = u[o[++d]] >= o[++d]; break;
                            case 40: u[o[++d]] = E; break;
                            case 41: u[o[++d]] = u[o[++d]] > o[++d]; break;
                            case 42: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]][o[++d]] = u[o[++d]]; break;
                            case 43: u[o[++d]] = u[o[++d]] - 0; break;
                            case 44: u[o[++d]] = new u[o[++d]](); break;
                            case 45: { let t = o[++d]; let src = o[++d]; let idx = o[++d]; u[t] = SAFE_GET(u[src], idx); u[o[++d]] = Array(o[++d]); u[o[++d]][o[++d]] = u[o[++d]]; } break;
                            case 46: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = u[o[++d]].call(u[o[++d]]); break;
                            case 47: u[o[++d]] = u[o[++d]] & o[++d]; break;
                            case 48: u[o[++d]] = ++u[o[++d]]; break;
                            case 49: u[o[++d]] = u[o[++d]] + u[o[++d]]; break;
                            case 50: { let reg = o[++d]; let len = o[++d]; u[reg] = Array(len); let reg2 = o[++d]; let idx = o[++d]; let src = o[++d]; if (u[reg2] === undefined) u[reg2] = []; u[reg2][idx] = u[src]; let reg3 = o[++d]; let reg4 = o[++d]; let idx2 = o[++d]; if (u[reg4] === undefined) u[reg4] = []; u[reg3] = u[reg4][idx2]; } break;
                            case 51: u[o[++d]] = u[o[++d]] + o[++d]; break;
                            case 52: u[o[++d]] = true; break;
                            case 53: u[o[++d]] = u[o[++d]] === o[++d]; break;
                            case 54: u[o[++d]] = null; break;
                            case 55: u[o[++d]] = u[o[++d]] < o[++d]; break;
                            case 56: { let t = o[++d]; let src = o[++d]; let idx = o[++d]; u[t] = SAFE_GET(u[src], idx); u[o[++d]] = u[o[++d]][o[++d]]; } break;
                            case 57: u[o[++d]] = u[o[++d]][u[o[++d]]]; g = []; c = o[++d]; for (; c > 0; c--) { g.push(u[o[++d]]); } u[o[++d]] = n(d + o[++d], g, A, r, a); try { Object.defineProperty(u[o[d - 1]], "length", { value: o[++d], configurable: true, writable: false, enumerable: false }); } catch (e) {} break;
                            case 58: u[o[++d]] = !u[o[++d]]; break;
                            case 59: u[o[++d]] = u[o[++d]] >> o[++d]; break;
                            case 60: u[o[++d]] = -u[o[++d]]; break;
                            case 61: 
                                u[o[++d]] = E; 
                                logOp(`RETURN ${typeof u[o[d]] === 'object' ? 'OBJECT' : u[o[d]]}`);
                                return u[o[d]];
                            case 63: g = []; c = o[++d]; for (; c > 0; c--) { g.push(u[o[++d]]); } u[o[++d]] = u[o[++d]].apply(E, g); break;
                            case 64: u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]], u[o[++d]], u[o[++d]]); break;
                            case 65: u[o[++d]] = u[o[++d]] ^ u[o[++d]]; break;
                            case 66: u[o[++d]] = u[o[++d]] < u[o[++d]]; break;
                            case 67: u[o[++d]] = Array(o[++d]); break;
                            case 68: B.pop(); break;
                            case 69: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]] = u[o[++d]][o[++d]]; break;
                            case 70: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = u[o[++d]]; break;
                            case 71: u[o[++d]] = ""; u[o[++d]] += String.fromCharCode(o[++d]); break;
                            case 72: u[o[++d]] = new u[o[++d]](u[o[++d]]); break;
                            case 73: return u[o[++d]];
                            case 74: u[o[++d]] = u[o[++d]] <= o[++d]; break;
                            case 75: u[o[++d]] = u[o[++d]] << o[++d]; break;
                            case 76: B.push(d + o[++d]); break;
                            case 77: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = {}; u[o[++d]] = ""; break;
                            case 78: u[o[++d]] = {}; break;
                            case 79: u[o[++d]] = u[o[++d]] * u[o[++d]]; break;
                            case 80: u[o[++d]] += String.fromCharCode(o[++d]); break;
                            case 81: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = ""; u[o[++d]] += String.fromCharCode(o[++d]); break;
                            case 82: u[o[++d]] = u[o[++d]] - u[o[++d]]; break;
                            case 83: u[o[++d]] = Array(o[++d]); u[o[++d]] = Array(o[++d]); break;
                            case 84: throw u[o[++d]];
                            case 85: u[o[++d]] = u[o[++d]].call(E); break;
                            case 86: u[o[++d]] = o[++d]; break;
                            case 87: u[o[++d]] = u[o[++d]].call(u[o[++d]]); break;
                            case 88: u[o[++d]] = u[o[++d]] >>> o[++d]; break;
                            case 89: u[o[++d]] = ly(u[o[++d]], u[o[++d]]); break;
                            case 90: { let reg = o[++d]; let idx = o[++d]; let src = o[++d]; if (u[reg] === undefined) u[reg] = {}; u[reg][idx] = u[src]; } break;
                            case 91: u[o[++d]] = u[o[++d]]; u[o[++d]] = u[o[++d]] < u[o[++d]]; d += u[o[++d]] ? o[++d] : o[++d, ++d]; break;
                            case 92: u[o[++d]][o[++d]] = u[o[++d]]; g = []; c = o[++d]; for (; c > 0; c--) { g.push(u[o[++d]]); } u[o[++d]] = n(d + o[++d], g, A, r, a); try { Object.defineProperty(u[o[d - 1]], "length", { value: o[++d], configurable: true, writable: false, enumerable: false }); } catch (e) {} break;
                            case 93: u[o[++d]] = u[o[++d]][o[++d]];
                        }
                    } catch (e) {
                        if (B.length > 0) traceStack = [];
                        l = e;
                        if (!traceStack) traceStack = [];
                        traceStack.push(d);
                        if (B.length === 0) throw a ? a(e, u, traceStack) : e;
                        d = B.pop();
                        traceStack.pop();
                    }
                }
            };
        }
        return n; 
    };
}();

// ==========================================
// 8. 执行逻辑
// ==========================================

const envProxy = new Proxy({
    get window() { return window; },
    get document() { return document; },
    get navigator() { return navigator; },
    get crypto() { return window.crypto; },
    get console() { return console; },
    get Date() { return Date; },
    get Array() { return Array; },
    get Object() { return Object; },
    get moduleQimei() { return QimeiMock; } 
}, {
    get: (t, p) => {
        if (p === 'moduleQimei') return QimeiMock;
        
        const val = t[p] || window[p] || global[p];
        if (val === undefined) {
             // 未知变量返回 undefined，不返回 Mock，防止检测
             return undefined;
        }
        return val;
    }
});

const rawMockConfig = {
    config: REAL_CONFIG_JSON,
    playerInstanceId: REAL_CONFIG_JSON.instanceId,
    logger: { log:()=>{}, error:console.error, warn:console.warn },
    tools: QimeiMock.tools,
    common: QimeiMock.tools,
    get: function(k) { 
        if (k === 'guid') return this.config.instanceId;
        if (k === 'appVer') return this.config.appVer || "3.5.57";
        let val = this.config[k];
        if (val !== undefined) return val;
        if (this.config.businessConfig) {
            val = this.config.businessConfig[k];
            if (val !== undefined) return val;
        }
        if (this.config.dynamicConfig) {
            val = this.config.dynamicConfig[k];
            if (val !== undefined) return val;
        }
        return undefined;
    }
};

const mockConfig = new Proxy(rawMockConfig, {
    get: (target, prop) => {
        if (prop in target) return target[prop];
        return UniversalMock;
    }
});

const input = { anc: "eyJyYyI6IkdxQ2xScU81TXZU" };

(async () => {
    try {
        console.log(`[-] 启动 VM...`);
        const runner = cy(OPCODE_JSON)(ENTRY_POINT, [], envProxy, {}, function(e){ return e; });
        
        console.log("[-] 开始执行...");
        const result = await runner.call(mockConfig, input);
        
        console.log("\n✅ 执行结束");
        console.log("🔥 Promise 返回结果:", JSON.stringify(result, null, 2));
        
        // 打印追踪日志
        if (!result) {
            console.log("\n[Trace Log - Last 50 Ops]");
            console.log(opLog.join("\n"));
        }

    } catch (e) {
        console.error("\n❌ 执行出错:", e);
    }
})();