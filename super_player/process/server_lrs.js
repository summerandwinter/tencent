const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
// 加密数据通常很大，设置 10mb 限制
app.use(bodyParser.json({ limit: '10mb' }));

class TeeService {
    constructor() {
        this.browser = null;
        this.page = null;
        this.isReady = false;
    }

    async init() {
        console.log("正在启动浏览器...");
        this.browser = await puppeteer.launch({
            headless: "new",
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security'
            ]
        });
        this.page = await this.browser.newPage();
        // 设置控制台日志监听
        this.page.on('console', msg => {
            const type = msg.type();
            const text = msg.text();
            switch (type) {
                // case 'log':
                //     console.log('[Browser]', text);
                //     break;
                // case 'error':
                //     console.error('[Browser]', text);
                //     break;
                case 'warn':
                    console.warn('[Browser]', text);
                    break;
                // case 'info':
                //     console.info('[Browser]', text);
                //     break;
                // default:
                //     console.log('[Browser]', text);
            }
        });
        console.log('>>> [Core] Console logging enabled');
        // 1. 注入你测试成功的劫持逻辑
        await this.page.evaluateOnNewDocument(() => {
            window.__CAPTURED_CONTEXT_MODIFIER__ = null;
            window.__CAPTURED_REQUEST_SETUP__ = null;
            window.__CAPTURED_RESPONSE_SETUP__ = null;
            window.__CAPTURED_RESPONSE_MODIFIER__ = null;
            const contextModifierTrap = {
                set: function (val) {

                    if (typeof val === 'function' && !window.__CAPTURED_CONTEXT_MODIFIER__) {
                        window.__CAPTURED_CONTEXT_MODIFIER__ = val;
                        console.warn('>>> [Puppeteer Hook] 捕获到函数 [contextModifier]');
                        try {
                            Object.defineProperty(this, 'contextModifier', {
                                value: val,
                                writable: false,
                                configurable: true
                            });
                        } catch (e) { }
                    }
                    this._raw_modifier = val;
                },
                get: function () { return this._raw_modifier; },
                configurable: true
            };
            const licenseRequestSetupTrap = {
                set: function (val) {
                    if (typeof val === 'function' && !window.__CAPTURED_REQUEST_SETUP__) {
                        window.__CAPTURED_REQUEST_SETUP__ = val;
                        console.warn('>>> [Puppeteer Hook] 捕获到函数 [licenseRequestSetup]');
                        try {
                            Object.defineProperty(this, 'licenseRequestSetup', {
                                value: val,
                                writable: false,
                                configurable: true
                            });
                        } catch (e) { }
                    }

                    this._raw_modifier = val;
                },
                get: function () { return this._raw_modifier; },
                configurable: true
            };
            const licenseResponseSetupTrap = {
                set: function (val) {

                    if (typeof val === 'function' && !window.__CAPTURED_RESPONSE_SETUP__) {
                        window.__CAPTURED_RESPONSE_SETUP__ = val;
                        console.warn('>>> [Puppeteer Hook] 捕获到函数 [licenseResponseSetup]');
                        try {
                            Object.defineProperty(this, 'licenseResponseSetup', {
                                value: val,
                                writable: false,
                                configurable: true
                            });
                        } catch (e) { }
                    }

                    this._raw_modifier = val;
                },
                get: function () { return this._raw_modifier; },
                configurable: true
            };
            const responseModifierTrap = {
                set: function (val) {

                    if (typeof val === 'function' && !window.__CAPTURED_RESPONSE_MODIFIER__) {
                        window.__CAPTURED_RESPONSE_MODIFIER__ = val;
                        console.warn('>>> [Puppeteer Hook] 捕获到解密函数 [responseModifier]');
                        try {
                            Object.defineProperty(this, 'responseModifier', {
                                value: val,
                                writable: false,
                                configurable: true
                            });
                        } catch (e) { }
                    }
                    this._raw_modifier = val;
                },
                get: function () { return this._raw_modifier; },
                configurable: true
            };
            Object.defineProperty(Object.prototype, 'licenseRequestSetup', licenseRequestSetupTrap);
            Object.defineProperty(Object.prototype, 'licenseResponseSetup', licenseResponseSetupTrap);
            Object.defineProperty(Object.prototype, 'responseModifier', responseModifierTrap);
            Object.defineProperty(Object.prototype, 'contextModifier', contextModifierTrap);
            window.onbeforeunload = () => false;
        });

        await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        // 2. 加载视频页
        const videoUrl = 'https://v.qq.com/x/cover/vqeduf4egjyrc8w/t001392icot.html';
        console.log("正在加载视频页并提取解密闭包...");

        await this.page.goto(videoUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

        // 3. 强制诱导（切换清晰度）
        await this.page.evaluate(async () => {
            const H5 = window.ThumbPlayerH5 || window.SuperPlayer;
            const instances = H5?.instancesMap || {};
            const player = Object.values(instances)[0];
            if (player) {
                const levels = player.getCommonKv('player_currentDefnList') || [];
                if (levels.length > 1) {
                    const target = levels[levels.length - 1].value;
                    player.setLevel(target);
                }
            }
        });

        // 4. 等待捕获完成
        try {
            await this.page.waitForFunction(() => typeof window.__CAPTURED_CONTEXT_MODIFIER__ === 'function', { timeout: 30000 });
            await this.page.waitForFunction(() => typeof window.__CAPTURED_RESPONSE_MODIFIER__ === 'function', { timeout: 30000 });

            await this.page.waitForFunction(() => typeof window.__CAPTURED_REQUEST_SETUP__ === 'function', { timeout: 30000 });
            await this.page.waitForFunction(() => typeof window.__CAPTURED_RESPONSE_SETUP__ === 'function', { timeout: 30000 });

            this.isReady = true;
            console.log("=== 解密服务已就绪 (Port: 3000) ===");
        } catch (e) {
            await this.browser.close();
            throw new Error("初始化解密函数捕获超时");
        }
    }

