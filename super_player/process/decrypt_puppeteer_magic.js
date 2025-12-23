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

function extractCoreLogic() {
    console.log("[-] 正在读取源码文件...");
    const source = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

    // 1. 提取 VM 定义 (cy 函数)
    const cyDefRegex = /(var\s+(cy+)\s*=\s*function\s*\(\)\s*\{\s*function\s+[a-zA-Z]\([^\)]*\)\s*\{[\s\S]+?\}\(\);)/;
    const cyMatch = source.match(cyDefRegex);
    if (!cyMatch) throw new Error("无法定位 VM 定义");
    
    // 2. 提取字节码
    const vmVarName = cyMatch[2];
    const bytecodeRegex = new RegExp(`${vmVarName}\\s*\\(\\s*(['"])([^'"]+)\\1\\s*,\\s*false\\s*\\)`);
    const bytecodeMatch = source.match(bytecodeRegex);
    if (!bytecodeMatch) throw new Error("无法提取字节码");

    // 3. 提取 Offset
    const offsetRegex = /\)\s*\(\s*(\d+)\s*,/;
    const offsetMatch = source.match(offsetRegex);
    const offset = offsetMatch ? parseInt(offsetMatch[1]) : 6327;

    return {
        // 修改源码：将 var cy 改为 window.cy，使其在浏览器内全局可用
        cySource: cyMatch[1].replace(`var ${vmVarName}`, `window.${vmVarName}`),
        vmVarName: vmVarName,
        bytecode: bytecodeMatch[2],
        entryOffset: offset
    };
}

(async () => {
    let browser;
    try {
        const codeData = extractCoreLogic();
        console.log(`[-] 提取成功: VM名=${codeData.vmVarName}, Offset=${codeData.entryOffset}`);

        console.log("[-] 启动浏览器...");
        browser = await puppeteer.launch({
            headless: "new",
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        
        const page = await browser.newPage();
        await page.setRequestInterception(true);
        page.on('request', req => ['image', 'font', 'media'].includes(req.resourceType()) ? req.abort() : req.continue());

        // 导航到真实环境
        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', { waitUntil: 'domcontentloaded' });

        console.log("[-] 在浏览器内执行解密逻辑...");

        // 核心：将所有逻辑放入浏览器执行，避免 Node.js 序列化问题
        const result = await page.evaluate(async (codeData, inputAnc, ctxData) => {
            return new Promise(async (resolve, reject) => {
                try {
                    // 1. 注入 cy 函数到 window
                    window.eval(codeData.cySource);
                    
                    const vmFactory = window[codeData.vmVarName];
                    if (typeof vmFactory !== 'function') throw new Error("VM 注入失败");

                    // 2. 定义万能代理 (在浏览器内部定义，确保有效)
                    // 这个代理会拦截所有属性读取，防止 reading '4' of undefined
                    const createMagicProxy = (realData) => {
                        // 目标设为函数，兼容 call/apply 调用
                        const target = function() {}; 
                        
                        return new Proxy(target, {
                            get: (obj, prop) => {
                                // 优先返回真实数据
                                if (realData && prop in realData) return realData[prop];
                                
                                // 特殊处理
                                if (prop === Symbol.toPrimitive) return () => "";
                                if (prop === "toString") return () => "[object Object]";
                                if (prop === "then") return undefined; // 防止被当做 Promise

                                // 如果访问 sdtfrom/platform 等可能被 slice/substring 的属性，返回空字符串
                                // 这样 sdtfrom[4] 得到 undefined，但不会报错 crash
                                if (prop === "sdtfrom" || prop === "platform" || prop === "appVer") {
                                    return realData[prop] || ""; 
                                }

                                // 递归返回 Proxy，支持 deep access (this.config.businessConfig...)
                                return createMagicProxy(realData);
                            }
                        });
                    };

                    // 3. 构造尽可能真实的上下文
                    // 腾讯播放器不同版本 Context 结构不同，我们全部铺平
                    const flatContext = {
                        ...ctxData,
                        businessConfig: ctxData,
                        config: {
                            ...ctxData,
                            businessConfig: ctxData
                        }
                    };

                    const magicCtx = createMagicProxy(flatContext);

                    // 4. 准备环境代理 (直接用浏览器原生 window)
                    const envProxy = {
                        get Object() { return window.Object; },
                        // 模拟 moduleQimei.tools
                        get moduleQimei() { 
                            return { tools: { getStorageItem:()=>"", autoTry:(f)=>f() } }; 
                        },
                        // 对于其他未定义的全局变量，回退到 window
                        get: (target, prop) => {
                            if (prop in window) return window[prop];
                            return undefined;
                        }
                    };
                    // 使用 Proxy 包装 envProxy 以支持动态查找
                    const safeEnvProxy = new Proxy(envProxy, {
                        get: (target, prop) => {
                            if (prop in target) return target[prop];
                            if (prop in window) return window[prop];
                            return undefined;
                        }
                    });

                    // 5. 初始化 VM
                    // cy(bytecode, false)(offset, stack, env)
                    const responseModifier = vmFactory(codeData.bytecode, false)(codeData.entryOffset, [], safeEnvProxy);

                    // 6. 构造输入
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
                    
                    // 7. 执行
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
                // 手动 Base64 检查
                try {
                    const b64 = Buffer.from(vinfo.anc, 'base64').toString();
                    if (b64.includes("rc")) console.log("Token Content:", b64);
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