const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// 读取本地的源码文件，避免网络请求
const PLAYER_JS_PATH = path.join(__dirname, 'superplayer-txv.js');
const PLAYER_SOURCE = fs.readFileSync(PLAYER_JS_PATH, 'utf-8');

(async () => {
    console.log("[-] 正在启动无头浏览器...");
    const browser = await puppeteer.launch({
        headless: "new", // 使用新版无头模式
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        
        // 1. 为了通过环境检测，我们直接导航到一个腾讯视频的页面
        // 这样 window.location, document.domain 等都是合法的
        console.log("[-] 正在导航到目标环境...");
        await page.goto('https://v.qq.com/x/cover/mzc00200123456/t00123456.html', {
            waitUntil: 'domcontentloaded' // 不需要等图片加载完，DOM 好了就行
        });

        console.log("[-] 正在注入播放器内核...");
        
        // 2. 注入修改后的代码来获取 responseModifier
        // 我们利用 page.evaluate 在浏览器上下文中执行逻辑
        const decryptedData = await page.evaluate((sourceCode, inputAnc) => {
            return new Promise((resolve, reject) => {
                // ===============================================
                // 浏览器内部环境 (Browser Context)
                // ===============================================
                
                // 1. 劫持 cy 函数以捕获 VM
                // 源码最后是 cy("...", false)，我们通过劫持 window 下的变量或者直接修改源码执行
                // 这里采用最暴力的 eval 劫持方式
                
                let capturedModifier = null;
                
                // 我们在源码执行前，Hook 全局作用域，看能否捕获 cy 的返回值
                // 由于源码是闭包 (function(){...})()，外部很难拿到。
                // 技巧：重写源码的最后一行。
                // 原文结尾通常是: return e; }({}) );
                // 我们把它改成: window.__TXV_EXPORT = e; return e; }({}) );
                
                // 查找源码特征字符串
                const hookSign = 'return e;}({}));';
                if (!sourceCode.includes(hookSign)) {
                    // 如果找不到特征，尝试另一种通用的 Hook 方式：Hook Object.prototype (正如我们之前分析的)
                    // 因为 responseModifier 会被赋值给配置对象
                    console.log("使用属性劫持模式...");
                    
                    // 劫持 Object.prototype 上的 responseModifier 属性设置
                    // 当 VM 初始化并尝试挂载修改器时，我们就能拿到它
                    let modifier = null;
                    Object.defineProperty(Object.prototype, 'responseModifier', {
                        set: function(val) {
                            if (typeof val === 'function' && !modifier) {
                                modifier = val;
                                console.log("捕获到 responseModifier!");
                            }
                            this._val = val;
                        },
                        get: function() { return this._val; },
                        configurable: true
                    });
                    
                    // 执行源码
                    try {
                        window.eval(sourceCode);
                    } catch(e) { console.log("源码执行部分报错(可忽略):", e.message); }
                    
                    if (!modifier) {
                        reject("未能捕获 responseModifier，Hook 失败");
                        return;
                    }
                    capturedModifier = modifier;

                } else {
                    console.log("使用源码注入模式...");
                    // 替换源码结尾，导出模块
                    const hackedSource = sourceCode.replace(
                        'return e;}({}));', 
                        'window.__TXV_MODULE = e; return e;}({}));'
                    );
                    window.eval(hackedSource);
                    
                    // 从导出的模块中通过 VodGetinfoReq 拿到配置
                    // 这比较复杂，还是属性劫持最简单。
                    // 让我们回退到上面的属性劫持逻辑，那是万能的。
                }

                // -------------------------------------------
                // 如果上面的 Hook 没生效，我们使用你在控制台验证过的方法：
                // 重新定义 cy 函数，然后手动运行那段字节码。
                // -------------------------------------------
                
                // 为了确保成功，我们在浏览器里直接用正则提取那段 RAW_BYTECODE
                const bytecodeMatch = sourceCode.match(/cy\("([^"]+)"/);
                if (!bytecodeMatch) {
                    reject("无法从源码中提取字节码字符串");
                    return;
                }
                const RAW_BYTECODE = bytecodeMatch[1];

                // 提取 cy 函数体 (源码中 var cy = ... 到 }; 结束)
                // 这比较难正则，建议直接复制你之前的 cy 函数定义到这里
                // 或者，既然源码已经 eval 执行了，cy 变量可能并没有暴露到 window。
                
                // === 终极方案：在浏览器里重定义 cy 并执行 ===
                var cy = function() {
                    function e(e, t, o) { var i = []; for (var n = 0; n++ < t;) { i.push(e += o); } return i; }
                    function t(e) { var t, o, i = String(e).replace(/[=]+$/, ""); for (var A = i.length, r = 0, a = 0, s = []; a < A; a++) { if (~(o = n[i.charCodeAt(a)]) && (t = r % 4 ? t * 64 + o : o, r++ % 4)) { s.push(t >> (A * -2 & 6) & 255); } } return s; }
                    function o(e) { return e >> 1 ^ -(e & 1); }
                    function i(e) { var i = []; var n = new Int8Array(t(e)); for (var A = n.length, r = 0; A > r;) { var a = n[r++]; var s = a & 127; if (!(a >= 0)) { s |= ((a = n[r++]) & 127) << 7; if (!(a >= 0)) { s |= ((a = n[r++]) & 127) << 14; if (!(a >= 0)) { s |= ((a = n[r++]) & 127) << 21; if (!(a >= 0)) { s |= (a = n[r++]) << 28; } } } } i.push(o(s)); } return i; }
                    var n = [];
                    var a = e(0, 43, 0).concat([62, 0, 62, 0, 63]).concat(e(51, 10, 1)).concat(e(0, 8, 0)).concat(e(0, 25, 1)).concat([0, 0, 0, 0, 63, 0]).concat(e(25, 26, 1));
                    var s = i;
                    return function(e, t) { var o = s(e); function i(e, t, n, A, r) { return function a() { var s, l, g, c, u = [n, A, t, this, arguments, a, o, 0], E = undefined, d = e, B = []; for (;;) try { for (;;) switch (o[++d] ^ u[7]) { case 0: case 30: u[o[++d]] = u[o[++d]] == u[o[++d]]; break; case 1: u[o[++d]] = u[o[++d]] ^ u[o[++d]]; break; case 2: u[o[++d]] = u[o[++d]][u[o[++d]]]; break; case 3: u[o[++d]] = u[o[++d]].call(E); break; case 4: u[o[++d]] = u[o[++d]] + u[o[++d]]; break; case 5: u[o[++d]][o[++d]] = u[o[++d]]; u[o[++d]] = ""; u[o[++d]] += String.fromCharCode(o[++d]); break; case 6: u[o[++d]] = u[o[++d]] >= o[++d]; break; case 7: u[o[++d]] = ""; u[o[++d]] += String.fromCharCode(o[++d]); break; case 8: return u[o[++d]]; case 9: u[o[++d]] = u[o[++d]] / u[o[++d]]; break; case 10: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = u[o[++d]].call(E); u[o[++d]][o[++d]] = u[o[++d]]; break; case 11: u[o[++d]][o[++d]] = u[o[++d]]; break; case 12: u[o[++d]] = ++u[o[++d]]; break; case 13: u[o[++d]] = u[o[++d]].call(E, u[o[++d]], u[o[++d]]); break; case 14: B.pop(); break; case 15: u[o[++d]][o[++d]] = u[o[++d]]; u[o[++d]] = u[o[++d]][i[++d]]; break; case 16: u[o[++d]] = u[o[++d]] > o[++d]; break; case 17: u[o[++d]] = u[o[++d]] % u[o[++d]]; break; case 18: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = u[o[++d]][i[++d]]; break; case 19: u[o[++d]] = u[o[++d]] === o[++d]; break; case 20: u[o[++d]] = !u[o[++d]]; break; case 21: u[o[++d]] = E; break; case 22: B.push(d + o[++d]); break; case 23: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]][o[++d]] = u[o[++d]]; u[o[++d]] += String.fromCharCode(o[++d]); break; case 24: u[o[++d]] = u[o[++d]] | u[o[++d]]; break; case 25: d += u[o[++d]] ? o[++d] : o[d += 1, d]; break; case 26: u[o[++d]] = o[++d]; break; case 27: s = u[o[++d]]; if (u[o[++d]] = !!s.length) { u[o[++d]] = s.shift(); } else { ++d; } break; case 28: u[o[++d]] = u[o[++d]].call(u[o[++d]]); break; case 29: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = ""; u[o[++d]] += String.fromCharCode(o[++d]); break; case 31: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]] += String.fromCharCode(o[++d]); break; case 32: u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]]); break; case 33: s = []; for (g in u[o[++d]]) { s.push(g); } u[o[++d]] = s; break; case 34: u[o[++d]] = u[o[++d]] - 0; break; case 35: u[o[++d]] = r; break; case 36: u[o[++d]] = u[o[++d]]; u[o[++d]][u[o[++d]]] = u[o[++d]]; break; case 37: throw u[o[++d]]; case 38: u[o[++d]] = +u[o[++d]]; break; case 39: s = []; g = o[++d]; for (; g > 0; g--) { s.push(u[o[++d]]); } u[o[++d]] = u[o[++d]].apply(E, s); break; case 40: u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]], u[o[++d]], u[o[++d]]); break; case 41: u[o[++d]][o[++d]] = u[o[++d]]; d += u[o[++d]] ? o[++d] : o[d += 1, d]; break; case 42: u[o[++d]][u[o[++d]]] = u[o[++d]]; break; case 43: u[o[++d]] = new u[o[++d]](u[o[++d]]); break; case 44: u[o[++d]] = new u[o[++d]](u[o[++d]], u[o[++d]]); break; case 45: u[o[++d]] = ~u[o[++d]]; break; case 46: u[o[++d]] = u[o[++d]] < u[o[++d]]; break; case 47: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = u[o[++d]][u[o[++d]]]; break; case 48: u[o[++d]] = u[o[++d]]; u[o[++d]][o[++d]] = u[o[++d]]; break; case 49: u[o[++d]] = Array(o[++d]); u[o[++d]] = Array(o[++d]); break; case 50: u[o[++d]] = -u[o[++d]]; break; case 51: u[o[++d]] = new u[o[++d]](); break; case 52: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]][o[++d]] = u[o[++d]]; break; case 53: u[o[++d]] = delete u[o[++d]][u[o[++d]]]; break; case 54: s = []; g = o[++d]; for (; g > 0; g--) { s.push(u[o[++d]]); } u[o[++d]] = i(d + o[++d], s, n, A, r); try { Object.defineProperty(u[o[d - 1]], "length", { value: o[++d], configurable: true, writable: false, enumerable: false }); } catch (e) {} break; case 55: u[o[++d]] = Array(o[++d]); break; case 56: u[o[++d]] = u[o[++d]].call(E, u[o[++d]], u[o[++d]], u[o[++d]]); break; case 57: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = o[++d]; break; case 58: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]] = o[++d]; u[o[++d]] += String.fromCharCode(o[++d]); break; case 59: u[o[++d]] = u[o[++d]].call(E); u[o[++d]][o[++d]] = u[o[++d]]; break; case 60: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = u[o[++d]][o[++d]]; break; case 61: u[o[++d]] = ""; break; case 62: u[o[++d]] = u[o[++d]] + o[++d]; break; case 63: u[o[++d]] = u[o[++d]] * u[o[++d]]; break; case 64: u[o[++d]] = gy(u[o[++d]]); break; case 65: u[o[++d]] = u[o[++d]] < o[++d]; break; case 66: u[o[++d]] = u[o[++d]].call(u[o[++d]], u[o[++d]], u[o[++d]]); break; case 67: u[o[++d]] = u[o[++d]] & u[o[++d]]; break; case 68: u[o[++d]] = ly(u[o[++d]], u[o[++d]]); break; case 69: u[o[++d]] = u[o[++d]][u[o[++d]]]; u[o[++d]] = ""; break; case 70: u[o[++d]] = u[o[++d]] - u[o[++d]]; break; case 71: u[o[++d]] = u[o[++d]] | o[++d]; break; case 72: u[o[++d]] = u[o[++d]] > u[o[++d]]; break; case 73: u[o[++d]] = null; break; case 74: u[o[++d]] += String.fromCharCode(o[++d]); break; case 75: u[o[++d]] += String.fromCharCode(o[++d]); u[o[++d]] = u[o[++d]][B[i[++d]]]; break; case 76: u[o[++d]] = {}; break; case 77: s = []; g = o[++d]; for (; g > 0; g--) { s.push(u[o[++d]]); } u[o[++d]] = u[o[++d]].apply(u[o[++d]], s); break; case 78: u[o[++d]] = u[o[++d]] - o[++d]; break; case 79: s = [, ]; g = o[++d]; for (; g > 0; g--) { s.push(u[o[++d]]); } g = o[++d]; c = u[o[++d]]; u[g] = new(c.bind.apply(c, s))(); break; case 80: u[o[++d]] = u[o[++d]][o[++d]]; u[o[++d]] = u[o[++d]][o[++d]]; break; case 81: u[o[++d]] = o[++d]; u[o[++d]][o[++d]] = u[o[++d]]; break; case 82: u[o[++d]] = u[o[++d]].call(E, u[o[++d]]); break; case 83: u[o[++d]] = u[o[++d]][o[++d]]; break; case 84: u[o[++d]] = u[o[++d]]; } } catch (e) { if (B.length > 0) { l = []; } c = e; l.push(d); if (B.length === 0) { throw r ? r(e, u, l) : e; } d = B.pop(); l.pop(); } }; } if (t) { return o; } else { return i; } }; }();

                // 初始化 VM
                // 这里的 envProxy 直接使用浏览器的 window
                // 这样能保证 Date.now()、performance 等与生成时一致
                const envProxy = {
                    get Object() { return window.Object; },
                    get moduleQimei() { return undefined; },
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

                capturedModifier = cy(RAW_BYTECODE, false)(6327, [], envProxy);
                
                // 3. 执行解密
                const mockResData = {
                    "errCode": 0,
                    "vinfo": JSON.stringify({
                        "vl": {"vi": [{"fn": "dummy", "fvkey": "dummy"}]},
                        "anc": inputAnc
                    })
                };
                
                // 模拟 this 上下文
                const mockCtx = {
                    config: { instanceId: "123", businessConfig: { platform: "10201" } },
                    playerInstanceId: "123",
                    logger: { log:console.log, error:console.error }
                };

                // 调用
                const result = capturedModifier.call(mockCtx, mockResData);
                
                // 处理 Promise
                Promise.resolve(result).then(finalData => {
                    resolve(finalData || mockResData);
                }).catch(err => {
                    reject(err);
                });
            });
        }, PLAYER_SOURCE, "eyJyYyI6IkdxQ2xScU81TXZU"); // <--- 传入你的 anc

        console.log("\n[+] 解密结果:");
        console.log(JSON.stringify(decryptedData, null, 2));

        if (decryptedData.vinfo && typeof decryptedData.vinfo === 'object') {
             console.log("\n✅ 成功拿到解密后的 vinfo!");
        }

    } catch (e) {
        console.error("[-] Puppeteer 执行出错:", e);
    } finally {
        await browser.close();
    }
})();