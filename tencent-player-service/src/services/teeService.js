// src/services/teeService.js
const browserManager = require('../core/browser');
const envScript = require('../env/index');
// 注意：这里 require 进来的 rawCode 必须是原原本本的混淆代码字符串
const rawCode = require('../assets/superplayer'); 

class TeeService {
    constructor() {
        this.page = null;
        this.isReady = false;
        this.initPromise = null;
    }

    async init(vmUrl) {
        if (this.initPromise) return this.initPromise;

        this.initPromise = (async () => {
            try {
                this.page = await browserManager.newPage();
                
                // ============================================================
                // 【修复 2】访问本地服务页面，而不是 about:blank
                // ============================================================
                if (!vmUrl) {
                    throw new Error("VM URL is required for init");
                }
                await this.page.goto(vmUrl);

                // 1. 注入环境 (env/index.js)
                await this.page.evaluate(envScript);

                console.log(">>> [TEE] Injecting Obfuscated Code...");

                // ============================================================
                // 【修复 3】完全还原原代码的 Wrapper 执行逻辑
                // 不要使用 window.eval，而是通过闭包手动提供变量
                // ============================================================
                await this.page.evaluate((codeString) => {
    try {
        // 1. 强制绑定上下文变量
        var window = globalThis;
        var document = window.document;
        var navigator = window.navigator;
        
        // 2. 引入我们伪造的环境变量
        // 注意：必须确保 objects.js 已经运行并且 window.YS 存在
        var YS = window.YS;
        var RS = window.RS;
        var LS = window.LS;
        var EvtEmitter = window.EvtEmitter;

        // 3. 准备模块导出
        var module = { exports: {} };
        var exports = module.exports;

        console.log(">>> [VM] Starting eval...");

        // 4. 执行代码
        // 如果这里报错 undefined reading 'call'，通常是因为 YS 或其子属性为空
        eval(codeString);

        // 5. 捕获导出
        if (module.exports && (module.exports.TEE || Object.keys(module.exports).length > 0)) {
            console.log(">>> [VM] Export detected");
            Object.assign(window.LS.exports, module.exports);
        }
    } catch(e) {
        console.error(">>> [VM Error]", e);
        window.__VM_ERROR = e.stack || e.toString();
    }
}, rawCode);

                // 2. 检查是否有执行错误
                const vmError = await this.page.evaluate(() => window.__VM_ERROR);
                if (vmError) throw new Error("VM Execution Error: " + vmError);

                // 3. 执行 Hook (TEE.install)
                // 逻辑保持不变，因为环境已经准备好了
                const hookResult = await this.page.evaluate(() => {
                    return new Promise((resolve) => {
                        const TEE = window.LS.exports.TEE;
                        
                        if (!TEE) {
                            console.log("Debug LS:", window.LS);
                            resolve({ success: false, msg: "TEE not found in LS.exports" });
                            return;
                        }

                        // Hook 配置对象
                        const getinfoConfigSpy = new Proxy({}, {
                            set: function(target, prop, value) {
                                if (prop === 'responseModifier' && typeof value === 'function') {
                                    window.DECRYPT_FUNCTION = value;
                                }
                                target[prop] = value;
                                return true;
                            },
                            get: (t, p) => t[p]
                        });

                        const playerMock = window.createSafeProxy({
                            config: { 
                                instanceId: "inst_puppeteer", enableTEE: true, 
                                tvkConfig: {}, userConfig: {}, getinfoConfig: getinfoConfigSpy 
                            },
                            pluginMsg: new window.EvtEmitter(),
                            on: function() { return this; },
                            off: function() { return this; },
                            once: function() { return this; },
                            setCommonKv: ()=>{},
                            getCommonKv: ()=>"",
                            currentVideoElement: document.createElement('video')
                        }, "PlayerMock");

                        try {
                            TEE.install(playerMock);
                            setTimeout(() => {
                                if (window.DECRYPT_FUNCTION) {
                                    resolve({ success: true });
                                } else {
                                    resolve({ success: false, msg: "Install success but DECRYPT_FUNCTION missing" });
                                }
                            }, 500);
                        } catch(e) {
                            resolve({ success: false, msg: "Install Error: " + e.toString() });
                        }
                    });
                });

                if (hookResult.success) {
                    this.isReady = true;
                    console.log(">>> [TEE] Service Ready!");
                } else {
                    throw new Error(hookResult.msg);
                }

            } catch (e) {
                console.error(">>> [TEE] Fatal Error:", e);
                this.isReady = false;
                this.page = null; // 重置以便重试
                this.initPromise = null;
            }
        })();

        return this.initPromise;
    }

    async decrypt(payload) {
        if (!this.isReady) throw new Error("Service not ready");
        
        return await this.page.evaluate(async (data) => {
            if (!window.DECRYPT_FUNCTION) return { error: "Lost function" };
            try {
                const safeData = window.createSafeProxy(data, "ReqData");
                const res = await window.DECRYPT_FUNCTION(safeData);
                return { success: true, data: res };
            } catch(e) { return { error: e.toString() }; }
        }, payload);
    }
}

module.exports = new TeeService();