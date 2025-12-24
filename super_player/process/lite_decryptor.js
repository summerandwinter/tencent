const fs = require('fs');
const path = require('path');
const vm = require('vm');

// --- 0. 全局异常静默 (针对 Node 22) ---
process.on('unhandledRejection', (reason) => {
    // 忽略脚本内部探测产生的异步错误
});

// --- 1. 增强型环境追踪代理 ---
function createDebugProxy(name, target) {
    return new Proxy(target, {
        get(t, prop, receiver) {
            const val = Reflect.get(t, prop, receiver);
            const propStr = String(prop);
            const blacklist = ['Symbol(Symbol.toPrimitive)', 'valueOf', 'toString', 'prototype', 'constructor', 'length', '__MY_DECRYPT__', 'JSON'];
            
            if (typeof prop === 'string' && !blacklist.includes(propStr)) {
                if (val === undefined) {
                    console.log(`\x1b[31m[DEBUG MISSING]\x1b[0m ${name}.${propStr}`);
                }
            }
            if (typeof val === 'function') {
                if (val.prototype && propStr[0] === propStr[0].toUpperCase()) return val;
                try { return val.bind(t); } catch(e) { return val; }
            }
            return val;
        }
    });
}

// --- 2. 构造“超高分”浏览器环境 ---
const makeAdvancedEnv = () => {
    const storage = {};
    const noop = () => {};
    const promiseNoop = () => Promise.resolve();

    const createNode = (tag = 'div') => ({
        style: {}, dataset: {},
        classList: { add: noop, remove: noop, contains: () => false, toggle: noop },
        appendChild: (n) => n, append: function(...args) { return args[0]; },
        removeChild: noop, insertBefore: (n) => n,
        setAttribute: function(k, v) { this[k] = v; }, 
        getAttribute: (k) => this[k] || '', 
        removeAttribute: noop, addEventListener: noop, removeEventListener: noop,
        nodeType: 1, tagName: tag.toUpperCase(),
        querySelector: () => createNode(), querySelectorAll: () => [],
        getBoundingClientRect: () => ({ width: 1280, height: 720, top: 0, left: 0 }),
        canPlayType: () => 'probably',
        play: promiseNoop, readyState: 4
    });

    const mockGL = {
        getParameter: (p) => (p === 37446 ? "ANGLE (NVIDIA GeForce RTX 4090 Direct3D11)" : "Google Inc. (NVIDIA)"),
        getShaderPrecisionFormat: () => ({ precision: 23, rangeMin: 127, rangeMax: 127 }),
        getExtension: () => ({})
    };

    // 核心沙箱对象
    const env = {
        // 显式导出原生构造函数
        Object, Array, Function, String, Number, Boolean, RegExp, Date, Math, 
        Proxy, Promise, Reflect, Symbol, Error, TypeError, JSON, URL,
        Map, Set, WeakMap, WeakSet, 
        Uint8Array, Uint16Array, Uint32Array, Int8Array, Int16Array, Int32Array, 
        Float32Array, Float64Array, ArrayBuffer, DataView, 
        WebAssembly, Atomics: global.Atomics, 
        TextEncoder, TextDecoder, decodeURIComponent, encodeURIComponent,
        parseInt, parseFloat, isNaN, isFinite, NaN: global.NaN, Infinity: global.Infinity,
        
        // --- 核心修复：补齐现代 API ---
        structuredClone: (obj) => JSON.parse(JSON.stringify(obj)),
        globalThis: null, // 稍后指向自身

        // --- 核心修复：彻底封死 Node 特征，强制脚本进入“浏览器模式” ---
        module: undefined,
        require: undefined,
        exports: undefined,
        global: undefined,
        // 伪装浏览器 process
        process: { browser: true, env: { NODE_ENV: 'production' }, nextTick: (fn) => Promise.resolve().then(fn) },

        console,
        window: null, self: null, top: null, parent: null,
        
        chrome: { runtime: {}, loadTimes: noop, csi: noop, app: {} },
        
        addEventListener: noop,
        removeEventListener: noop,
        setTimeout, setInterval, clearTimeout, clearInterval,
        atob: (s) => Buffer.from(s, 'base64').toString('binary'),
        btoa: (s) => Buffer.from(s, 'binary').toString('base64'),
        performance: { now: () => Date.now(), timing: { navigationStart: Date.now() } },
        requestAnimationFrame: (cb) => setTimeout(cb, 16),
        getComputedStyle: () => ({ getPropertyValue: () => "0", width: "1280px", height: "720px", display: "block" }),

        navigator: {
            userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            webdriver: false,
            onLine: true,
            languages: ['zh-CN', 'zh'],
            plugins: { length: 3, 0: {name:'Chrome PDF'}, 1: {name:'Native Client'} }
        },
        document: {
            createElement: (tag) => {
                if (tag === 'canvas') return { getContext: () => mockGL, style: {}, toDataURL: () => "" };
                return createNode(tag);
            },
            createTextNode: (t) => ({ nodeValue: t }),
            getElementById: () => createNode(),
            getElementsByTagName: (t) => t === 'head' ? [createNode('head')] : [createNode(t)],
            querySelector: () => createNode(),
            querySelectorAll: () => [],
            body: null, documentElement: null, head: null,
            cookie: "", visibilityState: "visible", addEventListener: noop, removeEventListener: noop
        },
        location: { href: "https://v.qq.com/", hostname: "v.qq.com", protocol: "https:", search: "" },
        localStorage: { getItem: k => storage[k] || null, setItem: (k, v) => storage[k] = v },
        screen: { width: 1920, height: 1080, colorDepth: 24 },
        Image: class { set src(v) {} },
        XMLHttpRequest: class {
            constructor() { this.readyState = 0; this.status = 0; }
            open() {} setRequestHeader() {} getAllResponseHeaders() { return ""; }
            send() {
                // 模拟成功的 9.2 加密响应
                const mockRes = JSON.stringify({ 
                    em: 0, exem: 0, s: "o", vinfo: "{}", 
                    anc: "dHVtYnA=", // 这里是激活解密的关键
                    vl: { vi: [{ ul: { ui: [{ url: "http://v.com", vt: 0 }] } }] } 
                });
                setTimeout(() => {
                    Object.defineProperties(this, {
                        readyState: { value: 4 }, status: { value: 200 },
                        response: { value: mockRes }, responseText: { value: mockRes }
                    });
                    if (this.onreadystatechange) this.onreadystatechange();
                    if (this.onload) this.onload();
                }, 50);
            }
        },
        // 占位类
        PlayInfoConfig: class {}, H5PlayParam: class {}, IPlayParam: class {}, RetryConfig: class {}, 
        PlayItem: class {}, IH5PlayerConfig: class {}, PluginConfig: class {}, 
        IPluginOption: class {}, IVideoInfo: class {}, IVideoElement: class {}, 
        IVideoError: class {}, IUrlConfig: class {}, Partial: class {}, 
        IPlayerConfig: class {}, ReqParams: class {}, MiddleWareCtx: class {}, 
        ReqInfoOutputData: class {}, SuppressedError: Error
    };

    env.document.body = createNode('body');
    env.document.documentElement = createNode('html');
    env.document.head = createNode('head');
    
    // 闭环别名
    env.window = env; env.self = env; env.top = env; env.parent = env; env.globalThis = env;
    env.frames = env;
    
    return env;
};

