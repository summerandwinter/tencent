module.exports = `
(() => {
    // 1. 准备导出容器
    window.LS = { exports: {} };
    window.my_module = { exports: {} };

    // 2. YS & RS 构建
    class Logger { constructor() {} cacheLog() {} log() {} info() {} warn() {} error() {} static timeStart() {} static timeEnd() { return {}; } }
    class EvtEmitter { constructor() { this.e={}; } on() { return this; } off() { return this; } emit() { return this; } removeAllListeners() {} }
    class ErrorBase extends Error { constructor(t, c){super(c?.message); this.code=c?.code;} toJSON(){return {code:this.code}} }

    const { TPBase64, TPHex, TPUTF16, TPUTF8 } = window.EnvCrypto;

    const YS_Raw = {
        Logger: Logger, EvtEmitter: EvtEmitter, ErrorBase: ErrorBase,
        encodingTool: { setMask: (k, v) => window.maskStorage[k] = v, base64: TPBase64, hex: TPHex, utf8: TPUTF8, utf16: TPUTF16 },
        stringTool: { base64ToUint8Array: TPBase64.toUint8Array, arrayBufferToBase64: TPBase64.fromUint8Array, stringToArray: TPUTF16.toUint16Array, arrayToString: TPUTF16.fromUint16Array },
        lsTool: { getData: ()=>null, setData: ()=>{}, delData: ()=>{} },
        commonTool: { isObject: ()=>true, cloneDeep: o=>JSON.parse(JSON.stringify(o||{})), merge: (a,b)=>Object.assign(a,b), createGUID: ()=>"guid" },
        uaTool: { browser: { chrome: true }, os: { windows: true }, mobile: false, deviceType: "pc", getUaDataString: ()=>"" },
        videoTool: { isEncryptionSupported: ()=>Promise.resolve(false), isWasmSupported: ()=>true, isHardwareAccelerated: ()=>true, collectGPUInfo: ()=>({renderer:"ChromeGPU"}) },
        netTool: { xhr: ()=>Promise.resolve({}), jsonp: ()=>Promise.resolve({}) },
        domTool: { createDom: ()=>document.createElement("div"), css:()=>{}, attr:()=>{} },
        urlTool: { getUrlParamByKey: ()=>null },
        hashTool: { md5: () => "00000000000000000000000000000000" },
        jsonTool: { safelyStringify: JSON.stringify, safelyParse: JSON.parse },
        ErrorTypeCodeMap: { native: 11 }, DrmKeySystems: { Widevine: "com.widevine.alpha" }
    };
    
    // 【关键】自引用，混淆代码中经常调用 YS.utils.xxx
    YS_Raw.utils = YS_Raw;

    window.YS = window.createSafeProxy(YS_Raw, "YS");
    
    window.RS = new Proxy({
        H5_PLAY_EVENT: { VIDEO_PLAYING: "VIDEO_PLAYING", PLAY_SESSION_START: "PLAY_SESSION_START" },
        H5_EXT_EVENT: { GETINFO_OVER: "GETINFO_OVER" },
        VIDEO_STATE: { IDLE: "idle" }, ErrorCode: { SUC: "0" }, KERNEL_NAME: { ORIGIN: "origin" }
    }, { get: (t, p) => Reflect.has(t, p) ? t[p] : (typeof p==='string'&&p===p.toUpperCase()?p:window.createRecursiveVoid(\`RS\`)) });

    window.EvtEmitter = EvtEmitter;
})();
`;