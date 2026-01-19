// 1. 手动调用并挂载回调
window.lrs = o.config.licenseRequestSetup

const uint8Array = new Uint8Array(2); Uint8Array.from(atob(data.body), c => c.charCodeAt(0)).buffer
uint8Array[0] = 8;
uint8Array[1] = 4;

const arrayBuffer = uint8Array.buffer;

let data = { "method": "POST", "responseType": "arraybuffer", "body": arrayBuffer, "url": "https://fairplay.l.qq.com/vod/widevine/v1/getlicense", "headers": { "Content-Type": "application/x-www-form-urlencoded" } }
let myPromise = window.lrs(data);

console.log("⏳ 等待解密... 请点击调试器的 'Resume' (F8) 继续运行");

myPromise.then(function (res) {
    console.log("%c🔥🔥🔥 解密成功！🔥🔥🔥", "color: red; font-size: 20px; font-weight: bold;");
    console.log("完整结果对象:", res);

}).catch(function (err) {
    console.error("❌ 解密出错:", err);
});