class LiteDecryptor {
    constructor() {
        this.capturedFn = null;
        this.sandbox = makeAdvancedEnv();
        this.context = vm.createContext(createDebugProxy('window', this.sandbox));
    }

    async init() {
        console.log("正在加载环境并提取解密函数...");

        // 劫持赋值瞬间
        const codePrefix = `
            const _orgDefine = Object.defineProperty;
            _orgDefine(Object.prototype, 'responseModifier', {
                set: function(val) {
                    if (typeof val === 'function' && !global.__MY_DECRYPT__) {
                        global.__MY_DECRYPT__ = val;
                        console.log('\\x1b[32m%s\\x1b[0m', '>>> [Hook Success] 成功捕获 9.2 解密函数');
                        try {
                            _orgDefine(this, 'responseModifier', { value: val, writable: false, configurable: true });
                        } catch(e){}
                    }
                    this._rm_val = val;
                },
                get: function() { return this._rm_val; },
                configurable: true
            });
        `;

        const scriptContent = fs.readFileSync(path.resolve(__dirname, './superplayer-txv.js'), 'utf-8');
        
        try {
            vm.runInContext(codePrefix, this.context);
            vm.runInContext(scriptContent, this.context);

            // 诱导 9.2 分支：手动注入最高评分，绕过硬件检测
            vm.runInContext(`
                const H5 = window.ThumbPlayerH5 || window.SuperPlayer;
                if (H5 && H5.utils) {
                    H5.utils.isHardwareAccelerated = () => true;
                    H5.utils.supportWasmKernel = () => true;
                    H5.utils.supportHevc = () => true;
                }
                if (H5 && H5.createH5Player) {
                    const player = H5.createH5Player({
                        container: document.createElement('div'),
                        videoId: 'x0044ibkr4p', 
                        enableTVK: true
                    });
                    // 调用播放会触发 XHR Mock，进而触发解密闭包生成
                    player.play().catch(() => {});
                }
            `, this.context);

        } catch (e) {
            console.log(`\x1b[35m[Runtime Error]\x1b[0m ${e.message}`);
        }

        // 轮询获取
        for (let i = 0; i < 50; i++) {
            this.capturedFn = this.sandbox.__MY_DECRYPT__;
            if (this.capturedFn) break;
            await new Promise(r => setTimeout(r, 200));
        }

        if (!this.capturedFn) {
            throw new Error("捕获超时。提示：脚本未能走到 9.2 解密逻辑。");
        }
        console.log(">>> 解密引擎就绪");
    }

    async decrypt(data) {
        if (!this.capturedFn) throw new Error("Decrypt function not ready");
        if (data && data.anc) data.anc = data.anc.replace(/\s/g, '');
        return await this.capturedFn(data);
    }
}

// --- 执行测试 ---
(async () => {
    const engine = new LiteDecryptor();
    try {
        await engine.init();
        const result = await engine.decrypt({
            "anc": "在此粘贴真实的 anc 密文串",
            "v": "1001", "st": 0, "tm": Date.now().toString().slice(0, 10)
        });
        console.log("解密结果内容:", result);
    } catch (err) {
        console.error("执行过程失败:", err.message);
    }
})();