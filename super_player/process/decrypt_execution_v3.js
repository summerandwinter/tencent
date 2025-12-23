const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PLAYER_JS_PATH = path.join(__dirname, 'source_final.js');

// =======================================================
// [配置]
// =======================================================
// 你要解密的 anc
const TARGET_ANC = "eyJyYyI6IkdxQ2xScU81TXZU"; 

// 必须与 anc 对应的时间戳和 GUID (非常重要，错一个都会导致解密失败)
const CTX_DATA = {
    tm: "1765955162",          
    guid: "3c4e1a2d05e04405",  
    platform: "10201",         
    sdtfrom: "v1010",
    appVer: "1.57.5",
    flowid: "962f58987c911fbdf3d7c268cae5feb0"
};

(async () => {
    let browser;
    try {
        console.log("[-] 读取源码...");
        let sourceCode = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

        // 1. 注入 Hook 点
        // 我们在源码中找到 responseModifier 被调用的地方，或者定义的地方，强行把我们的数据塞进去测试
        // 搜索源码中的 "parseResponseData" (HC类) 或 "responseModifier"
        // 我们选择暴力替换：将 var cy = ... 替换为 window.cy = ... 以便后续调用
        if (sourceCode.includes('var cy = function')) {
            sourceCode = sourceCode.replace('var cy = function', 'window.cy = function');
        }

        console.log("[-] 启动浏览器...");
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // 2. 拦截请求 (只放行核心资源)
        await page.setRequestInterception(true);
        page.on('request', req => {
            if (req.resourceType() === 'document' || req.url().includes('superplayer')) {
                req.continue();
            } else {
                req.abort();
            }
        });

        console.log("[-] 导航到目标页面...");
        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', { waitUntil: 'domcontentloaded' });

        console.log("[-] 注入代码并 Hook...");
        
        // 3. 在浏览器内执行所有逻辑
        const result = await page.evaluate(async (injectedCode, targetAnc, ctxData) => {
            return new Promise(async (resolve, reject) => {
                try {
                    // A. 注入源码 (暴露 window.cy)
                    const mockContainer = document.createElement('div');
                    mockContainer.id = 'player-container';
                    document.body.appendChild(mockContainer);
                    window.eval(injectedCode);

                    if (typeof window.cy !== 'function') {
                        return reject("源码注入失败，window.cy 未找到");
                    }

                    // B. 提取字节码和 Offset (在浏览器内做，更准确)
                    // 这里的正则和 Node.js 里的一样，但运行在浏览器 JS 引擎里
                    const codeStr = injectedCode;
                    const bytecodeMatch = codeStr.match(/cy\("([^"]+)"/);
                    const offsetMatch = codeStr.match(/\)\s*\(\s*(\d+)\s*,/);
                    
                    if (!bytecodeMatch || !offsetMatch) return reject("无法提取字节码参数");
                    
                    const rawBytecode = bytecodeMatch[1];
                    const entryOffset = parseInt(offsetMatch[1]);

                    // C. 实例化 VM
                    console.log("初始化 VM...");
                    
                    // 构造环境代理 (复用浏览器的真实环境)
                    const envProxy = {
                        get Object() { return window.Object; },
                        get moduleQimei() { return { tools: { getStorageItem:()=>"", autoTry:(f)=>f() } }; },
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

                    const modifierFactory = window.cy(rawBytecode, false);
                    const responseModifier = modifierFactory(entryOffset, [], envProxy);

                    // D. 构造 Context (模拟 ProxyHttp 调用时的 this)
                    // 这是最关键的一步，必须完全匹配 VM 的读取习惯
                    const mockContext = {
                        config: {
                            instanceId: "hook_instance",
                            // VM 可能会读 config.businessConfig.xxx
                            businessConfig: ctxData,
                            // VM 也可能读 config.xxx
                            ...ctxData
                        },
                        playerInstanceId: "hook_instance",
                        logger: {
                            log: (...args) => console.log("[VM]", ...args),
                            error: (...args) => console.error("[VM Error]", ...args)
                        },
                        // 很多版本通过这个方法获取配置
                        getCommonKv: (key) => {
                            // 简单的包含匹配
                            for(let k in ctxData) {
                                if (key && key.indexOf && key.indexOf(k) > -1) return ctxData[k];
                            }
                            return "";
                        }
                    };

                    // E. 构造输入数据
                    const inputData = {
                        "errCode": 0,
                        "vinfo": JSON.stringify({
                            "vl": {"vi": [{"fn": "dummy", "fvkey": "dummy"}]},
                            "tm": ctxData.tm,
                            "guid": ctxData.guid,
                            "anc": targetAnc
                        })
                    };

                    console.log("开始执行 responseModifier...");
                    
                    // F. 执行
                    const resultPromise = responseModifier.call(mockContext, inputData);
                    const finalResult = await Promise.resolve(resultPromise);
                    
                    resolve(finalResult || inputData);

                } catch (e) {
                    reject(e.toString() + "\n" + e.stack);
                }
            });
        }, sourceCode, TARGET_ANC, CTX_DATA);

        console.log("\n[+] 执行结果:");
        console.log("---------------------------------------------------");
        
        let vinfo = result.vinfo;
        let vinfoStr = "";
        
        if (typeof vinfo === 'string') {
            vinfoStr = vinfo;
            try { vinfo = JSON.parse(vinfo); } catch(e){}
        } else {
            vinfoStr = JSON.stringify(vinfo);
        }

        // 深度比对
        if (vinfo && vinfo.anc) {
            console.log("Input ANC :", TARGET_ANC);
            console.log("Output ANC:", vinfo.anc);
            
            if (typeof vinfo.anc === 'object') {
                console.log("\n✅ [成功] ANC 已解密为对象:", JSON.stringify(vinfo.anc, null, 2));
            } else if (vinfo.anc !== TARGET_ANC) {
                console.log("\n✅ [成功] ANC 字符串已改变 (解密成功)");
            } else {
                console.log("\n❌ [失败] ANC 完全未变化。");
                
                // 进行 Base64 分析
                try {
                    const b64 = Buffer.from(vinfo.anc, 'base64').toString();
                    if (b64.includes('"rc"')) {
                        console.log("   -> ANC Base64 内容: ", b64);
                        console.log("   -> 这是一个包含 'rc' 的 JSON。");
                        console.log("   -> 结论：JS 代码的作用仅仅是透传这个 Token。");
                        console.log("   -> 真正的解密/校验逻辑在服务端，或者在 WASM/Flash 内核中。");
                    }
                } catch(e) {}
            }
        } else {
            console.log("返回结果异常:", result);
        }
        console.log("---------------------------------------------------");

    } catch (e) {
        console.error("[-] 脚本错误:", e);
    } finally {
        if (browser) await browser.close();
    }
})();