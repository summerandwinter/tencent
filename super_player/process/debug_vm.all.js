(function() {
    // 防止页面跳转或重载清空控制台
    // console.clear = () => {}; 
    console.log("%c>>> 初始化虚拟环境 (v49 Iframe沙箱版)...", "color: #00ff00; font-size: 16px; font-weight: bold;");

    // 1. 创建干净的沙箱 iframe
    const sandboxId = 'txv_vm_sandbox';
    let iframe = document.getElementById(sandboxId);
    if (iframe) iframe.remove();
    
    iframe = document.createElement('iframe');
    iframe.id = sandboxId;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const win = iframe.contentWindow;
    const doc = iframe.contentDocument;

    // 2. 在沙箱内初始化环境 (所有变量定义在沙箱内，与外部绝缘)
    const initScript = doc.createElement('script');
    initScript.textContent = `
    (function() {
        console.log(">>> 沙箱启动中...");
        
        // --- 基础工具 ---
        const maskStorage = {};
        const TPBase64 = {
            toUint8Array: (str, key) => {
                let o = String(str).replace(/=/g, "").replace(/-/g, "+").replace(/_/g, "/");
                if (key && maskStorage[key]) {
                    const k = maskStorage[key].split("");
                    const n = o.split("");
                    o = n.map((e, t) => String.fromCharCode(e.charCodeAt(0) ^ k[t].charCodeAt(0))).join("");
                }
                try {
                    const raw = window.atob(o.replace(/=/g, ""));
                    const bytes = new Uint8Array(raw.length);
                    for(let i=0; i<raw.length; i++) bytes[i] = raw.charCodeAt(i);
                    return bytes;
                } catch(e) { return new Uint8Array([]); }
            },
            fromUint8Array: (arr) => {
                let s = "";
                for(let i=0; i<arr.length; i++) s += String.fromCharCode(arr[i]);
                return window.btoa(s);
            },
            toUTF8: (str) => {
                try { return decodeURIComponent(escape(window.atob(str))); } catch(e) { return str; }
            }
        };
        
        const TPHex = {
            encode: (s) => s.split("").map(c=>c.charCodeAt(0).toString(16).padStart(2,'0')).join(""),
            toUint8Array: (s) => new Uint8Array(s.match(/.{1,2}/g)?.map(byte => parseInt(byte, 16)) || []),
            fromUint8Array: (arr) => Array.from(arr).map(b => b.toString(16).padStart(2,'0')).join('')
        };

        const TPUTF16 = {
            toUint16Array: (e) => { var t = new Uint16Array(e.length); for(var o=0;o<e.length;o++)t[o]=e.charCodeAt(o); return t; },
            fromUint16Array: (e) => String.fromCharCode.apply(null, new Uint16Array(e)),
            fromTypeArray: (e) => String.fromCharCode.apply(null, new Uint16Array(e.buffer))
        };

        const TPUTF8 = {
            toUint8Array: (s) => new TextEncoder().encode(s),
            fromUint8Array: (b) => new TextDecoder().decode(b)
        };

        // --- YS 框架 ---
        class Logger { constructor() {} cacheLog() {} log() {} info() {} warn() {} error() {} static timeStart() {} static timeEnd() { return {}; } }
        class EvtEmitter { constructor() { this.e={}; } on() { return this; } off() { return this; } emit() { return this; } removeAllListeners() {} }
        class ErrorBase extends Error { constructor(type, config) { super(config?.message||""); this.type=type; this.code=config?.code; } }

        const CommonImpl = {
            isObject: (e) => typeof e === 'object' && e !== null,
            cloneDeep: (e) => JSON.parse(JSON.stringify(e||{})),
            merge: (a, b) => Object.assign(a||{}, b),
            createGUID: (l=32) => "guid_" + Date.now(),
            compareVersion: () => 0
        };

        window.YS = {
            Logger, EvtEmitter, ErrorBase, 
            encodingTool: { setMask: (k, v) => maskStorage[k] = v, base64: TPBase64, hex: TPHex, utf8: TPUTF8, utf16: TPUTF16 },
            stringTool: { base64ToUint8Array: TPBase64.toUint8Array, arrayBufferToBase64: TPBase64.fromUint8Array, stringToArray: TPUTF16.toUint16Array, arrayToString: TPUTF16.fromUint16Array },
            lsTool: { getData: (k)=>null, setData: (k,v)=>{}, delData: (k)=>{} },
            commonTool: CommonImpl, objTool: CommonImpl,
            hashTool: { md5: () => "00000000000000000000000000000000" },
            jsonTool: { safelyStringify: JSON.stringify, safelyParse: JSON.parse },
            uaTool: { browser: { chrome: true }, os: { windows: true }, mobile: false, deviceType: "pc", getUaDataString: ()=>"" },
            videoTool: { isEncryptionSupported: ()=>Promise.resolve(false), isWasmSupported: ()=>true, isHardwareAccelerated: () => true, collectGPUInfo: () => ({ renderer: "MockGPU", vendor: "MockVendor" }) },
            netTool: { xhr: ()=>Promise.resolve({}), jsonp: ()=>Promise.resolve({}) },
            domTool: { createDom: ()=>document.createElement("div"), css:()=>{}, attr:()=>{} },
            urlTool: { getUrlParamByKey: ()=>null }
        };
        window.YS.utils = window.YS;

        window.RS = {
            H5_PLAY_EVENT: { VIDEO_PLAYING: "VIDEO_PLAYING", PLAY_SESSION_START: "PLAY_SESSION_START" },
            H5_EXT_EVENT: { GETINFO_OVER: "GETINFO_OVER" },
            VIDEO_STATE: { IDLE: "idle" }, ErrorCode: { SUC: "0" }, KERNEL_NAME: { ORIGIN: "origin" }
        };

        // --- 核心 LS 保护 ---
        // 使用 defineProperty 锁死 LS，防止被 var LS = ... 覆盖
        const _LS = { exports: {} };
        Object.defineProperty(window, 'LS', {
            get: () => _LS,
            set: (v) => { console.warn("拦截到尝试覆盖 LS 的操作"); },
            configurable: false,
            enumerable: true
        });

        // --- 僵尸对象保护 (防止 undefined.call) ---
        // 劫持 Object.prototype.toString 等关键方法
        const _toString = Object.prototype.toString;
        Object.prototype.toString = function() {
            if (this === undefined) return "[object Undefined]";
            if (this === null) return "[object Null]";
            return _toString.call(this);
        };

    })();
    `;
    doc.head.appendChild(initScript);

    // 3. 注入用户 VM 代码
    const userScript = doc.createElement('script');
    // 使用 try-catch 包裹用户的代码
    userScript.textContent = `
    try {
        // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
        // 【请在这里粘贴 VM 代码】
        // ⚠️ 务必删除或注释掉代码开头的 var LS = ... ;
        
        
        
        // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    } catch(e) {
        console.error("沙箱内 VM 执行报错:", e);
    }
    `;
    doc.body.appendChild(userScript);

    // 4. 注入捕获与桥接逻辑
    const bridgeScript = doc.createElement('script');
    bridgeScript.textContent = `
    (function() {
        console.log(">>> 启动捕获逻辑...");
        
        // 检查 TEE 是否存在
        const TEE = window.LS.exports.TEE;
        if (!TEE) {
            console.error("❌ 无法找到 TEE 模块，请检查代码粘贴是否正确 (是否删除了 var LS = ...)");
            return;
        }

        const getinfoConfigSpy = {};
        
        // 捕获 contextModifier
        Object.defineProperty(getinfoConfigSpy, 'contextModifier', {
            set: (val) => {
                if (typeof val === 'function') {
                    console.log("%c🔥🔥🔥 contextModifier 捕获成功！🔥🔥🔥", "color: red; font-size: 20px; font-weight: bold;");
                    
                    // 将核心生成函数挂载到沙箱 window
                    window._GEN_FUNC = val;
                    // 通知主窗口
                    window.parent.postMessage({ type: 'CKEY_READY' }, '*');
                }
            }
        });

        // 模拟 Player 环境以触发安装
        const playerMock = {
            config: { 
                instanceId: "inst_vm_sandbox", 
                enableTEE: true, 
                tvkConfig: {}, 
                userConfig: {}, 
                getinfoConfig: getinfoConfigSpy 
            },
            pluginMsg: { on:()=>{}, emit:()=>{}, off:()=>{}, removeAllListeners:()=>{} },
            on: function() { return this; },
            off: function() { return this; },
            once: function() { return this; },
            setCommonKv: ()=>{}, getCommonKv: ()=>"", setStateKv: ()=>{}, 
            currentVideoElement: { style: { removeProperty: () => {}, setProperty: () => {} } }
        };

        try { 
            TEE.install(playerMock); 
        } catch(e) { 
            console.error("Install 报错:", e); 
        }
    })();
    `;
    doc.body.appendChild(bridgeScript);

    // 5. 主窗口注册调用接口
    window.ckey = function(params = {}) {
        return new Promise((resolve, reject) => {
            const sandboxWin = document.getElementById(sandboxId).contentWindow;
            
            if (!sandboxWin || !sandboxWin._GEN_FUNC) {
                reject("生成器尚未就绪或捕获失败");
                return;
            }

            // 构造参数 (在沙箱内构造，防止原型链污染)
            // 我们不能直接传对象进沙箱，因为不同 window 的对象原型不同
            // 这里我们动态在沙箱内执行调用
            
            const reqData = {
                vid: params.vid || "t0000000000",
                tm: Math.floor(Date.now() / 1000).toString(),
                appVer: params.appVer || "3.5.57",
                guid: params.guid || "mock_guid",
                platform: params.platform || "10201",
                cKey: "", 
                encryptVer: "9.1"
            };
            
            // 构造沙箱内的 Context 对象
            sandboxWin.currentReqParams = reqData;
            
            // 在沙箱内执行函数
            sandboxWin.eval(\`
                (function() {
                    const ctx = {
                        playerInstanceId: "inst_call",
                        config: { enableTEE: true, isOfficialSite: true, tvkConfig: {}, businessConfig: { platform: '${reqData.platform}' } },
                        businessData: { h38: "", q36: "" },
                        reqParams: window.currentReqParams
                    };
                    
                    window._GEN_FUNC(ctx).then(res => {
                        window.parent.postMessage({ type: 'CKEY_RESULT', payload: res?.cKey || window.currentReqParams.cKey }, '*');
                    }).catch(err => {
                        console.error("生成失败", err);
                    });
                })()
            \`);

            // 监听一次性结果
            const handler = (event) => {
                if (event.data && event.data.type === 'CKEY_RESULT') {
                    window.removeEventListener('message', handler);
                    const result = event.data.payload;
                    if (result && result.startsWith('5wEY')) {
                        console.log("%c✅ CKey:", "color: green; font-weight: bold;", result);
                        resolve(result);
                    } else if(result) {
                         console.log("%c✅ CKey (非标准头):", "color: green;", result);
                         resolve(result);
                    } else {
                        reject("生成结果为空");
                    }
                }
            };
            window.addEventListener('message', handler);
        });
    };

    // 监听就绪信号
    window.addEventListener('message', (e) => {
        if (e.data && e.data.type === 'CKEY_READY') {
            console.log("%c✅ 沙箱环境就绪，可以调用 window.ckey({...}) 了", "color: green; font-size: 14px;");
            console.log("示例: window.ckey({ vid: 'x0012345678', guid: 'your_guid' })");
        }
    });

})();