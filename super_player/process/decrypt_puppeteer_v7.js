const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PLAYER_JS_PATH = path.join(__dirname, 'source_final.js');

// =======================================================
// [配置] 抓包数据
// 必须与获取 anc 时的数据完全一致，否则解密出的结果会校验失败
// =======================================================
const TARGET_ANC = "eyJyYyI6IkdxQ2xScU81TXZU"; 
const CTX_DATA = {
    tm: "1765955162",          
    guid: "3c4e1a2d05e04405",  
    platform: "10201",         
    sdtfrom: "v1010",          
    appVer: "1.57.5",
    flowid: "962f58987c911fbdf3d7c268cae5feb0"
};

// =======================================================

(async () => {
    let browser;
    try {
        console.log("[-] 正在读取源码文件...");
        let sourceCode = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

        // 1. 智能定位 VM 定义
        // 匹配 var xx = function() { ... return function(e,t) { ... } }();
        const cyDefRegex = /(var\s+(cy+)\s*=\s*function\s*\(\)\s*\{\s*function\s+[a-zA-Z]\([^\)]*\)\s*\{[\s\S]+?\}\(\);)/;
        const cyMatch = sourceCode.match(cyDefRegex);
        
        if (!cyMatch) throw new Error("无法定位 VM 函数定义，源码结构可能已变更");
        
        const vmDefCode = cyMatch[1];
        const vmVarName = cyMatch[2]; // 自动提取变量名，如 cy, S, A 等
        console.log(`[-] 识别到 VM 变量名为: ${vmVarName}`);

        // 2. 智能提取字节码
        // 匹配 xx("...", false) 或 xx('...', false)
        // 使用更宽松的正则
        const bytecodeRegex = new RegExp(`${vmVarName}\\s*\\(\\s*(['"])([^'"]+)\\1\\s*,\\s*false\\s*\\)`);
        const bytecodeMatch = sourceCode.match(bytecodeRegex);
        
        if (!bytecodeMatch) throw new Error(`无法提取字节码，请检查源码中是否有 ${vmVarName}("...", false) 调用`);
        
        const RAW_BYTECODE = bytecodeMatch[2];
        console.log(`[-] 字节码提取成功 (长度: ${RAW_BYTECODE.length})`);

        // 3. 提取 Offset
        // 匹配 )(6327, 
        const offsetRegex = /\)\s*\(\s*(\d+)\s*,/;
        const offsetMatch = sourceCode.match(offsetRegex);
        const ENTRY_OFFSET = offsetMatch ? parseInt(offsetMatch[1]) : 6327;
        console.log(`[-] Entry Offset: ${ENTRY_OFFSET}`);

        console.log("[-] 启动浏览器环境...");
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setRequestInterception(true);
        page.on('request', req => ['image', 'font', 'media'].includes(req.resourceType()) ? req.abort() : req.continue());

        // 导航以获取正确域环境
        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', { waitUntil: 'domcontentloaded' });

        console.log("[-] 注入代码并执行...");

        const result = await page.evaluate(async (fnCode, varName, rawCode, offset, inputAnc, ctxData) => {
            return new Promise(async (resolve, reject) => {
                try {
                    // --- 环境准备 ---
                    window.gy = e => (e && typeof Symbol != "undefined" && e.constructor === Symbol) ? "symbol" : typeof e;
                    window.ly = (e, t) => (t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance]) ? !!t[Symbol.hasInstance](e) : e instanceof t;

                    // --- 注入 VM ---
                    // 将局部变量改为全局: var cy = ... -> window.cy = ...
                    const globalFnCode = fnCode.replace(`var ${varName}`, `window.${varName}`);
                    window.eval(globalFnCode);

                    const vmFactory = window[varName];
                    if (typeof vmFactory !== 'function') {
                        throw new Error(`VM 注入失败: window.${varName} 不是函数`);
                    }

                    // --- 模拟依赖模块 ---
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

                    // --- 初始化 VM ---
                    // factory(bytecode, false) -> execFunction
                    // execFunction(offset, stack, env) -> modifier
                    const responseModifier = vmFactory(rawCode, false)(offset, [], envProxy);

                    // --- [关键修复] 构造正确的 this 上下文 ---
                    // 之前的错误是因为 VM 读取 this.sdtfrom 读不到。
                    // 我们直接构造一个扁平对象，包含所有可能的字段。
                    const playerConfig = {
                        instanceId: "puppeteer_inst",
                        // 兼容 this.config.businessConfig.xxx
                        config: {
                            businessConfig: ctxData,
                            ...ctxData // 兼容 this.config.sdtfrom
                        },
                        // 兼容 this.businessConfig.xxx
                        businessConfig: ctxData,
                        // 兼容 this.sdtfrom (最直接的读取方式)
                        ...ctxData,
                        
                        logger: { log: ()=>{}, error: ()=>{} },
                        getCommonKv: (key) => {
                            for (let k in ctxData) {
                                if (key && key.indexOf && key.indexOf(k) > -1) return ctxData[k];
                            }
                            return "";
                        }
                    };

                    // --- 构造输入数据 ---
                    const mockResData = {
                        "errCode": 0,
                        "vinfo": JSON.stringify({
                            "vl": {"vi": [{"fn": "dummy", "fvkey": "dummy"}]}, 
                            "tm": ctxData.tm,
                            "guid": ctxData.guid,
                            "anc": inputAnc
                        })
                    };

                    console.log("VM 启动执行...");
                    
                    // 使用正确的 this 上下文调用
                    const resultPromise = responseModifier.call(playerConfig, mockResData);
                    const result = await Promise.resolve(resultPromise);
                    
                    resolve(result || mockResData);

                } catch (e) {
                    reject(e.toString() + "\nStack: " + e.stack);
                }
            });
        }, vmDefCode, vmVarName, RAW_BYTECODE, ENTRY_OFFSET, TARGET_ANC, CTX_DATA);

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
                console.log("⚠️ [无变化] anc 未解密。");
                console.log("可能原因: 1. 前端仅透传; 2. 上下文(tm/guid)校验失败导致跳过解密。");
            }
        } else {
            console.log("Result:", JSON.stringify(result, null, 2));
        }
        console.log("---------------------------------------------------");

    } catch (e) {
        console.error("[-] 执行出错:", e);
    } finally {
        if (browser) await browser.close();
    }
})();