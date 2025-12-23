const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PLAYER_JS_PATH = path.join(__dirname, 'source_final.js');

// =======================================================
// [配置] 抓包数据 (务必与 anc 来源请求一致)
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

        // [增强] 更通用的正则匹配 VM 定义
        // 匹配结构: var xx = function() { function e(...) ... return function(e,t) ... }()
        const cyDefRegex = /(var\s+cy+\s*=\s*function\s*\(\)\s*\{\s*function\s+[a-zA-Z]\([^\)]*\)\s*\{[\s\S]+?\}\(\);)/;
        const cyMatch = sourceCode.match(cyDefRegex);
        
        if (!cyMatch) throw new Error("无法定位 VM 函数定义，源码结构可能已变更");
        
        // 提取变量名 (例如 cy)
        const varNameMatch = cyMatch[1].match(/var\s+(cy)\s*=/);
        const vmVarName = varNameMatch ? varNameMatch[1] : "cy";
        console.log(`[-] 识别到 VM 变量名为: ${vmVarName}`);

        // 提取字节码调用
        const bytecodeRegex = new RegExp(`${vmVarName}\\("([^"]+)"`);
        const bytecodeMatch = sourceCode.match(bytecodeRegex);
        if (!bytecodeMatch) throw new Error("无法提取字节码");
        const RAW_BYTECODE = bytecodeMatch[1];
        
        // 替换源码：将局部变量改为全局 window 挂载
        // var cy = ...  ==>  window.cy = ...
        const injectedSource = sourceCode.replace(cyMatch[1], `window.cy = ${cyMatch[1].substring(cyMatch[1].indexOf('=') + 1)}`);

        console.log("[-] 启动浏览器环境...");
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setRequestInterception(true);
        page.on('request', req => ['image', 'font', 'media'].includes(req.resourceType()) ? req.abort() : req.continue());

        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', { waitUntil: 'domcontentloaded' });

        console.log("[-] 注入代码并执行...");

        const result = await page.evaluate(async (code, bytecode, anc, ctx) => {
            return new Promise(async (resolve, reject) => {
                try {
                    // 1. 注入辅助函数
                    window.gy = e => (e && typeof Symbol != "undefined" && e.constructor === Symbol) ? "symbol" : typeof e;
                    window.ly = (e, t) => (t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance]) ? !!t[Symbol.hasInstance](e) : e instanceof t;

                    // 2. 执行源码，挂载 window.cy
                    // 为了防止源码中其他逻辑报错干扰，我们用 try-catch 包裹非关键部分
                    try {
                        window.eval(code);
                    } catch(e) {
                        console.log("源码执行部分报错(通常可忽略):", e.message);
                    }

                    if (typeof window.cy !== 'function') {
                        throw new Error("VM 注入失败: window.cy 未定义");
                    }

                    // 3. 环境代理
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

                    // 4. 初始化 VM
                    const modifierFactory = window.cy(bytecode, false);
                    const responseModifier = modifierFactory(6327, [], envProxy);

                    // =========================================================
                    // 5. [核心修复] 防爆 Proxy 上下文
                    // 无论 VM 读取 this.config 下的什么奇怪属性，都返回默认值
                    // 彻底解决 reading '4' of undefined 问题
                    // =========================================================
                    const createSafeConfig = (baseConfig) => {
                        return new Proxy(baseConfig, {
                            get: function(target, prop) {
                                if (prop in target) return target[prop];
                                console.log(`[Trace] VM 读取了缺失的配置: config.${String(prop)}`);
                                // 如果 VM 试图读取不存在的属性，返回一个“安全对象”
                                // 这个对象转字符串是空串，取属性也是空串，防止崩溃
                                const safeObj = new String(""); 
                                return new Proxy(safeObj, {
                                    get: (t, p) => {
                                        if (p === Symbol.toPrimitive) return () => "";
                                        return ""; // 无限层级返回空串
                                    }
                                });
                            }
                        });
                    };

                    const baseConfig = {
                        instanceId: "puppeteer_inst",
                        businessConfig: ctx, // 注入完整上下文
                        // 扁平化注入，防止 VM 直接读 this.config.platform
                        ...ctx 
                    };

                    const mockCtx = {
                        config: createSafeConfig(baseConfig),
                        playerInstanceId: "puppeteer_inst",
                        logger: { log: console.log, error: console.error },
                        getCommonKv: (key) => {
                            // 简单的 KV 映射
                            for (let k in ctx) {
                                if (key.toLowerCase().includes(k.toLowerCase())) return ctx[k];
                            }
                            return "";
                        }
                    };

                    // 6. 构造数据
                    const mockResData = {
                        "errCode": 0,
                        "vinfo": JSON.stringify({
                            "vl": {"vi": [{"fn": "dummy", "fvkey": "dummy"}]}, 
                            "tm": ctx.tm,
                            "guid": ctx.guid,
                            "anc": anc
                        })
                    };

                    console.log("VM 启动执行...");
                    const result = responseModifier.call(mockCtx, mockResData);
                    
                    // 等待 Promise
                    const finalData = await Promise.resolve(result);
                    resolve(finalData || mockResData);

                } catch (e) {
                    reject(e.toString() + "\nStack: " + e.stack);
                }
            });
        }, injectedSource, RAW_BYTECODE, TARGET_ANC, CTX_DATA);

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
                console.log("⚠️ [结论] anc 未变化。");
                console.log("原因：VM 正常运行结束但未修改 anc。");
                console.log("推论：前端 JS 仅负责透传 anc，不负责解密。");
            }
        } else {
            console.log("Result (Raw):", result);
        }
        console.log("---------------------------------------------------");

    } catch (e) {
        console.error("[-] 执行出错:", e);
    } finally {
        if (browser) await browser.close();
    }
})();