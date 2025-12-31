module.exports = `
(() => {
    // 1. 彻底清理 Node 特征
    delete window.module;
    delete window.exports;
    delete window.process;
    window.global = window;

    // 2. 防崩代理工具
    window.proxyCache = new WeakMap();

    window.createRecursiveVoid = (name) => {
        if (name.includes('toJSON')) return () => ({});
        const func = function() { return window.createRecursiveVoid(name + "()"); };
        return new Proxy(func, {
            get: (t, p) => {
                if (p === Symbol.toPrimitive) return () => 0;
                if (p === 'toString') return () => \`[Proxy \${name}]\`;
                if (p === 'then') return undefined; // 防止 Promise 误判
                return window.createRecursiveVoid(\`\${name}.\${String(p)}\`);
            },
            apply: () => window.createRecursiveVoid(name + "()"),
            construct: () => window.createRecursiveVoid(name + "{}")
        });
    };

    window.createSafeProxy = (target, path) => {
        if (target === null || typeof target !== 'object' && typeof target !== 'function') return target;
        if (target instanceof Promise || target instanceof Uint8Array || target instanceof ArrayBuffer) return target;
        if (window.proxyCache.has(target)) return window.proxyCache.get(target);

        const proxy = new Proxy(target, {
            get: (t, p, r) => {
                if (Reflect.has(t, p)) {
                    const val = Reflect.get(t, p, r);
                    if (val === undefined) return window.createRecursiveVoid(\`\${path}.\${String(p)}\`);
                    if (typeof val === 'function') {
                        if (p === 'constructor' || p === 'prototype') return val;
                        // 腾讯特定: YS对象下的一些属性不能bind，否则会报错
                        if (path.includes('YS') && (p === 'Logger' || p === 'EvtEmitter' || p === 'ErrorBase')) return val;
                        if (!val.prototype) return val.bind(t);
                        return val;
                    }
                    return val;
                }
                return window.createRecursiveVoid(\`\${path}.\${String(p)}\`);
            }
        });
        window.proxyCache.set(target, proxy);
        return proxy;
    };
})();
`;