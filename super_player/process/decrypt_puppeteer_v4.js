const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 你的文件名
const PLAYER_JS_PATH = path.join(__dirname, 'superplayer-txv.js');

// =======================================================
// [关键配置] 请根据你的抓包数据修改以下 3 个变量
// =======================================================
const TARGET_ANC = "eyJyYyI6IkdxQ2xScU81TXZU"; 
const TARGET_TM = "1765955162";         // 抓包 vinfoparam 中的 tm 值 (必须一致!)
const TARGET_GUID = "3c4e1a2d05e04405"; // 抓包 vinfoparam 中的 guid 值 (必须一致!)
// =======================================================

function extractCoreLogic() {
    console.log("[-] 正在读取源码文件...");
    const source = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

    // 1. 提取 VM 解释器源码
    const cyRegex = /( cy\s*=\s*function\s*\(\)\s*\{[\s\S]+?\}\(\);)/;
    const cyMatch = source.match(cyRegex);
    if (!cyMatch) throw new Error("无法提取 cy 函数");

    // 2. 提取加密字节码 (找最长的那串)
    const bytecodeRegex = /cy\("([^"]+)"/g;
    let match, bytecode = "";
    while ((match = bytecodeRegex.exec(source)) !== null) {
        if (match[1].length > bytecode.length) bytecode = match[1];
    }
    if (!bytecode) throw new Error("无法提取字节码");

    return { cySource: cyMatch[1], bytecode: bytecode };
}

(async () => {
    let browser;
    try {
        const { cySource, bytecode } = extractCoreLogic();
        console.log(`[-] 代码提取成功 (字节码长度: ${bytecode.length})`);

        console.log("[-] 启动浏览器环境...");
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setRequestInterception(true);
        page.on('request', req => ['image', 'font', 'media'].includes(req.resourceType()) ? req.abort() : req.continue());

        // 导航到腾讯视频页面 (绕过域名检测)
        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', { waitUntil: 'domcontentloaded' });

        console.log("[-] 注入 VM 并执行解密...");

        const result = await page.evaluate((fnCode, rawCode, inputAnc, inputTm, inputGuid) => {
            return new Promise(async (resolve, reject) => {
                try {
                    // --- 1. 注入辅助函数 ---
                    window.gy = e => (e && typeof Symbol != "undefined" && e.constructor === Symbol) ? "symbol" : typeof e;
                    window.ly = (e, t) => (t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance]) ? !!t[Symbol.hasInstance](e) : e instanceof t;

                    // --- 2. 注入 cy 函数 ---
                    const globalFnCode = fnCode.replace(/^var cy\s*=/, 'window.cy =');
                    window.eval(globalFnCode);

                    // --- 3. 模拟 moduleQimei (修复 reading 'tools' 报错) ---
                    const mockQimei = {
                        tools: {
                            getStorageItem: k => window.localStorage.getItem(k),
                            setStorageItem: (k, v) => window.localStorage.setItem(k, v),
                            getSessionItem: k => window.sessionStorage.getItem(k),
                            setSessionItem: (k, v) => window.sessionStorage.setItem(k, v),
                            getTimestamp: () => Math.floor(Date.now() / 1000) + "",
                            getFeature: () => ({}),
                            getCookieQ36: () => "",
                            getCookieUUID: () => "",
                            autoTry: (fn, def) => { try { return fn(); } catch(e) { return def; } }
                        }
                    };

                    // --- 4. 准备环境代理 ---
                    const envProxy = {
                        get Object() { return window.Object; },
                        get moduleQimei() { return mockQimei; }, // 关键修复
                        get Uint32Array() { return window.Uint32Array; },
                        get window() { return window; },
                        get String() { return window.String; },
                        get Symbol() { return window.Symbol; },
                        get undefined() { return undefined; },
                        get TypeError() { return window.TypeError; },
                        get Number() { return window.Number; },
                        get JSON() { return window.JSON; },
                        get parseInt() { return window.parseInt; },
                        get Date() { return window.Date; },
                        get Array() { return window.Array; },
                        get Math() { return window.Math; },
                        get Promise() { return window.Promise; },
                        get navigator() { return window.navigator; },
                        get setTimeout() { return window.setTimeout; },
                        get RegExp() { return window.RegExp; },
                        get console() { return window.console; },
                        get document() { return window.document; },
                        get location() { return window.location; },
                        get screen() { return window.screen; },
                        get performance() { return window.performance; }
                    };

                    // --- 5. 初始化 VM ---
                    const responseModifier = window.cy(rawCode, false)(6327, [], envProxy);

                    // --- 6. 构造完整数据 (修复 reading '4' 报错) ---
                    // 解密逻辑需要依赖 tm 和 guid 字段
                    const vinfoPayload = {
                        "vl": {"vi": [{"fn": "dummy", "fvkey": "dummy"}]}, 
                        "tm": inputTm,       // 必须传
                        "guid": inputGuid,   // 必须传
                        "flowid": "dummy_flowid",
                        "platform": "10201",
                        "sdtfrom": "v1010",
                        "appVer": "3.5.57",
                        "anc": inputAnc
                    };

                    const mockResData = {
                        "errCode": 0,
                        "vinfo": JSON.stringify(vinfoPayload)
                    };
                    
                    const mockCtx = {
                        config: { instanceId: "puppeteer_id", businessConfig: { platform: "10201" } },
                        playerInstanceId: "puppeteer_id",
                        logger: { log: console.log, error: console.error }
                    };

                    console.log("VM 启动执行...");
                    
                    // --- 7. 执行 ---
                    const result = responseModifier.call(mockCtx, mockResData);
                    
                    const finalData = await Promise.resolve(result);
                    resolve(finalData || mockResData);

                } catch (e) {
                    reject(e.toString());
                }
            });
        }, cySource, bytecode, TARGET_ANC, TARGET_TM, TARGET_GUID); // 传入参数

        console.log("\n[+] 最终结果:");
        console.log("---------------------------------------------------");
        // 如果 vinfo 被解密成了对象，这里会显示出来
        console.log(JSON.stringify(result, null, 2));
        console.log("---------------------------------------------------");

        if (result.vinfo) {
             let vinfoObj = result.vinfo;
             if (typeof vinfoObj === 'string') {
                 try { vinfoObj = JSON.parse(vinfoObj); } catch(e){}
             }
             
             if (vinfoObj && vinfoObj.anc && typeof vinfoObj.anc === 'object') {
                 console.log("\n✅ [成功] anc 已解密为对象:", JSON.stringify(vinfoObj.anc));
             } else {
                 console.log("\n⚠️ [注意] anc 仍为字符串，请检查 tm/guid 是否与抓包完全一致。");
             }
        }

    } catch (e) {
        console.error("[-] 执行出错:", e);
    } finally {
        if (browser) await browser.close();
    }
})();