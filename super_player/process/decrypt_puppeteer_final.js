const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 你的文件名
const PLAYER_JS_PATH = path.join(__dirname, 'source_final.js');

// =======================================================
// [配置] 抓包数据 (必须完全一致)
// =======================================================
const TARGET_ANC = "eyJyYyI6IkdxQ2xScU81TXZU"; 
const CTX_DATA = {
    tm: "1765955162",          // vinfoparam.tm
    guid: "3c4e1a2d05e04405",  // vinfoparam.guid
    platform: "10201",         // vinfoparam.platform
    sdtfrom: "v1010",          // vinfoparam.sdtfrom
    appVer: "1.57.5"           // vinfoparam.appVer
};
// =======================================================

(async () => {
    let browser;
    try {
        console.log("[-] 正在读取源码文件...");
        let sourceCode = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

        // [关键步骤] 修改源码，将局部变量 cy 暴露到全局 window
        // 这样我们就不需要处理复杂的正则提取，直接利用原文件的闭包逻辑
        if (sourceCode.includes('var cy = function')) {
            console.log("[-] 注入钩子: Exposing cy to window...");
            // 替换定义：var cy = ... -> window.cy = ...
            sourceCode = sourceCode.replace(/var cy\s*=\s*function/, 'window.cy = function');
        } else {
            throw new Error("源码中未找到 'var cy = function'，请检查文件版本或混淆方式是否变更");
        }

        // 提取字节码 (用于我们在外部手动初始化，控制权更大)
        const bytecodeMatch = sourceCode.match(/cy\("([^"]+)"/);
        if (!bytecodeMatch) throw new Error("无法提取字节码");
        const RAW_BYTECODE = bytecodeMatch[1];
        
        console.log("[-] 启动浏览器环境...");
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // 拦截无关请求
        await page.setRequestInterception(true);
        page.on('request', req => ['image', 'font', 'media'].includes(req.resourceType()) ? req.abort() : req.continue());

        // 导航以获取正确域环境
        await page.goto('https://v.qq.com/x/cover/ks3d27pt4xv3dyd/z0018rw9ydm.html', { waitUntil: 'domcontentloaded' });

        console.log("[-] 注入完整播放器代码...");

        // 注入修改后的源码
        await page.evaluate((code) => {
            // 屏蔽可能导致报错的无关逻辑
            window.SuperPlayer = null; 
            window.eval(code);
        }, sourceCode);

        console.log("[-] 验证 VM 注入状态...");
        const isCyAvailable = await page.evaluate(() => typeof window.cy === 'function');
        if (!isCyAvailable) throw new Error("VM 注入失败: window.cy 未定义");

        console.log("[-] 开始解密...");

        const result = await page.evaluate(async (rawCode, inputAnc, ctxData) => {
            return new Promise(async (resolve, reject) => {
                try {
                    // --- 1. 补全环境 (模拟 ProxyHttp 调用时的环境) ---
                    
                    // 模拟 moduleQimei (源码依赖)
                    const mockQimei = {
                        tools: {
                            getStorageItem: () => null,
                            setStorageItem: () => {},
                            getSessionItem: () => null,
                            setSessionItem: () => {},
                            getTimestamp: () => Math.floor(Date.now() / 1000) + "",
                            getFeature: () => ({}),
                            getCookieQ36: () => "",
                            getCookieUUID: () => "",
                            autoTry: (fn) => { try { return fn(); } catch(e) { return undefined; } }
                        }
                    };

                    // 构造 EnvProxy (VM 的第三个参数)
                    // 使用浏览器原生对象，补充 mock 对象
                    const envProxy = {
                        get Object() { return window.Object; },
                        get moduleQimei() { return mockQimei; },
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

                    // --- 2. 初始化 VM ---
                    // 6327 是 Offset，直接从源码逻辑复用
                    const modifierFactory = window.cy(rawCode, false);
                    if (typeof modifierFactory !== 'function') {
                        throw new Error(`cy 初始化返回了错误类型: ${typeof modifierFactory}`);
                    }
                    const responseModifier = modifierFactory(6327, [], envProxy);

                    // --- 3. 构造数据 ---
                    const vinfoPayload = {
                        "vl": {"vi": [{"fn": "dummy", "fvkey": "dummy"}]}, 
                        "tm": ctxData.tm,
                        "guid": ctxData.guid,
                        "flowid": "dummy_flowid",
                        "platform": ctxData.platform,
                        "sdtfrom": ctxData.sdtfrom,
                        "appVer": ctxData.appVer,
                        "anc": inputAnc
                    };

                    // 构造输入对象 (模拟 ProxyHttp 的 resData)
                    const mockResData = {
                        "errCode": 0,
                        "vinfo": JSON.stringify(vinfoPayload)
                    };
                    
                    // 构造 this 上下文 (模拟 Player Config)
                    const mockCtx = {
                        config: { 
                            instanceId: "puppeteer_id", 
                            businessConfig: { 
                                platform: ctxData.platform,
                                sdtfrom: ctxData.sdtfrom,
                                guid: ctxData.guid
                            },
                            platform: ctxData.platform,
                            sdtfrom: ctxData.sdtfrom
                        },
                        playerInstanceId: "puppeteer_id",
                        logger: { 
                            log: (...args) => console.log("[VM Log]", ...args), 
                            error: (...args) => console.error("[VM Err]", ...args) 
                        },
                        getCommonKv: (key) => {
                            if (key && key.indexOf) {
                                if (key.indexOf("platform") > -1) return ctxData.platform;
                                if (key.indexOf("sdtfrom") > -1) return ctxData.sdtfrom;
                                if (key.indexOf("guid") > -1) return ctxData.guid;
                            }
                            return "";
                        }
                    };

                    console.log("执行 responseModifier...");
                    
                    // --- 4. 执行 ---
                    const result = responseModifier.call(mockCtx, mockResData);
                    
                    // 处理异步结果
                    const finalData = await Promise.resolve(result);
                    resolve(finalData || mockResData);

                } catch (e) {
                    reject(e.toString() + "\n" + e.stack);
                }
            });
        }, RAW_BYTECODE, TARGET_ANC, CTX_DATA);

        console.log("\n[+] 最终结果:");
        console.log("---------------------------------------------------");
        
        let vinfo = result.vinfo;
        if (typeof vinfo === 'string') {
            try { vinfo = JSON.parse(vinfo); } catch(e){}
        }

        if (vinfo && vinfo.anc) {
            if (typeof vinfo.anc === 'object') {
                console.log("✅ [成功] anc 已解密为对象:", JSON.stringify(vinfo.anc, null, 2));
            } else if (vinfo.anc !== TARGET_ANC) {
                console.log("✅ [成功] anc 字符串已变化:", vinfo.anc);
            } else {
                console.log("⚠️ [注意] anc 值未发生变化。");
                console.log("Current anc:", vinfo.anc);
                console.log("-> 如果这是透传 Token，这是正常现象。");
                console.log("-> 否则请再次检查 TM/GUID 是否与抓包一致。");
            }
        } else {
            console.log("Result:", result);
        }
        console.log("---------------------------------------------------");

    } catch (e) {
        console.error("[-] 执行出错:", e);
    } finally {
        if (browser) await browser.close();
    }
})();