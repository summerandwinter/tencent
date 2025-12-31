// decrypt-service.js
const puppeteer = require('puppeteer');

class DecryptService {
    constructor() {
        this.browser = null;
        this.page = null;
    }
    
    async initialize() {
        this.browser = await puppeteer.launch({
            headless: 'new',
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        this.page = await this.browser.newPage();
        
        // 注入解密代码
        await this.page.addScriptTag({
            content: `
                // 这里放入你提供的完整JS代码
                !function(e,t){!function(e,t,o){...}}();
                
                // 将g函数暴露给页面
                window.decryptFunction = function(encryptedData) {
                    return g(encryptedData);
                };
            `
        });
    }
    
    async decrypt(encryptedData) {
        if (!this.browser) {
            await this.initialize();
        }
        
        const result = await this.page.evaluate(async (data) => {
            try {
                return await window.decryptFunction(data);
            } catch (error) {
                throw new Error('解密失败: ' + error.message);
            }
        }, encryptedData);
        
        return result;
    }
    
    async close() {
        if (this.browser) {
            await this.browser.close();
        }
    }
}

module.exports = DecryptService;