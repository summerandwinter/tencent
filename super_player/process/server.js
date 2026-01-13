const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
// 加密数据通常很大，设置 10mb 限制
app.use(bodyParser.json({ limit: '10mb' }));

class DecryptService {
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

        // 1. 注入你测试成功的劫持逻辑
        await this.page.evaluateOnNewDocument(() => {
            window.__CAPTURED_MODIFIER__ = null;
            const trap = {
                set: function (val) {
                    if (typeof val === 'function' && !window.__CAPTURED_MODIFIER__) {
                        window.__CAPTURED_MODIFIER__ = val;
                        console.log('>>> [Puppeteer Hook] 捕获到解密函数 [responseModifier]');
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
            Object.defineProperty(Object.prototype, 'responseModifier', trap);
            window.onbeforeunload = () => false;
        });

        await this.page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

        // 2. 加载视频页
        const videoUrl = 'https://v.qq.com/x/cover/mzc00200lplzzrd/x0044ibkr4p.html';
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
            await this.page.waitForFunction(() => typeof window.__CAPTURED_MODIFIER__ === 'function', { timeout: 30000 });
            this.isReady = true;
            console.log("=== 解密服务已就绪 (Port: 3000) ===");
        } catch (e) {
            await this.browser.close();
            throw new Error("初始化解密函数捕获超时");
        }
    }

    async decrypt(encryptedJson) {
        if (!this.isReady) throw new Error("服务初始化未完成");

        return await this.page.evaluate(async (data) => {
            const fn = window.__CAPTURED_MODIFIER__;
            if (!fn) throw new Error("解密函数引用丢失");

            // 清洗数据防止 atob 报错 (针对复制粘贴可能产生的空格/换行)
            const sanitize = (obj) => {
                for (let k in obj) {
                    if (typeof obj[k] === 'string') obj[k] = obj[k].replace(/\s/g, '');
                    else if (typeof obj[k] === 'object' && obj[k] !== null) sanitize(obj[k]);
                }
                return obj;
            };

            const result = await fn(sanitize(data));
            // 序列化回传结果
            return JSON.parse(JSON.stringify(result));
        }, encryptedJson);
    }
}

const decryptService = new DecryptService();

// --- Express 路由 ---

// 解密 API
app.post('/decrypt', async (req, res) => {
    try {
        const payload = req.body;
        // 校验基础参数
        if (!payload || !payload.anc) {
            return res.status(400).json({ success: false, error: "Missing 'anc' parameter" });
        }

        const result = await decryptService.decrypt(payload);
        res.json({ success: true, data: result });
    } catch (err) {
        console.error("解密请求失败:", err.message);
        res.status(500).json({ success: false, error: err.message });
    }
});

// 健康检查
app.get('/health', (req, res) => {
    res.json({ status: decryptService.isReady ? "ready" : "initializing" });
});

// 启动
const PORT = 3000;
(async () => {
    try {
        await decryptService.init();
        app.listen(PORT, () => {
            console.log(`本地测试命令: curl -X POST http://localhost:${PORT}/decrypt -H "Content-Type: application/json" -d '{"anc":"...", "v":"1001", "st":0, "tm":"123"}'`);
        });
    } catch (err) {
        console.error("服务启动失败:", err);
        process.exit(1);
    }
})();