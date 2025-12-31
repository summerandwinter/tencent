const path = require('path');

module.exports = {
    PORT: process.env.PORT || 3000,
    DEBUG: false, // 调试模式下开启 Headless: false
    
    // 浏览器配置
    BROWSER_ARGS: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-web-security',
        '--disable-blink-features=AutomationControlled', // 基础防检测
    ],
    
    // 【未来扩展】DRM 需要指定真实 Chrome 路径
    // EXECUTABLE_PATH: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', 
    
    // 资源路径
    ASSETS_PATH: path.join(__dirname, '../src/assets'),
};