    async responseModifier(payload) {
        if (!this.isReady) throw new Error("服务初始化未完成");

        return await this.page.evaluate(async (data) => {
            const fn = window.__CAPTURED_RESPONSE_MODIFIER__;
            if (!fn) throw new Error("responseModifier 函数引用丢失");
            try {
                const result = await fn(data);
                return result;
            } catch (error) {
                console.warn("responseModifier 执行错误:", error);
                throw error;
            }
        }, payload);
    }
    async contextModifier(payload) {
        if (!this.isReady) throw new Error("服务初始化未完成");

        return await this.page.evaluate(async (params) => {
            const fn = window.__CAPTURED_CONTEXT_MODIFIER__;
            if (!fn) throw new Error("contextModifier 函数引用丢失");
            try {
                const requestParams = {
                    vid: params.vid || "t0000000000",
                    tm: params.tm || Math.floor(Date.now() / 1000).toString(),
                    appVer: params.appVer || "3.5.57",
                    guid: params.guid || "mock_guid",
                    platform: params.platform || "10201",
                    cKey: "",
                    encryptVer: "9.2"
                };
                let _cKey = "";
                Object.defineProperty(requestParams, 'cKey', {
                    get: () => _cKey,
                    set: (v) => { _cKey = v; window._LAST_CKEY = v; },
                    enumerable: true, configurable: true
                });
                const mockContext = {
                    playerInstanceId: "inst_ckey_gen",
                    config: { enableTEE: true, isOfficialSite: true, tvkConfig: {}, businessConfig: { platform: params.platform || "10201" } },
                    businessData: { h38: params.h38 || "", pq36: params.pq36 || "" },
                    reqParams: requestParams
                };
                await fn(mockContext);
                const finalKey = window._LAST_CKEY || requestParams.cKey;
                return finalKey ? { success: true, data: finalKey } : { success: false, error: "Empty cKey" };
            } catch (error) {
                console.warn("contextModifier 执行错误:", error);
                throw error;
            }
        }, payload);
    }
    async responseModifier(payload) {
        if (!this.isReady) throw new Error("服务初始化未完成");

        return await this.page.evaluate(async (data) => {
            const fn = window.__CAPTURED_RESPONSE_MODIFIER__;
            if (!fn) throw new Error("responseModifier 函数引用丢失");
            try {
                const result = await fn(data);
                return result;
            } catch (error) {
                console.warn("responseModifier 执行错误:", error);
                throw error;
            }
        }, payload);
    }

    async licenseRequestSetup(payload) {
        if (!this.isReady) throw new Error("服务初始化未完成");

        return await this.page.evaluate(async (data) => {
            const fn = window.__CAPTURED_REQUEST_SETUP__;
            if (!fn) throw new Error("licenseRequestSetup 函数引用丢失");

            const uint8Array = new Uint8Array(2);
            uint8Array[0] = 8;
            uint8Array[1] = 4;

            const defaultArrayBuffer = uint8Array.buffer;
            var body = defaultArrayBuffer;
            if (data.body) {
                body = Uint8Array.from(atob(data.body), c => c.charCodeAt(0)).buffer;
            }

            let req_data = {
                "method": "POST",
                "responseType": "arraybuffer",
                "body": body,
                "url": data.url,
                "headers": { "Content-Type": "application/x-www-form-urlencoded" }
            }
            const result = await fn(req_data);
            return result;
        }, payload);
    }
    async licenseResponseSetup(payload) {
        if (!this.isReady) throw new Error("服务初始化未完成");

        return await this.page.evaluate(async (data) => {
            const fn = window.__CAPTURED_RESPONSE_SETUP__;
            if (!fn) throw new Error("licenseResponseSetup 函数引用丢失");
            const result = await fn(data);
            const base64String = btoa(String.fromCharCode.apply(null, new Uint8Array(result)));
            return base64String;
        }, payload);
    }
}

const teeService = new TeeService();

// --- Express 路由 ---

app.post('/api/tee/licenseResponseSetup', async (req, res) => {
    try {
        const payload = req.body;
        const result = await teeService.licenseResponseSetup(payload);
        res.json({ success: true, data: result });
    } catch (err) {
        console.error("licenseResponseSetup 失败:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/api/tee/licenseRequestSetup', async (req, res) => {
    try {
        const payload = req.body;
        const result = await teeService.licenseRequestSetup(payload);
        res.json({ success: true, data: result });
    } catch (err) {
        console.error("licenseRequestSetup 失败:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

app.post('/api/tee/genCkey', async (req, res) => {
    try {
        const payload = req.body;
        const result = await teeService.contextModifier(payload);
        res.json({ success: true, data: result });
    } catch (err) {
        console.error("contextModifier 失败:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});
app.post('/api/tee/decrypt', async (req, res) => {
    try {
        const payload = req.body;
        const result = await teeService.responseModifier(payload);
        res.json({ success: true, data: result });
    } catch (err) {
        console.error("responseModifier 失败:", err);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 健康检查
app.get('/health', (req, res) => {
    res.json({ status: teeService.isReady ? "ready" : "initializing" });
});

// 启动
const PORT = 3000;
(async () => {
    try {
        await teeService.init();
        app.listen(PORT, () => {
            console.log(`本地测试命令: curl -X POST http://localhost:${PORT}/api/tee/licenseRequestSetup -H "Content-Type: application/json" -d '{"anc":"...", "v":"1001", "st":0, "tm":"123"}'`);
        });
    } catch (err) {
        console.error("服务启动失败:", err);
        process.exit(1);
    }
})();