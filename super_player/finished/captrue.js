(function () {
    console.log("%c🪤 智能陷阱已部署：正在过滤并等待目标 licenseRequestSetup...", "color: blue; font-size: 16px; font-weight: bold;");

    const valueMap = new WeakMap();

    Object.defineProperty(Object.prototype, "licenseRequestSetup", {
        set: function (newValue) {
            // ----------------------------------------------------
            // 🚫 过滤条件 1：值必须是函数
            // ----------------------------------------------------
            if (typeof newValue !== 'function') {
                // 默默保存值，不打印日志，不中断
                valueMap.set(this, newValue);
                return;
            }

            // ----------------------------------------------------
            // 🎯 过滤条件 2：目标对象特征匹配 (关键!)
            // 根据你提供的 this 结构，目标对象肯定包含 keySystem 或 licenseUrl
            // ----------------------------------------------------
            const isTarget = this && (
                this.keySystem === "com.widevine.alpha"
            );

            if (!isTarget) {
                // 如果对象长得不像 drmConfig，直接放过
                valueMap.set(this, newValue);
                return;
            }

            // ----------------------------------------------------
            // ✅ 命中目标！
            // ----------------------------------------------------
            console.group("%c⚡️ 终于抓到了！精准命中目标对象", "color: red; font-size: 20px; background: yellow; padding: 4px;");
            console.log("⏰ 触发时间:", new Date().toLocaleTimeString());
            console.log("📍 目标对象 (this):", this);
            console.log("ƒ  注入的函数 (g函数):", newValue);

            console.trace("📚 调用堆栈 (请点击这里查看是谁赋值的)");

            // 自动断点
            debugger;

            valueMap.set(this, newValue);
            console.groupEnd();
        },
        get: function () {
            return valueMap.get(this);
        },
        configurable: true,
        enumerable: true
    });
})();