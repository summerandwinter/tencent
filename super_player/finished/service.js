const express = require('express');
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));

class DecryptService {
    constructor() {
        this.browser = null;
        this.page = null;
        this.isReady = false;
    }

    async init() {
        console.log("正在初始化极致瘦身版浏览器...");
        this.browser = await puppeteer.launch({
            headless: false,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-gpu',            // 禁用 GPU 硬件加速
                '--disable-dev-shm-usage',  // 防止内存不足
                '--no-first-run',
                '--no-zygote',
                '--single-process'          // 单进程模式更省内存
            ]
        });
        this.page = await this.browser.newPage();

        // 1. 【性能关键】开启请求拦截，封杀视频流和无关资源
        await this.page.setRequestInterception(true);
        this.page.on('request', (req) => {
            const url = req.url();
            const type = req.resourceType();

            // 拦截视频分片(.ts, .m4s)、图片、字体、CSS、统计上报
            if (
                ['image', 'media', 'font', 'stylesheet'].includes(type) ||
                url.includes('.ts') ||
                url.includes('.m4s') ||
                url.includes('btrace.qq.com') ||
                url.includes('adstats.qq.com')
            ) {
                req.abort();
            } else {
                req.continue();
            }
        });

        // 2. 注入你验证成功的劫持逻辑
        await this.page.evaluateOnNewDocument(() => {
            window.__CAPTURED_MODIFIER__ = null;
            const trap = {
                set: function (val) {
                    if (typeof val === 'function' && !window.__CAPTURED_MODIFIER__) {
                        window.__CAPTURED_MODIFIER__ = val;
                        console.log('>>> [Hook] 已捕获解密函数');
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

        // 3. 加载环境
        const videoUrl = 'https://v.qq.com/x/cover/vqeduf4egjyrc8w/t001392icot.html';
        console.log("加载页面环境中...");
        await this.page.goto(videoUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });

        // 4. 强制诱导（切换清晰度）
        console.log("诱导解密逻辑激活...");
        await this.page.evaluate(() => {
            const H5 = window.ThumbPlayerH5 || window.SuperPlayer;
            const player = Object.values(H5?.instancesMap || {})[0];
            if (player) {
                const levels = player.getCommonKv('player_currentDefnList') || [];
                if (levels.length > 1) {
                    player.setLevel(levels[levels.length - 1].value);
                }
            }
        });

        // 5. 等待捕获并执行【内存清理】
        try {
            await this.page.waitForFunction(() => typeof window.__CAPTURED_MODIFIER__ === 'function', { timeout: 30000 });

            // 【核心优化】函数捕获后，销毁所有视频元素和渲染循环以节省 CPU 和内存
            await this.page.evaluate(() => {
                const videos = document.querySelectorAll('video');
                videos.forEach(v => {
                    v.pause();
                    v.src = "";
                    v.load();
                    v.remove(); // 彻底从 DOM 删除
                });
                // 停止播放器可能存在的定时检查逻辑
                window.requestAnimationFrame = () => { };
                window.setInterval = (f, t) => { if (t < 100) return; return setInterval(f, t); };
            });

            this.isReady = true;
            console.log("=== 极致瘦身版解密服务已就绪 ===");
        } catch (e) {
            await this.browser.close();
            throw new Error("初始化解密函数捕获超时");
        }
    }

    async decrypt(encryptedJson) {
        return await this.page.evaluate(async (data) => {
            const fn = window.__CAPTURED_MODIFIER__;
            if (!fn) throw new Error("解密函数引用丢失");

            const sanitize = (obj) => {
                for (let k in obj) {
                    if (typeof obj[k] === 'string') obj[k] = obj[k].replace(/\s/g, '');
                    else if (typeof obj[k] === 'object' && obj[k] !== null) sanitize(obj[k]);
                }
                return obj;
            };

            const result = await fn(sanitize(data));
            return JSON.parse(JSON.stringify(result));
        }, encryptedJson);
    }
}

const decryptService = new DecryptService();

// API 路由
app.post('/decrypt', async (req, res) => {
    try {
        const result = await decryptService.decrypt(req.body);
        res.json({ success: true, data: result });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

const PORT = 3000;
(async () => {
    await decryptService.init();
    app.listen(PORT);
})();