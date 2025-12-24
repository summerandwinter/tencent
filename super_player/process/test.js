const puppeteer = require('puppeteer');

async function openVideoPage() {
    // 启动浏览器，可以设置 headless: false 来看到浏览器界面
    const browser = await puppeteer.launch({
        headless: true, // 设置为 true 则在后台运行
        defaultViewport: null, // 使用默认视图大小
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        
        // 设置用户代理，模拟真实浏览器
        await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
        
        console.log('正在打开页面...');
        
        // 导航到目标页面
        await page.goto('https://v.qq.com/x/cover/ks3d27pt4xv3dyd/z0018rw9ydm.html', {
            waitUntil: 'networkidle2', // 等待网络空闲
            timeout: 30000 // 30秒超时
        });

        console.log('页面加载完成！');
        
        // 等待视频容器加载
        await page.waitForSelector('.container_player', { timeout: 10000 })
            .catch(() => console.log('视频容器可能加载较慢...'));
        
        // 可以截图保存页面状态
        await page.screenshot({ path: 'video_page.png', fullPage: true });
        console.log('页面截图已保存为 video_page.png');
        
        // 停留一段时间以便观察
        console.log('页面将保持打开状态10秒...');
        await new Promise(resolve => setTimeout(resolve, 10000));
        
    } catch (error) {
        console.error('打开页面时出错:', error);
    } finally {
        // 关闭浏览器
        await browser.close();
        console.log('浏览器已关闭');
    }
}

// 执行函数
openVideoPage();