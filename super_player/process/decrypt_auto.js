const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// ==========================================
// 配置区域
// ==========================================
const PLAYER_JS_PATH = path.join(__dirname, 'superplayer-txv.js');

// [关键] 这里填入你需要解密的 anc
const TARGET_ANC = "eyJyYyI6IkdxQ2xScU81TXZU"; 

// [关键] 这里填入抓包时的上下文信息 (必须与获取 anc 时的一致)
// 这些字段会被 VM 读取用于校验或生成 Key
const CONTEXT_DATA = {
    tm: "1765955162",          // vinfoparam.tm
    guid: "3c4e1a2d05e04405",  // vinfoparam.guid
    platform: "10201",         // vinfoparam.platform
    sdtfrom: "v1010",          // vinfoparam.sdtfrom
    appVer: "1.57.5",          // vinfoparam.appVer
    flowid: "962f58987c911fbdf3d7c268cae5feb0" // vinfoparam.flowid (如果有)
};

// ==========================================
// 核心逻辑
// ==========================================

function extractCode() {
    console.log("[-] 正在读取源码文件...");
    const source = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

    // 1. 提取 VM 解释器定义 (var cy = function... 之前的代码)
    // 我们提取整个闭包结构的一部分
    const cyDefRegex = /( cy\s*=\s*function\s*\(\)\s*\{[\s\S]+?\}\(\);)/;
    const cyDefMatch = source.match(cyDefRegex);
    
    if (!cyDefMatch) {
        throw new Error("无法自动提取 cy 函数定义，请检查文件是否为 superplayer-txv.js");
    }

    // 2. 提取 VM 初始化调用 (cy("...", false))
    // 这是一个超长字符串
    const cyCallRegex = /cy\("([^"]+)"/g;
    const cyCallMatch = source.match(cyCallRegex);

    if (!cyCallMatch) {
        throw new Error("无法自动提取字节码调用 (cy(..., false))");
    }
    console.log(cyDefMatch)
    // 3. 提取 Offset (通常是 6327，但也可能变化)
    // 源码模式: cy(..., false)(6327, ...
    const offsetRegex = /cy\("[^"]+",\s*false\)\s*\(\s*(\d+)/;
    const offsetMatch = source.match(offsetRegex);
    const offset = offsetMatch ? parseInt(offsetMatch[1]) : 6327;

    return {
        cyDefinition: cyDefMatch[1],
        cyInvocation: cyCallMatch[1],
        entryOffset: offset
    };
}

(async () => {
    let browser;
    try {
        const codeParts = extractCode();
        console.log(`[-] 代码提取成功 (Offset: ${codeParts.entryOffset})`);

        console.log("[-] 启动浏览器环境...");
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // 伪装环境，绕过域名校验
        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', { waitUntil: 'domcontentloaded' });

        console.log("[-] 注入 VM 并执行...");

        const result = await page.evaluate(async (parts, inputAnc, ctxData) => {
            
            // --- 1. 注入辅助函数 ---
            window.gy = e => (e && typeof Symbol != "undefined" && e.constructor === Symbol) ? "symbol" : typeof e;
            window.ly = (e, t) => (t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance]) ? !!t[Symbol.hasInstance](e) : e instanceof t;
            
            // --- 2. 模拟 moduleQimei (VM 依赖) ---
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

            // --- 3. 构造环境代理 (EnvProxy) ---
            // 这是传给 VM 的第三个参数
            const envProxy = {
                get Object() { return window.Object; },
                get moduleQimei() { return mockQimei; }, // 修复 undefined error
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

            // --- 4. 动态执行提取的代码 ---
            // 4.1 定义 cy 函数到全局
            const evalCode = parts.cyDefinition.replace(/^var cy\s*=/, 'window.cy =');
            window.eval(evalCode);

            // 4.2 初始化 VM
            // 相当于: var modifierFactory = cy(bytecode, false);
            //        var responseModifier = modifierFactory(offset, [], envProxy);
            const modifierFactory = window.eval(parts.cyInvocation); 
            
            if (typeof modifierFactory !== 'function') {
                throw new Error("VM 初始化失败: cy(...) 返回的不是函数");
            }

            const responseModifier = modifierFactory(parts.entryOffset, [], envProxy);

            // --- 5. 构造 this 上下文 (关键修复) ---
            // 修复 'reading 4' 错误，补全所有可能被读取的配置项
            const mockThis = {
                config: {
                    instanceId: "puppeteer_inst",
                    businessConfig: {
                        platform: ctxData.platform,
                        sdtfrom: ctxData.sdtfrom,
                        guid: ctxData.guid,
                        appVer: ctxData.appVer
                    },
                    // 兼容旧版读取方式
                    platform: ctxData.platform,
                    sdtfrom: ctxData.sdtfrom
                },
                playerInstanceId: "puppeteer_inst",
                logger: {
                    log: (...args) => console.log("[VM Log]", ...args),
                    error: (...args) => console.error("[VM Error]", ...args)
                },
                // 某些逻辑可能会调用 getCommonKv
                getCommonKv: (key) => {
                    if (key.includes("platform")) return ctxData.platform;
                    if (key.includes("sdtfrom")) return ctxData.sdtfrom;
                    if (key.includes("guid")) return ctxData.guid;
                    return "";
                }
            };

            // --- 6. 构造输入数据 ---
            // 直接模拟 responseModifier 接收的参数结构
            const inputData = {
                "errCode": 0,
                "vinfo": JSON.stringify({
                    "vl": {"vi": [{"fn": "dummy", "fvkey": "dummy"}]}, // 伪造结构
                    "tm": ctxData.tm,
                    "guid": ctxData.guid,
                    "anc": inputAnc
                })
            };

            // --- 7. 执行 ---
            console.log("正在执行 responseModifier...");
            
            // 使用 call 绑定上下文
            const resultPromise = responseModifier.call(mockThis, inputData);
            
            // 等待异步结果
            const result = await Promise.resolve(resultPromise);
            
            return result || inputData;

        }, codeParts, TARGET_ANC, CONTEXT_DATA);

        console.log("\n[+] 执行完成，结果如下:");
        console.log("---------------------------------------------------");
        
        let vinfo = result.vinfo;
        if (typeof vinfo === 'string') {
            try { vinfo = JSON.parse(vinfo); } catch(e){}
        }

        if (vinfo && vinfo.anc) {
            console.log("ANC 类型:", typeof vinfo.anc);
            if (typeof vinfo.anc === 'object') {
                console.log("✅ 解密成功 (Object):", JSON.stringify(vinfo.anc, null, 2));
            } else if (vinfo.anc !== TARGET_ANC) {
                console.log("✅ 解密成功 (String Changed):", vinfo.anc);
            } else {
                console.log("⚠️ ANC 未变化 (可能是透传或参数不匹配)");
                // 尝试 Base64 解码 rc
                try {
                    const b64 = Buffer.from(vinfo.anc, 'base64').toString();
                    console.log("Base64 Raw:", b64);
                } catch(e) {}
            }
        } else {
            console.log("Result:", JSON.stringify(result, null, 2));
        }
        console.log("---------------------------------------------------");

    } catch (e) {
        console.error("[-] 错误:", e);
    } finally {
        if (browser) await browser.close();
    }
})();