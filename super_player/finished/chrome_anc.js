// 1. 手动调用并挂载回调
let myPromise = n.responseModifier(u);

console.log("⏳ 等待解密... 请点击调试器的 'Resume' (F8) 继续运行");

myPromise.then(function (res) {
    console.log("%c🔥🔥🔥 解密成功！🔥🔥🔥", "color: red; font-size: 20px; font-weight: bold;");
    console.log("完整结果对象:", res);

    // 检查 vinfo
    if (res && res.vinfo) {
        let vinfo = typeof res.vinfo === 'string' ? JSON.parse(res.vinfo) : res.vinfo;
        console.log("📂 vinfo 结构:", vinfo);
        console.log("🔑 anc 字段值:", vinfo.anc);

        // 尝试解析 anc (如果是 Base64)
        try {
            let ancDecoded = atob(vinfo.anc);
            console.log("🔓 anc Base64解码:", ancDecoded);
            console.log("🔓 anc 二次解析:", JSON.parse(ancDecoded));
        } catch (e) {
            console.log("anc 不是标准 Base64 或 JSON");
        }
    }
}).catch(function (err) {
    console.error("❌ 解密出错:", err);
});