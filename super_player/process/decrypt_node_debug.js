const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

// --- 1. Node 22 异常保护 ---
process.on('unhandledRejection', (reason) => {
    // 捕获脚本内部环境不匹配导致的 Promise 拒绝，防止进程退出
    if (reason) console.log(`[Promise Ignored] ${reason}`);
});

// --- 2. 环境追踪代理 (核心调试逻辑) ---
function createTraceProxy(name, target) {
    return new Proxy(target, {
        get(t, prop, receiver) {
            const val = Reflect.get(t, prop, receiver);
            // 排除掉一些高频噪音
            const noise = ['undefined', 'toString', 'valueOf', 'Symbol.toPrimitive', 'prototype', 'constructor'];
            if (!noise.includes(String(prop))) {
                console.log(`[DEBUG TRACE] ${name}.${String(prop)} accessed -> (${typeof val})`);
            }
            // 自动绑定函数，防止出现 "Illegal invocation"
            if (typeof val === 'function') {
                return val.bind(t);
            }
            return val;
        }
    });
}

// --- 3. 构建 JSDOM ---
const dom = new JSDOM(`<!DOCTYPE html><html><body><div id="container"></div></body></html>`, {
    url: "https://v.qq.com/x/cover/mzc00200lplzzrd/x0044ibkr4p.html",
    referrer: "https://v.qq.com/",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    runScripts: "dangerously"
});
const { window } = dom;

// --- 4. 模拟硬件特征 (激活 9.2 逻辑的关键) ---
const { createCanvas } = require('canvas');
const mockCanvas = createCanvas(400, 300);
const mockGL = {
    getParameter: (p) => {
        if (p === 37445) return 'Google Inc. (NVIDIA)'; // VENDOR
        if (p === 37446) return 'ANGLE (NVIDIA, NVIDIA GeForce RTX 3080 Direct3D11 vs_5_0 ps_5_0, D3D11)'; // RENDERER
        return "";
    },
    getExtension: () => ({ UNMASKED_VENDOR_WEBGL: 37445, UNMASKED_RENDERER_WEBGL: 37446 }),
    getShaderPrecisionFormat: () => ({ precision: 23, rangeMin: 127, rangeMax: 127 }),
    clearColor: () => {}, createShader: () => ({}), createProgram: () => ({}),
    linkProgram: () => {}, useProgram: () => {}, bindBuffer: () => {},
    createBuffer: () => ({}), bufferData: () => {}, getAttribLocation: () => 0,
};

// --- 5. 构造沙箱上下文 ---
const rawContext = {
    window,
    document: window.document,
    navigator: window.navigator,
    location: window.location,
    history: window.history,
    screen: { width: 1920, height: 1080, availWidth: 1920, availHeight: 1040, colorDepth: 24 },
    performance: window.performance,
    setTimeout, setInterval, clearTimeout, clearInterval,
    requestAnimationFrame: (cb) => setTimeout(cb, 16),
    getComputedStyle: window.getComputedStyle.bind(window),
    Image: class { set src(v) {} get src() { return "" } },
    atob: (str) => Buffer.from(str, 'base64').toString('binary'),
    btoa: (str) => Buffer.from(str, 'binary').toString('base64'),
    WebAssembly, TextEncoder, TextDecoder,
    Object, Array, String, Math, Date, RegExp, Uint8Array, Uint32Array, ArrayBuffer, DataView, Promise,
    console,
    process: { nextTick: (fn) => Promise.resolve().then(fn), browser: true, env: {} }
};

// 开启全量追踪
const context = {
    ...rawContext,
    window: createTraceProxy('window', rawContext.window),
    navigator: createTraceProxy('navigator', rawContext.navigator),
    document: createTraceProxy('document', rawContext.document),
};
context.self = context.window;
context.require = undefined; // 禁用 Node 特征

// 模拟 WebGL 注入
window.document.createElement = ((original) => function(tag) {
    const el = original.call(window.document, tag);
    if (tag === 'canvas') {
        el.getContext = (type) => type.includes('webgl') ? mockGL : mockCanvas.getContext('2d');
    }
    return el;
})(window.document.createElement);

// 模拟 XMLHttp 诱导响应
context.XMLHttpRequest = class {
    constructor() { this.readyState = 0; this.status = 0; this.onload = null; }
    open() {} setRequestHeader() {} getAllResponseHeaders() { return ""; }
    send() {
        const mockRes = JSON.stringify({ em: 0, exem: 0, s: "o", vinfo: "{}", anc: "dHVtYnA=" });
        setTimeout(() => {
            Object.defineProperties(this, {
                readyState: { value: 4 }, status: { value: 200 },
                response: { value: mockRes }, responseText: { value: mockRes }
            });
            if (this.onreadystatechange) this.onreadystatechange();
            if (this.onload) this.onload();
        }, 50);
    }
};

// --- 6. 劫持 responseModifier ---
context.__CAPTURED_FN__ = null;
const orgDefineProperty = Object.defineProperty;

Object.defineProperty(context.Object.prototype, 'responseModifier', {
    set: function(val) {
        if (typeof val === 'function' && !context.__CAPTURED_FN__) {
            context.__CAPTURED_FN__ = val;
            console.log("\x1b[32m%s\x1b[0m", ">>> [Hook Success] 已截获解密闭包函数！");
            orgDefineProperty(this, 'responseModifier', { value: val, writable: false });
        }
        this._rm = val;
    },
    get: function() { return this._rm; },
    configurable: true
});

// --- 7. 执行脚本 ---
console.log("正在加载脚本并开启环境追踪...");
vm.createContext(context);
const scriptContent = fs.readFileSync(path.resolve(__dirname, './superplayer-1.57.5.js'), 'utf-8');

try {
    vm.runInContext(scriptContent, context);
    const H5 = context.window.ThumbPlayerH5 || context.window.SuperPlayer;
    if (H5) {
        console.log("初始化播放器实例并诱导...");
        const player = H5.createH5Player({
            container: context.document.getElementById('container'),
            videoId: 'x0044ibkr4p', 
            enableTVK: true
        });
        player.play().catch(() => {});
    }
} catch (e) {
    console.log("[Runtime Error Logged]", e.message);
}

// --- 8. 解密接口与测试 ---
async function decrypt(data) {
    if (!context.__CAPTURED_FN__) throw new Error("解密函数未生成");
    if (data.anc) data.anc = data.anc.replace(/\s/g, '');
    return await context.__CAPTURED_FN__(data);
}

setTimeout(async () => {
    if (context.__CAPTURED_FN__) {
        console.log("=== 开始执行测试数据解密 ===");
        try {
            const result = await decrypt({
                "anc": "在此粘贴长加密字符串",
                "v": "1001", "st": 0, "tm": Math.floor(Date.now()/1000).toString()
            });
            console.log("解密明文:", result);
        } catch (e) { console.error("解密失败:", e.message); }
    } else {
        console.error("\x1b[31m%s\x1b[0m", "捕获失败。请查阅上方的 [DEBUG TRACE] 日志，看看哪个属性返回了非预期值。");
    }
}, 12000);