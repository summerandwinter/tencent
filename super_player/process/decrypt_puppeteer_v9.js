const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PLAYER_JS_PATH = path.join(__dirname, 'source_final.js');

// =======================================================
// [配置] 抓包数据
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

function extractCoreLogic() {
    console.log("[-] 正在读取源码文件...");
    const source = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

    // 1. 提取 VM 定义
    const cyDefRegex = /(var\s+(cy+)\s*=\s*function\s*\(\)\s*\{\s*function\s+[a-zA-Z]\([^\)]*\)\s*\{[\s\S]+?\}\(\);)/;
    const cyMatch = source.match(cyDefRegex);
    if (!cyMatch) throw new Error("无法定位 VM 定义");
    
    const vmVarName = cyMatch[2]; // e.g. "cy"

    // 2. 提取字节码
    const bytecodeRegex = new RegExp(`${vmVarName}\\s*\\(\\s*(['"])([^'"]+)\\1\\s*,\\s*false\\s*\\)`);
    const bytecodeMatch = source.match(bytecodeRegex);
    if (!bytecodeMatch) throw new Error("无法提取字节码");

    // 3. 提取 Offset
    const offsetRegex = /\)\s*\(\s*(\d+)\s*,/;
    const offsetMatch = source.match(offsetRegex);
    const offset = offsetMatch ? parseInt(offsetMatch[1]) : 6327;

    return {
        // [关键] 我们不替换 var，而是将在 evaluate 中拼接辅助函数
        cySource: cyMatch[1],
        vmVarName: vmVarName,
        bytecode: bytecodeMatch[2],
        entryOffset: offset
    };
}

(async () => {
    let browser;
    try {
        const codeData = extractCoreLogic();
        console.log(`[-] 提取成功: VM=${codeData.vmVarName}, Offset=${codeData.entryOffset}`);

        console.log("[-] 启动浏览器...");
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setRequestInterception(true);
        page.on('request', req => ['image', 'font', 'media'].includes(req.resourceType()) ? req.abort() : req.continue());

        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', { waitUntil: 'domcontentloaded' });

        console.log("[-] 注入代码并执行...");

        const result = await page.evaluate(async (codeData, inputAnc, ctxData) => {
            return new Promise(async (resolve, reject) => {
                try {
                    // --- 1. 构造注入脚本 ---
                    // [关键修复] 将 helper 函数直接定义在 eval 字符串的顶部
                    // 这样它们对于 cy 函数就是可见的闭包变量，彻底解决 ReferenceError
                    const helperCode = `
                        function gy(e) { return (e && typeof Symbol != "undefined" && e.constructor === Symbol) ? "symbol" : typeof e; }
                        function ly(e, t) { return (t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance]) ? !!t[Symbol.hasInstance](e) : e instanceof t; }
                    `;
                    
                    // 将 cy 的定义改为全局挂载: window.cy = ...
                    const vmCode = codeData.cySource.replace(`var ${codeData.vmVarName}`, `window.${codeData.vmVarName}`);
                    
                    // 合并执行
                    window.eval(helperCode + "\n" + vmCode);

                    const vmFactory = window[codeData.vmVarName];
                    if (typeof vmFactory !== 'function') throw new Error("VM 注入失败");

                    // --- 2. 准备万能代理 (解决 reading '4' error) ---
                    const createMagicProxy = (realData) => {
                        const target = function() {}; 
                        return new Proxy(target, {
                            get: (obj, prop) => {
                                // 优先返回真实数据
                                if (realData && prop in realData) return realData[prop];
                                
                                // 防崩溃处理
                                if (prop === Symbol.toPrimitive) return () => "";
                                if (prop === "toString") return () => "[object Object]";
                                if (prop === "then") return undefined; 

                                // 针对特定字段返回空字符串，防止 substring/slice 报错
                                if (["sdtfrom", "platform", "appVer", "guid", "flowid", "tm"].includes(prop)) {
                                    return realData[prop] || ""; 
                                }

                                // 递归
                                return createMagicProxy(realData);
                            }
                        });
                    };

                    // 构造扁平化上下文
                    const flatContext = {
                        ...ctxData,
                        businessConfig: ctxData,
                        config: { ...ctxData, businessConfig: ctxData }
                    };
                    const magicCtx = createMagicProxy(flatContext);

                    // --- 3. 准备环境代理 ---
                    const mockQimei = { tools: { getStorageItem:()=>"", autoTry:(f)=>f() } };
                    const envProxy = {
                        get Object() { return window.Object; },
                        get moduleQimei() { return mockQimei; }, 
                        get window() { return window; },
                        get String() { return window.String; },
                        get Number() { return window.Number; },
                        get JSON() { return window.JSON; },
                        get Date() { return window.Date; },
                        get Math() { return window.Math; },
                        get Promise() { return window.Promise; },
                        get navigator() { return window.navigator; },
                        get console() { return window.console; },
                        get document() { return window.document; },
                        get location() { return window.location; },
                        // 万能回退
                        get: (target, prop) => {
                            if (prop in window) return window[prop];
                            // 如果 VM 访问了未定义的全局变量，也返回 MagicProxy 防止报错
                            return createMagicProxy();
                        }
                    };
                    const safeEnvProxy = new Proxy(envProxy, {
                        get: (target, prop) => {
                            if (prop in target) return target[prop];
                            if (prop in window) return window[prop];
                            return createMagicProxy();
                        }
                    });

                    // --- 4. 初始化 VM ---
                    // cy(bytecode, false)(offset, stack, env)
                    const responseModifier = vmFactory(codeData.bytecode, false)(codeData.entryOffset, [], safeEnvProxy);

                    // --- 5. 执行 ---
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
                    
                    const resultPromise = responseModifier.call(magicCtx, mockResData);
                    const result = await Promise.resolve(resultPromise);
                    
                    resolve(result || mockResData);

                } catch (e) {
                    reject(e.toString() + "\nStack: " + e.stack);
                }
            });
        }, codeData, TARGET_ANC, CTX_DATA);

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
                console.log("⚠️ [结论] anc 未变化 (透传模式)。");
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