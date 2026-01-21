const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');

puppeteer.use(StealthPlugin());

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
            const text = msg.text();
            if (text.includes('[Puppeteer Hook]') || text.includes('⚠️')) {
                console.log(text);
            }
        });
        console.log('>>> [Core] Console logging enabled');

        // 1. 注入你测试成功的劫持逻辑 (完全保持你原本的逻辑)
        await this.page.evaluateOnNewDocument(() => {
            window.__CAPTURED_CONTEXT_MODIFIER__ = null;
            window.__CAPTURED_REQUEST_SETUP__ = null;
            window.__CAPTURED_RESPONSE_SETUP__ = null;
            window.__CAPTURED_RESPONSE_MODIFIER__ = null;

            // 通用 Hook
            const createHook = (prop, globalVar) => ({
                set: function (val) {
                    if (typeof val === 'function' && !window[globalVar]) {
                        window[globalVar] = val;
                        console.warn(`>>> [Puppeteer Hook] 捕获到函数 [${prop}]`);

                        // 额外保存上下文，licenseRequestSetup 需要用到 this
                        if (prop === 'licenseRequestSetup') {
                            window.__CAPTURED_REQUEST_CONTEXT__ = this;
                        }

                        try {
                            Object.defineProperty(this, prop, {
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
            });

            Object.defineProperty(Object.prototype, 'licenseRequestSetup', createHook('licenseRequestSetup', '__CAPTURED_REQUEST_SETUP__'));
            Object.defineProperty(Object.prototype, 'licenseResponseSetup', createHook('licenseResponseSetup', '__CAPTURED_RESPONSE_SETUP__'));
            Object.defineProperty(Object.prototype, 'responseModifier', createHook('responseModifier', '__CAPTURED_RESPONSE_MODIFIER__'));
            Object.defineProperty(Object.prototype, 'contextModifier', createHook('contextModifier', '__CAPTURED_CONTEXT_MODIFIER__'));

            window.onbeforeunload = () => false;
        });

        await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        // 2. 加载视频页
        const videoUrl = 'https://v.qq.com/x/cover/vqeduf4egjyrc8w/t001392icot.html';
        console.log("正在加载视频页并提取解密闭包...");

        await this.page.goto(videoUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

        // 3. 强制诱导（切换清晰度）
        await this.page.evaluate(async () => {
            // 尝试多种方式触发，增加成功率
            const tryTrigger = () => {
                const H5 = window.ThumbPlayerH5 || window.SuperPlayer;
                const instances = H5?.instancesMap || {};
                const player = Object.values(instances)[0];
                if (player) {
                    // 1. 尝试切换清晰度
                    const levels = player.getCommonKv('player_currentDefnList') || [];
                    if (levels.length > 1) {
                        const target = levels[levels.length - 1].value;
                        player.setLevel(target);
                    }
                    // 2. 尝试静音播放
                    player.muted = true;
                    player.play();
                }
            };
            setTimeout(tryTrigger, 2000);
            setTimeout(tryTrigger, 5000);
        });

        // 4. 等待捕获完成
        try {
            await this.page.waitForFunction(() => typeof window.__CAPTURED_CONTEXT_MODIFIER__ === 'function', { timeout: 30000 });
            await this.page.waitForFunction(() => typeof window.__CAPTURED_REQUEST_SETUP__ === 'function', { timeout: 30000 });

            // 另外两个如果不一定触发，可以不强制等待，或者捕获到前两个就视为成功
            // 你的原版代码等待了全部4个，这里保持一致
            await this.page.waitForFunction(() => typeof window.__CAPTURED_RESPONSE_MODIFIER__ === 'function', { timeout: 30000 });
            // responseSetup 只有在特定 DRM 下才会有，超时不报错，保证服务能起来
            try {
                await this.page.waitForFunction(() => typeof window.__CAPTURED_RESPONSE_SETUP__ === 'function', { timeout: 5000 });
            } catch (e) { console.log(">>> [Info] licenseResponseSetup 未捕获 (非必须)"); }

            this.isReady = true;
            console.log("=== 解密服务已就绪 (Port: 3000) ===");
        } catch (e) {
            console.error("初始化捕获超时:", e.message);
            // 即使超时，如果核心函数有了，也可以尝试继续提供服务
            const hasCore = await this.page.evaluate(() => !!window.__CAPTURED_CONTEXT_MODIFIER__ && !!window.__CAPTURED_REQUEST_SETUP__);
            if (hasCore) {
                this.isReady = true;
                console.log("=== 服务强制就绪 (核心函数已捕获) ===");
            } else {
                await this.browser.close();
                throw new Error("核心函数捕获失败");
            }
        }
    }

    async contextModifier(payload) {
        if (!this.isReady) throw new Error("服务初始化未完成");

        return await this.page.evaluate(async (params) => {
            const fn = window.__CAPTURED_CONTEXT_MODIFIER__;
            if (!fn) throw new Error("contextModifier 函数引用丢失");
            try {
                // 【核心逻辑】保持你原有的 Mock 结构，只增加了 link_vid
                const requestParams = {
                    vid: params.vid || "t0000000000",
                    tm: params.tm || Math.floor(Date.now() / 1000).toString(),
                    appVer: params.appVer || "3.5.57",
                    guid: params.guid || "mock_guid",
                    platform: params.platform || "10201",
                    cKey: "",
                    encryptVer: "9.2",
                    // 【新增】透传 link_vid，解决签名校验失败的问题
                    link_vid: params.link_vid || params.vid
                };

                let _cKey = "";
                Object.defineProperty(requestParams, 'cKey', {
                    get: () => _cKey,
                    set: (v) => { _cKey = v; window._LAST_CKEY = v; },
                    enumerable: true, configurable: true
                });

                const mockContext = {
                    // 使用你提供的 ID
                    playerInstanceId: "0760fe8a97705892317da64d0b513e32",
                    config: {
                        // 【恢复】使用你提供的 false，避免 9.2 逻辑错误
                        enableTxEnc: false,
                        enableTEE: true,
                        isOfficialSite: true,
                        tvkConfig: {},
                        businessConfig: { platform: params.platform || "10201" }
                    },
                    businessData: { h38: params.h38 || "", pq36: params.pq36 || "" },
                    reqParams: requestParams
                };

                // console.warn("contextModifier 输入:", JSON.stringify(mockContext));
                await fn(mockContext);
                const finalKey = window._LAST_CKEY || requestParams.cKey;
                return finalKey ? { success: true, data: finalKey } : { success: false, error: "Empty cKey" };
            } catch (error) {
                return { success: false, error: error.toString() };
            }
        }, payload);
    }

    async licenseRequestSetup(payload) {
        if (!this.isReady) throw new Error("服务初始化未完成");

        return await this.page.evaluate(async (data) => {
            const fn = window.__CAPTURED_REQUEST_SETUP__;
            // 【新增】获取上下文，有些版本签名需要读取 this.keySystem
            const ctx = window.__CAPTURED_REQUEST_CONTEXT__ || { keySystem: "com.widevine.alpha" };

            if (!fn) throw new Error("licenseRequestSetup 函数引用丢失");

            // 1. 还原 Body (Base64 -> Uint8Array)
            // 之前的代码直接用写死的 [8,4]，这里需要支持传入真实数据
            let bodyBuffer;
            if (data.body) {
                // 如果传入的是 Base64，转为二进制
                const binaryString = window.atob(data.body);
                const len = binaryString.length;
                const bytes = new Uint8Array(len);
                for (let i = 0; i < len; i++) {
                    bytes[i] = binaryString.charCodeAt(i);
                }
                bodyBuffer = bytes.buffer;
            } else {
                const uint8Array = new Uint8Array(2);
                uint8Array[0] = 8;
                uint8Array[1] = 4;
                bodyBuffer = uint8Array.buffer;
            }

            let req_data = {
                "method": "POST",
                "responseType": "arraybuffer",
                "body": bodyBuffer,
                "url": data.url,
                "headers": { "Content-Type": "application/x-www-form-urlencoded" }
            };

            // 使用 call(ctx) 调用，防止内部使用 this 报错
            const result = await fn.call(ctx, req_data);

            // 2. 处理返回结果 (Uint8Array -> Base64)
            // Node.js 无法直接接收 ArrayBuffer，必须转为 Base64 字符串
            if (result.body && typeof result.body !== 'string') {
                const bytes = new Uint8Array(result.body);
                let binary = '';
                for (let i = 0; i < bytes.byteLength; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                result.body = window.btoa(binary);
            }

            return result;
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

    async licenseResponseSetup(payload) {
        if (!this.isReady) throw new Error("服务初始化未完成");

        return await this.page.evaluate(async (data) => {
            const fn = window.__CAPTURED_RESPONSE_SETUP__;
            // 如果没捕获到，提供一个默认实现（通常只是 Base64 解码）
            if (!fn) {
                return data; // 或者做简单的 base64 解码
            }

            const result = await fn(data);

            // 结果如果是二进制，转 Base64 传回 Node
            if (typeof result !== 'string') {
                const bytes = new Uint8Array(result);
                let binary = '';
                for (let i = 0; i < bytes.byteLength; i++) {
                    binary += String.fromCharCode(bytes[i]);
                }
                return window.btoa(binary);
            }
            return result;
        }, payload);
    }
}

const teeService = new TeeService();

// --- Express 路由 ---

app.post('/api/tee/genCkey', async (req, res) => {
    try {
        const payload = req.body;
        const result = await teeService.contextModifier(payload);
        res.json(result);
    } catch (err) {
        console.error("genCkey 失败:", err);
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

app.get('/health', (req, res) => {
    res.json({ status: teeService.isReady ? "ready" : "initializing" });
});

const PORT = 3000;
(async () => {
    try {
        await teeService.init();
        app.listen(PORT, () => {
            console.log(`服务已启动: http://localhost:${PORT}`);
        });
    } catch (err) {
        console.error("服务启动失败:", err);
        process.exit(1);
    }
})();