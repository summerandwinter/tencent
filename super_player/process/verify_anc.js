const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Ensure superplayer-txv.js is in the same directory
const PLAYER_JS_PATH = path.join(__dirname, 'source_final.js');

// REPLACE THESE WITH VALUES FROM YOUR CAPTURED TRAFFIC
const TARGET_ANC = "eyJyYyI6IkdxQ2xScU81TXZU"; 
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
        console.log("[-] Reading source file...");
        let sourceCode = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

        // Extract VM variable name (e.g., 'cy', 'yo', 'A')
        const cyDefRegex = /(var\s+(cy+)\s*=\s*function\s*\(\)\s*\{\s*function\s+[a-zA-Z]\([^\)]*\)\s*\{[\s\S]+?\}\(\);)/;
        const cyMatch = sourceCode.match(cyDefRegex);
        if (!cyMatch) throw new Error("Could not find VM definition in source.");
        const vmVarName = cyMatch[2];

        // Extract bytecode string
        const bytecodeRegex = new RegExp(`${vmVarName}\\s*\\(\\s*(['"])([^'"]+)\\1\\s*,\\s*false\\s*\\)`);
        const bytecodeMatch = sourceCode.match(bytecodeRegex);
        if (!bytecodeMatch) throw new Error("Could not extract bytecode.");
        const RAW_BYTECODE = bytecodeMatch[2];

        // Extract entry offset
        const offsetRegex = /\)\s*\(\s*(\d+)\s*,/;
        const offsetMatch = sourceCode.match(offsetRegex);
        const ENTRY_OFFSET = offsetMatch ? parseInt(offsetMatch[1]) : 6327;

        // Modify source to expose VM to window
        const injectedSource = sourceCode.replace(cyMatch[1], `window.${vmVarName} = ${cyMatch[1].substring(cyMatch[1].indexOf('=') + 1)}`);

        console.log(`[-] Detected VM: ${vmVarName}, Offset: ${ENTRY_OFFSET}`);
        console.log("[-] Launching browser...");
        
        browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
        const page = await browser.newPage();
        
        // Navigate to valid domain context
        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', { waitUntil: 'domcontentloaded' });

        const result = await page.evaluate(async (helpers, vmSource, varName, bytecode, offset, inputAnc, ctxData) => {
            // 1. Inject Helper Functions
            window.gy = e => (e && typeof Symbol != "undefined" && e.constructor === Symbol) ? "symbol" : typeof e;
            window.ly = (e, t) => (t != null && typeof Symbol != "undefined" && t[Symbol.hasInstance]) ? !!t[Symbol.hasInstance](e) : e instanceof t;

            // 2. Inject VM Source
            window.eval(vmSource);
            const vmFactory = window[varName];

            // 3. Create "Safe Proxy" to handle missing properties (avoids "reading '4'" errors)
            const createSafeProxy = (target) => {
                const fn = typeof target === 'function' ? target : function(){};
                return new Proxy(fn, {
                    get: (obj, prop) => {
                        // Return actual value if exists
                        if (target && prop in target) {
                            const val = target[prop];
                            if (typeof val === 'object' && val !== null) return createSafeProxy(val);
                            return val;
                        }
                        // Return Safe String for missing props (prevents crash on index access)
                        if (['toString', 'valueOf', Symbol.toPrimitive].includes(prop)) return () => "";
                        if (prop === 'then') return undefined; // Non-thenable
                        return createSafeProxy(new String("     ")); 
                    }
                });
            };

            // 4. Setup Environment
            const mockQimei = { tools: { getStorageItem:()=>"", autoTry:(f)=>f() } };
            const envProxy = new Proxy(window, {
                get: (t, p) => {
                    if (p === 'moduleQimei') return mockQimei;
                    if (p in window) return window[p];
                    return createSafeProxy({});
                }
            });

            // 5. Initialize VM
            const responseModifier = vmFactory(bytecode, false)(offset, [], envProxy);

            // 6. Execute Logic
            const mockCtx = createSafeProxy({
                ...ctxData,
                config: { ...ctxData, businessConfig: ctxData },
                businessConfig: ctxData
            });

            const mockResData = {
                "errCode": 0,
                "vinfo": JSON.stringify({
                    "vl": {"vi": [{"fn": "dummy", "fvkey": "dummy"}]},
                    "tm": ctxData.tm,
                    "guid": ctxData.guid,
                    "anc": inputAnc
                })
            };

            const res = await Promise.resolve(responseModifier.call(mockCtx, mockResData));
            return res || mockResData;

        }, "", injectedSource, vmVarName, RAW_BYTECODE, ENTRY_OFFSET, TARGET_ANC, CTX_DATA);

        console.log("\n[+] Final VInfo ANC:", JSON.parse(result.vinfo).anc);
        console.log(`[+] Match Input? ${JSON.parse(result.vinfo).anc === TARGET_ANC}`);

    } catch (e) {
        console.error("[-] Error:", e);
    } finally {
        if (browser) await browser.close();
    }
})();