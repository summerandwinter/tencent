// ===============================================================
// 终极版：包含 defineProperty 容错处理
// ===============================================================

(function() {
    console.clear();
    console.log("%c>>> 环境初始化中 (容错版)...", "color: blue; font-weight: bold;");

    // 1. 定义万能拦截器 (增加了 defineProperty 拦截)
    const createSafeProxy = (name, targetOverride) => {
        const targetFunc = targetOverride || function() {};
        
        return new Proxy(targetFunc, {
            get: function(target, prop, receiver) {
                if (prop === Symbol.toPrimitive || prop === 'toString' || prop === 'valueOf') {
                    return () => `[Mock ${name}]`;
                }
                if (prop === 'call' || prop === 'apply' || prop === 'bind') {
                    return Reflect.get(target, prop, receiver);
                }
                // 只有不是 prototype 的时候才报日志，太烦了可以注释掉
                if (prop !== 'prototype') {
                    // console.warn(`[补全] read: ${name}.${String(prop)}`);
                }
                return createSafeProxy(`${name}.${String(prop)}`);
            },
            construct: function(target, args) {
                console.log(`[构造] new ${name}(...)`, args);
                return createSafeProxy(`${name}_instance`);
            },
            apply: function(target, thisArg, args) {
                // console.log(`[调用] ${name}(...)`, args);
                return undefined;
            },
            // 【新增】拦截属性定义操作，防止报 "Cannot redefine property"
            defineProperty: function(target, prop, descriptor) {
                try {
                    return Reflect.defineProperty(target, prop, descriptor);
                } catch (e) {
                    console.warn(`[容错] 试图重定义 ${name}.${String(prop)} 失败，已自动忽略错误。`);
                    return true; // 返回 true 欺骗虚拟机说“定义成功”
                }
            }
        });
    };

    // 2. 初始化核心变量
    var YS = createSafeProxy("YS");
    var RS = createSafeProxy("RS");
    var LS = { exports: {} }; 
    
    // 3. 针对 location 的伪造
    var fakeLocation = {
        href: "https://www.google.com/", 
        protocol: "https:",
        hostname: "www.google.com",
        origin: "https://www.google.com",
        ancestorOrigins: {},
        assign: () => {}, 
        reload: () => {}, 
        replace: () => {},
        toString: () => "https://www.google.com/"
    };
    
    // 4. 定义全局 t (window 代理)
    // 这里特别关键：因为 ignoreKeyList 可能是定义在 window 上的
    var t = new Proxy(window, {
        get: (target, prop) => {
            if (prop === 'location') return fakeLocation;
            if (Reflect.has(target, prop)) return Reflect.get(target, prop);
            return createSafeProxy(`window.${String(prop)}`);
        },
        // 同样拦截 window 上的 defineProperty
        defineProperty: function(target, prop, descriptor) {
            try {
                return Reflect.defineProperty(target, prop, descriptor);
            } catch (e) {
                console.warn(`[容错] Window 上重定义 ${String(prop)} 冲突，已自动跳过。`);
                return true; 
            }
        }
    });

    console.log("%c>>> 准备就绪，请粘贴代码...", "color: green; font-weight: bold;");

    try {
        
        // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
        // 【请在下方粘贴完整代码】
        // 务必确保字符串完整，没有 "..."
        // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
        


        // (在此处粘贴)
        


    } catch (e) {
        console.error("运行时错误:", e);
    }

    // 检查结果
    setTimeout(() => {
        console.log("-------------------------------------------");
        if (Object.keys(LS.exports).length > 0) {
            console.log("%c成功！LS.exports 内容如下：", "background: green; color: white; font-size:16px; padding:4px;");
            console.log(LS.exports);
        } else {
            console.log("%c未检测到导出，请检查：", "color: red");
            console.log("1. 是否刷新了页面？(建议刷新)");
            console.log("2. 代码是否完整粘贴？");
        }
    }, 1000);

})();