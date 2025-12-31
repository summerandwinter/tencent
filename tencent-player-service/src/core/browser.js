const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
const config = require('../../config');

puppeteer.use(StealthPlugin());

class BrowserManager {
    constructor() {
        this.browser = null;
    }

    async launch() {
        if (this.browser) return this.browser;

        console.log('>>> [Core] Launching Browser...');
        this.browser = await puppeteer.launch({
            headless: !config.DEBUG, // 调试时设为 false
            args: config.BROWSER_ARGS,
            executablePath: config.EXECUTABLE_PATH || undefined, // DRM 必需
            ignoreDefaultArgs: ["--enable-automation"],
        });

        this.browser.on('disconnected', () => {
            console.error('!!! [Core] Browser crashed/disconnected');
            this.browser = null;
        });

        return this.browser;
    }

    async newPage() {
        if (!this.browser) await this.launch();
        const page = await this.browser.newPage();
        
        // 性能优化：拦截图片和样式
        await page.setRequestInterception(true);
        page.on('request', (req) => {
            const resourceType = req.resourceType();
            if (['image', 'stylesheet', 'font'].includes(resourceType)) {
                req.abort();
            } else {
                req.continue();
            }
        });

        return page;
    }
}

module.exports = new BrowserManager();