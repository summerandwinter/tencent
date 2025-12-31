import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// 启用防检测插件
puppeteer.use(StealthPlugin());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 读取原始解密代码
const DECRYPT_CODE = readFileSync(join(__dirname, '../assets/decrypt-vm.js'), 'utf8');

class DecryptService {
    constructor() {
        this.browser = null;
        this.page = null;
        this.isInitialized = false;
    }

    /**
     * 初始化浏览器实例（单例）
     */
    async init() {
        if (this.isInitialized) return;
        
        console.log('启动无头浏览器...');
        this.browser = await puppeteer.launch({
            headless: 'new', // 新版无头模式
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-web-security',
                '--disable-features=IsolateOrigins,site-per-process'
            ],
            ignoreHTTPSErrors: true
        });

        console.log('创建新页面...');
        this.page = await this.browser.newPage();
        
        // 设置User-Agent和视口
        await this.page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36');
        await this.page.setViewport({ width: 1920, height: 1080 });
        
        // 禁用某些检测
        await this.page.evaluateOnNewDocument(() => {
            Object.defineProperty(navigator, 'webdriver', { get: () => false });
            Object.defineProperty(navigator, 'plugins', { get: () => [1, 2, 3, 4, 5] });
        });

        // 注入解密代码
        await this.page.evaluate(DECRYPT_CODE);
        
        // 等待解密函数就绪
        await this.page.waitForFunction(() => window.decryptResponse !== undefined, { timeout: 10000 });
        
        this.isInitialized = true;
        console.log('解密服务初始化完成');
    }

    /**
     * 执行解密
     * @param {Object} encryptedData - 加密数据
     * @returns {Promise<Object>} 解密结果
     */
    async decrypt(encryptedData) {
        if (!this.isInitialized) await this.init();
        
        try {
            console.log('开始解密数据...');
            
            const result = await this.page.evaluate(async (data) => {
                try {
                    return await window.decryptResponse(data);
                } catch (error) {
                    console.error('页面内解密错误:', error);
                    throw error;
                }
            }, encryptedData);
            
            return {
                success: true,
                data: result,
                timestamp: Date.now()
            };
        } catch (error) {
            console.error('解密失败:', error);
            return {
                success: false,
                error: error.message,
                timestamp: Date.now()
            };
        }
    }

    /**
     * 清理资源
     */
    async cleanup() {
        if (this.page) await this.page.close();
        if (this.browser) await this.browser.close();
        this.isInitialized = false;
        console.log('清理浏览器资源');
    }

    /**
     * 健康检查
     */
    async healthCheck() {
        try {
            await this.page.evaluate(() => 1);
            return { status: 'healthy', initialized: this.isInitialized };
        } catch (error) {
            return { status: 'unhealthy', error: error.message };
        }
    }
}

// 导出单例实例
export const decryptService = new DecryptService();