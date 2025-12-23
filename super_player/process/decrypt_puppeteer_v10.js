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

(async () => {
    let browser;
    try {
        console.log("[-] 正在读取源码文件...");
        let sourceCode = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

        // 1. 提取 VM 定义
        const cyDefRegex = /(var\s+(cy+)\s*=\s*function\s*\(\)\s*\{\s*function\s+[a-zA-Z]\([^\)]*\)\s*\{[\s\S]+?\}\(\);)/;
        const cyMatch = sourceCode.match(cyDefRegex);
        if (!cyMatch) throw new Error("无法定位 VM 定义");
        
        const vmVarName = cyMatch[2]; 

        // 2. 提取字节码
        const bytecodeRegex = new RegExp(`${vmVarName}\\s*\\(\\s*(['"])([^'"]+)\\1\\s*,\\s*false\\s*\\)`);
        const bytecodeMatch = sourceCode.match(bytecodeRegex);
        if (!bytecodeMatch) throw new Error("无法提取字节码");
        const RAW_BYTECODE = bytecodeMatch[2];

        // 3. 提取 Offset
        const offsetRegex = /\)\s*\(\s*(\d+)\s*,/;
        const offsetMatch = sourceCode.match(offsetRegex);
        const ENTRY_OFFSET = offsetMatch ? parseInt(offsetMatch[1]) : 6327;

        console.log(`[-] 提取成功: VM=${vmVarName}, Offset=${ENTRY_OFFSET}`);

        // 构造注入代码
        const helperCode = `
            function gy(e) { return (e && typeof Symbol != "undefined" && e.constructor === Symbol) ? "symbol" : typeof e; }
            function ly(e, t) { return (t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance]) ? !!t[Symbol.hasInstance](e) : e instanceof t; }
        `;
        const vmCode = cyMatch[1].replace(`var ${vmVarName}`, `window.${vmVarName}`);

        console.log("[-] 启动浏览器...");
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        
        // 开启 Console 日志转发
        page.on('console', msg => {
            const text = msg.text();
            if (text.startsWith('[VM Access]')) console.log(text);
        });

        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', { waitUntil: 'domcontentloaded' });

        console.log("[-] 注入代码并执行...");

        const result = await page.evaluate(async (helpers, vmSource, varName, bytecode, offset, inputAnc, ctxData) => {
            return new Promise(async (resolve, reject) => {
                try {
                    // --- 1. 注入代码 ---
                    window.eval(helpers);
                    window.eval(vmSource);
                    
                    const vmFactory = window[varName];
                    if (typeof vmFactory !== 'function') throw new Error("VM 注入失败");

                    // --- 2. 构造防爆代理 (Safe Proxy) ---
                    // 这个代理的核心作用：永远不返回 undefined/null
                    const createSafeProxy = (name, targetValue) => {
                        // 如果目标是基础类型，直接返回
                        if (targetValue !== undefined && targetValue !== null && typeof targetValue !== 'object' && typeof targetValue !== 'function') {
                            return targetValue;
                        }

                        // 默认目标是一个空函数（可被调用，可被索引）
                        const target = (typeof targetValue === 'function') ? targetValue : function() {};
                        
                        return new Proxy(target, {
                            get: (obj, prop) => {
                                // console.log(`[VM Access] Read: ${name}.${String(prop)}`);

                                // 1. 优先从真实对象取值
                                let val = undefined;
                                try {
                                    if (targetValue) val = targetValue[prop];
                                } catch(e) {}

                                // 2. 特殊属性处理
                                if (prop === Symbol.toPrimitive) return () => "";
                                if (prop === "toString") return () => (val ? val.toString() : "[object Object]");
                                if (prop === "then") return undefined; // 这里的 undefined 是必须的，否则 Promise 会卡死

                                // 3. 如果取到了有效值 (非 null/undefined)，递归包装它
                                if (val !== undefined && val !== null) {
                                    return createSafeProxy(`${name}.${String(prop)}`, val);
                                }

                                // 4. 如果是 undefined，返回一个“安全字符串代理”
                                // 这样 xxx[4] 会返回 undefined (字符串索引越界)，而不是报错
                                // 但为了保险，我们返回一个带有 length 的空对象代理
                                console.log(`[VM Access] ⚠️ Missing: ${name}.${String(prop)} -> Auto Mocking`);
                                return createSafeProxy(`${name}.${String(prop)}`, ""); 
                            },
                            apply: (target, thisArg, args) => {
                                // console.log(`[VM Access] Call: ${name}(${args.length} args)`);
                                // 如果原始值是函数，尝试执行
                                let ret = undefined;
                                if (typeof targetValue === 'function') {
                                    try { ret = targetValue.apply(thisArg, args); } catch(e) {}
                                }
                                // 返回包装后的结果
                                return createSafeProxy(`${name}()`, ret);
                            }
                        });
                    };

                    // --- 3. 构造全局环境代理 ---
                    // 我们不使用 Getter，而是直接用 Proxy 拦截 window
                    const safeWindow = createSafeProxy("window", window);
                    
                    // 构造 EnvProxy (VM 的第三个参数)
                    // 我们显式列出所有可能访问的全局变量，确保它们都经过 safeProxy 包装
                    const envProxyTarget = {
                        Object: window.Object,
                        Uint32Array: window.Uint32Array,
                        window: window,
                        String: window.String,
                        Number: window.Number,
                        JSON: window.JSON,
                        Date: window.Date,
                        Math: window.Math,
                        Promise: window.Promise,
                        navigator: window.navigator,
                        console: window.console,
                        document: window.document,
                        location: window.location,
                        screen: window.screen,
                        performance: window.performance,
                        moduleQimei: { tools: { getStorageItem:()=>"", autoTry:(f)=>f() } }
                    };

                    const envProxy = new Proxy(envProxyTarget, {
                        get: (target, prop) => {
                            // 如果在 envProxyTarget 里有，返回包装后的值
                            if (prop in target) {
                                return createSafeProxy(`Global.${String(prop)}`, target[prop]);
                            }
                            // 如果没有，尝试从 window 取，并包装
                            let val = window[prop];
                            return createSafeProxy(`Global.${String(prop)}`, val);
                        }
                    });

                    // --- 4. 构造 this 上下文 ---
                    const flatContext = {
                        ...ctxData,
                        config: { ...ctxData, businessConfig: ctxData },
                        businessConfig: ctxData,
                        playerInstanceId: "puppeteer_inst",
                        logger: { log: ()=>{}, error: ()=>{} },
                        getCommonKv: (key) => {
                            if (!key) return "";
                            for (let k in ctxData) {
                                if (key.indexOf(k) > -1) return ctxData[k];
                            }
                            return "";
                        }
                    };
                    const safeCtx = createSafeProxy("ctx", flatContext);

                    // --- 5. 初始化 VM ---
                    const responseModifier = vmFactory(bytecode, false)(offset, [], envProxy);

                    // --- 6. 执行 ---
                    const mockResData = {
                        "errCode": 0,
                        "vinfo": JSON.stringify({
                            "vl": {"vi": [{"fn": "dummy", "fvkey": "dummy"}]}, 
                            "tm": ctxData.tm,
                            "guid": ctxData.guid,
                            "anc": inputAnc
                        })
                    };

                    console.log("VM Start...");
                    const result = await responseModifier.call(safeCtx, mockResData);
                    
                    resolve(result || mockResData);

                } catch (e) {
                    reject(e.toString() + "\nStack: " + e.stack);
                }
            });
        }, helperCode, vmCode, vmVarName, RAW_BYTECODE, ENTRY_OFFSET, TARGET_ANC, CTX_DATA);

        console.log("\n[+] 最终结果:");
        console.log("---------------------------------------------------");
        
        let vinfo = result.vinfo;
        if (typeof vinfo === 'string') {
            try { vinfo = JSON.parse(vinfo); } catch(e){}
        }

        if (vinfo && vinfo.anc) {
            console.log("ANC Raw:", vinfo.anc);
            if (typeof vinfo.anc === 'object') {
                console.log("✅ [成功] anc 已解密为对象:", JSON.stringify(vinfo.anc, null, 2));
            } else if (vinfo.anc !== TARGET_ANC) {
                console.log("✅ [成功] anc 字符串已变化 (解密成功)");
            } else {
                console.log("⚠️ [结论] anc 未变化 (确认是透传模式)");
                
                // 验证是不是 Token
                try {
                    const b64 = Buffer.from(vinfo.anc, 'base64').toString();
                    if (b64.includes("rc")) {
                         console.log("Token 结构验证: 包含 'rc' 字段，确认为服务端校验 Token。");
                    }
                } catch(e){}
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