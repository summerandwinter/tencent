# Tencent Video SuperPlayer Reverse Engineering & Deobfuscation

# 腾讯视频前端播放器反混淆实战记录

## 1. 项目背景

**目标文件**: `superplayer-txv.js` (版本 1.57.5)  
**混淆类型**: Webpack 打包 + 字符串阵列混淆 (String Array) + 乱序洗牌 (Rotator) + 变量别名 (Aliasing) + 控制流平坦化。  
**主要难点**:

1.  **动态乱序**: 静态分析无法获取正确的字符串数组，必须执行特定的 `while(true)` 循环（洗牌器）后，数组顺序才正确。
2.  **环境敏感**: 洗牌逻辑包含复杂的数学计算，Node.js VM 环境与浏览器环境的微小差异会导致数组错位（例如 `blockSi` 变成 `unpad`）。
3.  **多态混淆**: 文件中包含 17 组独立的 [大数组, 解密函数, 洗牌逻辑]，分布在不同的 Webpack 模块中。
4.  **作用域引用**: 解密函数经常被赋值给局部变量（如 `var a = VC`），简单的正则替换无法覆盖所有调用。

---

## 2. 环境准备

需要安装 Node.js 及 Babel AST 相关工具库：

```bash
npm init -y
npm install @babel/core @babel/parser @babel/traverse @babel/generator @babel/types
```

**文件准备**:

- `source.js`: 原始混淆代码（建议先用 Chrome DevTools 格式化后保存，以便提高正则匹配率）。

---

## 3. 解决方案架构

采用了 **“提取封装 + 静态替换”** 的二步走策略，这是应对复杂 JS 混淆最稳健的方法。

### 阶段一：生成解密工具 (Tool Generation)

不尝试在还原脚本中实时运行混淆代码，而是先编写脚本扫描源码，将所有混淆组件（数组、解密器、洗牌器）“抠”出来，组装成一个独立的本地工具库 `txv_decryptor.js`。

### 阶段二：AST 源码还原 (Source Restoration)

编写 AST 脚本遍历源码，通过**作用域追踪（Scope Tracing）**找到解密函数的引用，调用阶段一生成的工具库获取明文，并进行替换。

---

## 4. 详细步骤与脚本

### 步骤 1: 生成解密工具库

此脚本 (`gen_decryptor.js`) 负责扫描源码，提取 17 组混淆逻辑，并生成可独立运行的 `txv_decryptor.js`。

**脚本要点**:

- 使用 AST 识别大数组（赋值给变量且长度>10 的字符串数组）。
- 使用指纹特征（`abcdefg...+/=`）识别解密函数。
- 使用结构特征（`try-catch` + `push/shift`）识别洗牌逻辑，并过滤掉 VM 虚拟机代码。
- **关键修复**: 在生成的代码中将洗牌 IIFE 强制转换为表达式 `(function...)(...)` 以避免语法错误。

**运行命令**:

```bash
node gen_decryptor.js
```

**产出**: `txv_decryptor.js` (包含 17 个可调用的解密函数)

---

### 步骤 2: 验证解密工具

在进行大规模替换前，先确保工具是可用的。

```bash
node txv_decryptor.js
```

**预期输出**:

> 正在初始化解密字典 (Running Shufflers)...  
> ✅ 初始化完成！  
> --- 自测模式 ---  
> ...

---

### 步骤 3: 基于工具的源码还原

此脚本 (`restore_source.js`) 加载 `txv_decryptor.js`，然后解析 `source.js` 的 AST，进行深度变量追踪和替换。

**脚本要点**:

- **动态加载**: `require('./txv_decryptor.js')`。
- **变量追踪**: 实现 `resolveDecryptorName` 函数，支持追踪 `VariableDeclarator` (变量赋值) 和 `CallExpression` (函数传参)。
  - _示例_: 识别 `!function(t){ t(123) }(VC)` 这种复杂的调用模式。
- **类型安全**: 仅当解密结果为 `string`, `number`, `boolean`, `null` 时才替换，防止破坏逻辑。

**运行命令**:

```bash
node restore_source.js

```

**产出**: `source_deobfuscated_final.js` (最终还原文件)

---

**补充**
可以把生成的代码再用 webcrack 跑一遍，它会自动把 obj['config'] 变成 obj.config，代码就跟源码非常接近了！

```bash
npx webcrack source_deobfuscated_final.js > source_final.js
```

## 5. 成果展示

### 还原前 (Obfuscated)

```javascript
var a = i(369);
var b = t(405)(data);
!(function (e) {
  e(374);
})(VC);
var n = zB(525) + "ze";
```

### 还原后 (Deobfuscated)

```javascript
var a = "vinfo";
var b = "getSspKey"(data); // 或 obj["getSspKey"]
("2660kvwDBJ");
var n = "blockSi" + "ze"; // 即 blockSize
```

**统计数据**:

- 成功识别混淆簇: **17 组**
- 成功还原调用点: **1800+ 处**
- 关键参数: `anc`, `vinfo`, `ckey` 生成逻辑完全暴露。

---

## 6. 后续分析指引 (Finding 'anc')

现在代码已经清晰，要找到视频流信息的解密逻辑，请在 `source_deobfuscated_final.js` 中执行以下操作：

```bash
var E = ip(this.middlewares);

Ln.start(Ap.RES_PARSE, this.playerInstanceId);
```

1.  **搜索关键词**: `"vinfo"` 或 `"anc"`。
2.  **定位逻辑**:
    - 你会找到类似 `var encData = responseData["vinfo"];` 的代码。
    - 接着会看到 `var anc = JSON.parse(encData)["anc"];`。
    - 最后会有一个函数调用，例如 `var decData = Module["_decrypt"](anc)` 或者某个 JS 函数。
3.  **WASM 提示**: 如果看到 `Module` 或 `_malloc`，说明核心解密算法在 WebAssembly (`.wasm`) 文件中。此时建议直接使用浏览器 Hook (`JSON.parse`) 技术截取结果，而不是逆向 WASM 二进制。

---

## 7. 经验总结

1.  **不要试图手动重写洗牌逻辑**: 浏览器的 JS 引擎和 Node.js 有微小差异，直接把混淆代码提取出来运行是最安全的。
2.  **指纹识别至关重要**: 单纯靠 AST 结构容易误判（例如把 VM 误判为洗牌器），结合字符串指纹（如 Base64 表）能大幅提高准确率。
3.  **变量追踪是核心**: Webpack 模块化代码中，变量名变化极快，必须实现 AST 级别的作用域追踪才能覆盖所有混淆点。

## 其他

WASM 模块加载器有一个绝对不可能出现在混淆洗牌器里的特征：WebAssembly 的魔术头（Magic Header）Base64 编码 —— "AGFzb"（对应二进制 \0asm）。

## 调试

### ckey

key: "execContextModifier", -> key: e(381),
key: e(458),
//1.58.0

```bash
 key: e(458),
```

### anc 解密

n.responseModifier

//1.58.0

```bash
return F(this, (function(m) {
里面的case 4
```

### getlicense 请求前参数数据

return [4, o.config.licenseRequestSetup(e)];

```bash
key: "requestLicenseBySystem",
```

### getlicense 请求后参数解密

requestServerCertificate

key: "formatOutputData", -> key: t(261),

url: `keyid://${d}.m3u8`, ->, d = Ev(e);

case 1:
return [4, n.vodGetinfo.getReqParams(t, A)];
case 2:
if ((g = w.sent()).error) {
return [2, g];
}
w.label = 3;
case 2 执行以后 ckey 就生成了
key: "getReqParams" -> key: t(237),
var wp = function () -> var wp = function () {
execContextModifier -> key: e(381),

key: "execContextModifier", -> key: e(381),

a(Ln, "recordMap", {});
Cp.update
AGFzbQEAAAAB4gEeYAF/

eiY+JugBJt4BPiamASb

var LS = {
exports: {}
};

onMediaKeySessionMessage

this.player.getCommonKv(Nc.drm);
createWidevineLicenseRequest

Wa.xhr

o[A(451)](i), -> parseResponseData

第一步
A[p(451)](l) -> parseResponseData
第二步
key: A(136),-> parseResData
key: t(232), -> setVideoInfo

key: t(331), -> setVideoInfo
key: t(245), -> parseExternalVideoInfo

Hp = function() { -> Hp = function () {
"https://h5vv6.video.qq.com/getvinfo"

n.responseModifier -> return function g() {

https://v.qq.com/x/cover/mzc00200lplzzrd/x0044ibkr4p.html

npm install express puppeteer body-parser

npm install jsdom canvas

console.log(JSON.stringify(sy.tools.getFeature(), null, 2));
VM122:1 {
"canvas": {
"id": "47c5be3f048f3feabeb369e6fcdc1b02",
"winding": true,
"geometry": "370e84f739a7e0be98c4be33e93bf686"
},
"screen": {
"colorDepth": 24,
"resolution": "3360x2100",
"availResolution": "3360x1930"
},
"navigator": {
"deviceMemory": 8,
"hardwareConcurrency": 4,
"networkType": "4g",
"pdfViewerEnabled": true,
"platform": "MacIntel",
"productSub": "20030107",
"userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
"vendor": "Google Inc.",
"cookieEnabled": true
},
"indexedDB": true,
"localStorage": true,
"sessionStorage": true,
"timezoneOffset": -480,
"webgl": "Google Inc. (Intel Inc.)~ANGLE (Intel Inc., Intel Iris Pro OpenGL Engine, OpenGL 4.1)"
}

console.log(JSON.stringify(sy.tools.getCookieQ36(), null, 2));
VM182:1 ""

console.log(JSON.stringify(sy.tools.getCookieUUID(), null, 2));
VM187:1 ""

console.log(navigator.userAgent);
VM118:1 Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36
在 d = JS(o, E).superPlayerConfig 处断点
console.log(JSON.stringify(d, null, 2));
{
"enableDegradeOnLowPerformance": true,
"maxDegradeCodecExpireTime": 43200000,
"minRenderFrameRate": 0.8,
"maxLowRenderFrameRate": 0.3,
"maxFrameDropRate": 0.2,
"maxWasmFatalErrorForbiddenTimeMs": 86400000,
"enableTVK": true,
"enableP2P": true,
"useSingleVideoElement": false,
"maxVinfoCacheCount": 10,
"maxVinfoCacheTimeS": 7200,
"definitionPriority": {
"sd": 0,
"hd": 1,
"shd": 2,
"fhd": 3,
"uhd": 4,
"hdr10": 4,
"dolby": 4
},
"supportedPaidFormat": [
"fhd",
"dolby",
"uhd"
],
"logLevel": 0,
"videoElementConfig": {
"crossorigin": true
},
"maxVideoNodeCount": 2,
"watermarkConfig": {
"enableObserver": true
},
"enableCreativePlugin": true,
"optimizeOptions": {
"loadPluginAfterPlay": true
},
"dynamicConfig": {
"adVersion": "4.2.45",
"adKernelName": "demux2fmp4",
"enableTxHevc": false,
"enableP2P": true,
"preloadConfig": {
"offsetTime": 60,
"enable": true
},
"autoLoadKernelVerMap": {
"wasm": "1.57.5",
"wasmAudiovivid": "1.39.2"
},
"wasmKernelConfig": {
"featType": "lt",
"token": "Ald1kGqb1Cdxjfyxe8LQcrtPlGx/0UnFGNOuNzGIkmG1UKj0rih9WqU2oOjdStzUkQfuV+PPy0jcJk23UAev7gcAAAByeyJvcmlnaW4iOiJodHRwczovL3YucXEuY29tOjQ0MyIsImZlYXR1cmUiOiJVbnJlc3RyaWN0ZWRTaGFyZWRBcnJheUJ1ZmZlciIsImV4cGlyeSI6MTc2OTQ3MjAwMCwiaXNTdWJkb21haW4iOnRydWV9",
"baseUrl": "https://v.qq.com/wasm-kernel",
"followDomain": "1",
"iframeVersion": "1.0.49"
},
"wasmAudiovividKernelConfig": {
"token": "Ar0xECCP+k2H9G/lqYnolsH20FOtuhAI+BTx380N3g64hO6FVa2jlM11fYpJmmdZS1/VMEETBtkirO3UJ2vt/AUAAAByeyJvcmlnaW4iOiJodHRwczovL3YucXEuY29tOjQ0MyIsImZlYXR1cmUiOiJVbnJlc3RyaWN0ZWRTaGFyZWRBcnJheUJ1ZmZlciIsImV4cGlyeSI6MTc1MzE0MjQwMCwiaXNTdWJkb21haW4iOnRydWV9",
"followDomain": "1",
"baseUrl": "https://v.qq.com/wasm-vivid-kernel",
"iframeVersion": "1.0.43"
},
"codecDgReportRate": 0.3,
"enabledVodPlayCtrlFeatures": [
"subtitleGetinfoCtrl",
"dolbyInsertAd"
],
"tvkConfig": {
"enableHarmonyAudioWorkaround": true,
"enableTrustedJSON": true,
"frameDropCheckerConfig": {
"avgFrameDropThreshold": 0.15,
"stalledQueueSize": 8
},
"enableSuhdWatermark": true,
"suhdWatermarkUrls": {
"defaultStart": "https://vm.gtimg.cn/thumbplayer/lottie/resources/max/start.json?max_age=86400",
"defaultEnd": "https://vm.gtimg.cn/thumbplayer/lottie/resources/max/end.json?max_age=86400",
"aiEnhancedEnd": "https://vm.gtimg.cn/thumbplayer/lottie/resources/max/end-aienhanced.json?max_age=86400"
},
"scoreMaskForBlocking": 1,
"allowDRMDowngrade": true,
"hardwareDecoderBlackList": {
"h265": {
"edg": [
[
"AMD"
],
[
"hd"
]
],
"firefox": [
[
".*"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
],
"chrome<109": [
[
".*"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
],
"chrome": [
[
"SwiftShader"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
],
"safari": [
[
"Intel"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
]
}
},
"enabledHevcDefinition": [
"sd",
"hd",
"shd",
"fhd",
"uhd",
"hdr10",
"suhd"
],
"enabledHevcFrameRateLevel": [
30
],
"enableTxO266": true,
"o266SHDCanaryConfig": [
{
"sceneID": 1,
"rate": 1
},
{
"sceneID": 2,
"rate": 0.5
},
{
"categoryType": 106,
"rate": 1
},
{
"categoryType": 3,
"rate": 1
},
{
"categoryType": 9,
"rate": 1
},
{
"categoryType": 22,
"rate": 1
},
{
"categoryType": 4,
"rate": 1
},
{
"categoryType": 31,
"rate": 1
},
{
"categoryType": 29,
"rate": 1
},
{
"categoryType": 27,
"rate": 1
},
{
"categoryType": 111,
"rate": 1
}
],
"enableAudiovivid": false,
"audioTrackOptionDecorator": {
"useThemeSuffix": true
},
"audiovividCanaryConfig": [
{
"vid": "s00242sxrne",
"rate": 1
}
]
},
"videoElementConfig": {
"crossorigin": true
},
"watermarkConfig": {
"enableObserver": true
}
},
"adInitConfig": {
"playerData": {
"isTodayFirstShortVideo": false
},
"playerMethod": {}
},
"tvkConfig": {
"customControllers": [
null
],
"tempHlsAdRangesDatasetKey": "hlsAdRanges",
"isOfficialSite": true,
"enableTEE": true,
"hevcGPUBlackList": {
"edg<118": [
"AMD Radeon\\(TM\\) Graphics",
"AMD Radeon\\(TM\\) Vega \\d+ Graphics"
]
},
"enableDRMRecordingNotice": true,
"enabledHevcDefinition": [
"sd",
"hd",
"shd",
"fhd",
"uhd",
"hdr10",
"suhd"
],
"enabledHevcFrameRateLevel": [
30
],
"showUHDClientGuide": true,
"enableSubtitle": true,
"subtitleStorageDimension": 1,
"definitionOptionDecorator": {},
"enableHarmonyAudioWorkaround": true,
"enableTrustedJSON": true,
"frameDropCheckerConfig": {
"avgFrameDropThreshold": 0.15,
"stalledQueueSize": 8
},
"enableSuhdWatermark": true,
"suhdWatermarkUrls": {
"defaultStart": "https://vm.gtimg.cn/thumbplayer/lottie/resources/max/start.json?max_age=86400",
"defaultEnd": "https://vm.gtimg.cn/thumbplayer/lottie/resources/max/end.json?max_age=86400",
"aiEnhancedEnd": "https://vm.gtimg.cn/thumbplayer/lottie/resources/max/end-aienhanced.json?max_age=86400"
},
"scoreMaskForBlocking": 1,
"allowDRMDowngrade": true,
"hardwareDecoderBlackList": {
"h265": {
"edg": [
[
"AMD"
],
[
"hd"
]
],
"firefox": [
[
".*"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
],
"chrome<109": [
[
".*"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
],
"chrome": [
[
"SwiftShader"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
],
"safari": [
[
"Intel"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
]
}
},
"enableTxO266": true,
"o266SHDCanaryConfig": [
{
"sceneID": 1,
"rate": 1
},
{
"sceneID": 2,
"rate": 0.5
},
{
"categoryType": 106,
"rate": 1
},
{
"categoryType": 3,
"rate": 1
},
{
"categoryType": 9,
"rate": 1
},
{
"categoryType": 22,
"rate": 1
},
{
"categoryType": 4,
"rate": 1
},
{
"categoryType": 31,
"rate": 1
},
{
"categoryType": 29,
"rate": 1
},
{
"categoryType": 27,
"rate": 1
},
{
"categoryType": 111,
"rate": 1
}
],
"enableAudiovivid": false,
"audioTrackOptionDecorator": {
"useThemeSuffix": true
},
"audiovividCanaryConfig": [
{
"vid": "s00242sxrne",
"rate": 1
}
]
},
"businessConfig": {
"platform": "10201",
"sdtfrom": "v1010",
"businessId": "100101",
"categoryType": 9,
"categoryMap": [
"10723",
"正片",
"1114",
"海外纪录片",
"9",
"纪录片"
],
"appKey": "100Gw1PWQUJTlIAEEIMAklPHh0NHx0HTUZTBUgEHQENDAUSFUUKFhIcWwEUHR5MEw8RTAJBBxUdGgJHQAwaDBROUhVJAAQRG0cKQQ8VBhVMDl9DDRQDEE8aXBxPHFlFDhgJRw8cCgIKFwoME0USDA0SBQJWBxoSDxQXWB4fB1obGQZaGxkGGVYHGloJB0VYUlgdXlYQAhcXG0cFVhUEGBVYGhAdGUUZVAACGxVaQQUJWAgRF1gaWg4fDxkER1sFVhUEAklHW0ZIRxdETUVcRARGFwEZAVxCSRkJFxQXAUAJQRsODRUeFw8RExJJHl8ZQA4aFw4cGREUGRgXTA8AExcVEUMXQVMeHgMGHE8SWUEPEVMYQBkeBhQRBgwKBh4VGxtcDEAEHRcOBQ4cSwEaHhoDXwZOBwwQEwdbGggGCE0IAlw"
},
"vodFlyReporterConfig": {
"paramsKey": {
"bizid": "businessId"
}
},
"infoPanelConfig": {
"defaultInfo": true,
"enableDebugMode": false,
"showInfoIconOnPause": false
},
"container": {},
"fullscreenContainer": {},
"miniPlayer": {
"initialPosition": {
"x": 1288,
"y": 96
},
"boundary": {
"top": 84,
"bottom": 0,
"left": 0,
"right": 0
},
"preservePosition": true,
"tipText": "在页面右下角重新打开小窗播放"
},
"enableMagicDanmaku": true,
"dmV2Config": {
"isDegraded": false,
"isProduction": true,
"isDCLExperiment": true,
"dmCanvasClipEnable": true
},
"autoPlayPolicy": "autoPlayInMuted",
"enableLogger": false,
"enableShortCut": true,
"enablePlayTitlePlugin": false,
"settingManagerConfig": {
"enablePlayLoopSettingBtn": true,
"forceDisableSetting": {
"playNext": false
}
},
"responsiveBtnOrder": [
".txp_btn_role_filter",
".txp-btn-comment--slot",
".txp-btn-vip--slot",
".barrage-input",
".barrage-switch",
".barrage-setting-wrapper",
".txp_subtitle_panel_btn",
".txp_btn_pip",
".thumbplayer_setting_btn",
".txp_btn_loop",
".txp_btn_fake",
".txp_btn_fullscreen"
],
"ctrlConfig": {
"disableNextBtn": true,
"hidePopupOnClick": true,
"enableLoop": true,
"keysListenedOnBody": [
" ",
"ArrowLeft",
"ArrowRight"
],
"overrideComponents": {},
"removeComps": [
"Loop"
]
},
"vodFlowReporterConfig": {
"paramsKey": {
"extrainfo": "dtInfo"
}
},
"plugins": [
"poster",
"ctrlbar",
[
"error-page",
{
"showOnError": true
}
],
"tips",
"ui-loading",
[
"context-menu",
{
"menus": [
{
"role": "version",
"label": "1.57.5"
}
]
}
],
[
"info-panel",
{
"defaultInfo": true
}
],
"ui-watermark"
],
"hlsjsKernelConfig": {
"progressive": true
},
"subtitleConfig": {
"renderer": 2,
"enableCtrlLogics": false,
"stickTo": "container"
},
"type": "vod",
"offlineConfig": {
"platform": "10201"
},
"getinfoConfig": {
"preMiddlewares": [],
"postMiddlewares": []
},
"errorPageConfig": {
"useBrowserTip": true,
"useClientBtn": true
},
"vodQaReporterConfig": {
"paramsKey": {}
},
"adVersion": "4.2.45",
"adKernelName": "demux2fmp4",
"enableTxHevc": false,
"preloadConfig": {
"offsetTime": 60,
"enable": true
},
"autoLoadKernelVerMap": {
"wasm": "1.57.5",
"wasmAudiovivid": "1.39.2"
},
"wasmKernelConfig": {
"featType": "lt",
"token": "Ald1kGqb1Cdxjfyxe8LQcrtPlGx/0UnFGNOuNzGIkmG1UKj0rih9WqU2oOjdStzUkQfuV+PPy0jcJk23UAev7gcAAAByeyJvcmlnaW4iOiJodHRwczovL3YucXEuY29tOjQ0MyIsImZlYXR1cmUiOiJVbnJlc3RyaWN0ZWRTaGFyZWRBcnJheUJ1ZmZlciIsImV4cGlyeSI6MTc2OTQ3MjAwMCwiaXNTdWJkb21haW4iOnRydWV9",
"baseUrl": "https://v.qq.com/wasm-kernel",
"followDomain": "1",
"iframeVersion": "1.0.49"
},
"wasmAudiovividKernelConfig": {
"token": "Ar0xECCP+k2H9G/lqYnolsH20FOtuhAI+BTx380N3g64hO6FVa2jlM11fYpJmmdZS1/VMEETBtkirO3UJ2vt/AUAAAByeyJvcmlnaW4iOiJodHRwczovL3YucXEuY29tOjQ0MyIsImZlYXR1cmUiOiJVbnJlc3RyaWN0ZWRTaGFyZWRBcnJheUJ1ZmZlciIsImV4cGlyeSI6MTc1MzE0MjQwMCwiaXNTdWJkb21haW4iOnRydWV9",
"followDomain": "1",
"baseUrl": "https://v.qq.com/wasm-vivid-kernel",
"iframeVersion": "1.0.43"
},
"codecDgReportRate": 0.3,
"enabledVodPlayCtrlFeatures": [
"subtitleGetinfoCtrl",
"dolbyInsertAd"
],
"userConfig": {
"optimizeOptions": {
"loadPluginAfterPlay": true
},
"dynamicConfig": {
"adVersion": "4.2.45",
"adKernelName": "demux2fmp4",
"enableTxHevc": false,
"enableP2P": true,
"preloadConfig": {
"offsetTime": 60,
"enable": true
},
"autoLoadKernelVerMap": {
"wasm": "1.57.5",
"wasmAudiovivid": "1.39.2"
},
"wasmKernelConfig": {
"featType": "lt",
"token": "Ald1kGqb1Cdxjfyxe8LQcrtPlGx/0UnFGNOuNzGIkmG1UKj0rih9WqU2oOjdStzUkQfuV+PPy0jcJk23UAev7gcAAAByeyJvcmlnaW4iOiJodHRwczovL3YucXEuY29tOjQ0MyIsImZlYXR1cmUiOiJVbnJlc3RyaWN0ZWRTaGFyZWRBcnJheUJ1ZmZlciIsImV4cGlyeSI6MTc2OTQ3MjAwMCwiaXNTdWJkb21haW4iOnRydWV9",
"baseUrl": "https://v.qq.com/wasm-kernel",
"followDomain": "1",
"iframeVersion": "1.0.49"
},
"wasmAudiovividKernelConfig": {
"token": "Ar0xECCP+k2H9G/lqYnolsH20FOtuhAI+BTx380N3g64hO6FVa2jlM11fYpJmmdZS1/VMEETBtkirO3UJ2vt/AUAAAByeyJvcmlnaW4iOiJodHRwczovL3YucXEuY29tOjQ0MyIsImZlYXR1cmUiOiJVbnJlc3RyaWN0ZWRTaGFyZWRBcnJheUJ1ZmZlciIsImV4cGlyeSI6MTc1MzE0MjQwMCwiaXNTdWJkb21haW4iOnRydWV9",
"followDomain": "1",
"baseUrl": "https://v.qq.com/wasm-vivid-kernel",
"iframeVersion": "1.0.43"
},
"codecDgReportRate": 0.3,
"enabledVodPlayCtrlFeatures": [
"subtitleGetinfoCtrl",
"dolbyInsertAd"
],
"tvkConfig": {
"enableHarmonyAudioWorkaround": true,
"enableTrustedJSON": true,
"frameDropCheckerConfig": {
"avgFrameDropThreshold": 0.15,
"stalledQueueSize": 8
},
"enableSuhdWatermark": true,
"suhdWatermarkUrls": {
"defaultStart": "https://vm.gtimg.cn/thumbplayer/lottie/resources/max/start.json?max_age=86400",
"defaultEnd": "https://vm.gtimg.cn/thumbplayer/lottie/resources/max/end.json?max_age=86400",
"aiEnhancedEnd": "https://vm.gtimg.cn/thumbplayer/lottie/resources/max/end-aienhanced.json?max_age=86400"
},
"scoreMaskForBlocking": 1,
"allowDRMDowngrade": true,
"hardwareDecoderBlackList": {
"h265": {
"edg": [
[
"AMD"
],
[
"hd"
]
],
"firefox": [
[
".*"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
],
"chrome<109": [
[
".*"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
],
"chrome": [
[
"SwiftShader"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
],
"safari": [
[
"Intel"
],
[
"sd",
"hd",
"shd",
"fhd",
"hdr10",
"uhd",
"suhd"
]
]
}
},
"enabledHevcDefinition": [
"sd",
"hd",
"shd",
"fhd",
"uhd",
"hdr10",
"suhd"
],
"enabledHevcFrameRateLevel": [
30
],
"enableTxO266": true,
"o266SHDCanaryConfig": [
{
"sceneID": 1,
"rate": 1
},
{
"sceneID": 2,
"rate": 0.5
},
{
"categoryType": 106,
"rate": 1
},
{
"categoryType": 3,
"rate": 1
},
{
"categoryType": 9,
"rate": 1
},
{
"categoryType": 22,
"rate": 1
},
{
"categoryType": 4,
"rate": 1
},
{
"categoryType": 31,
"rate": 1
},
{
"categoryType": 29,
"rate": 1
},
{
"categoryType": 27,
"rate": 1
},
{
"categoryType": 111,
"rate": 1
}
],
"enableAudiovivid": false,
"audioTrackOptionDecorator": {
"useThemeSuffix": true
},
"audiovividCanaryConfig": [
{
"vid": "s00242sxrne",
"rate": 1
}
]
},
"videoElementConfig": {
"crossorigin": true
},
"watermarkConfig": {
"enableObserver": true
}
},
"adInitConfig": {
"playerData": {
"isTodayFirstShortVideo": false
},
"playerMethod": {}
},
"videoElementConfig": {
"crossorigin": true
},
"tvkConfig": {
"showUHDClientGuide": true,
"enableSubtitle": true,
"subtitleStorageDimension": 1,
"definitionOptionDecorator": {}
},
"businessConfig": {
"businessId": "100101",
"categoryType": 9,
"categoryMap": [
"10723",
"正片",
"1114",
"海外纪录片",
"9",
"纪录片"
],
"appKey": "100Gw1PWQUJTlIAEEIMAklPHh0NHx0HTUZTBUgEHQENDAUSFUUKFhIcWwEUHR5MEw8RTAJBBxUdGgJHQAwaDBROUhVJAAQRG0cKQQ8VBhVMDl9DDRQDEE8aXBxPHFlFDhgJRw8cCgIKFwoME0USDA0SBQJWBxoSDxQXWB4fB1obGQZaGxkGGVYHGloJB0VYUlgdXlYQAhcXG0cFVhUEGBVYGhAdGUUZVAACGxVaQQUJWAgRF1gaWg4fDxkER1sFVhUEAklHW0ZIRxdETUVcRARGFwEZAVxCSRkJFxQXAUAJQRsODRUeFw8RExJJHl8ZQA4aFw4cGREUGRgXTA8AExcVEUMXQVMeHgMGHE8SWUEPEVMYQBkeBhQRBgwKBh4VGxtcDEAEHRcOBQ4cSwEaHhoDXwZOBwwQEwdbGggGCE0IAlw"
},
"vodFlyReporterConfig": {
"paramsKey": {
"bizid": "businessId"
}
},
"infoPanelConfig": {
"showInfoIconOnPause": false
},
"container": {},
"fullscreenContainer": {},
"miniPlayer": {
"initialPosition": {
"x": 1288,
"y": 96
},
"boundary": {
"top": 84,
"bottom": 0,
"left": 0,
"right": 0
},
"preservePosition": true,
"tipText": "在页面右下角重新打开小窗播放"
},
"enableMagicDanmaku": true,
"dmV2Config": {
"isDegraded": false,
"isProduction": true,
"isDCLExperiment": true,
"dmCanvasClipEnable": true
},
"autoPlayPolicy": "autoPlayInMuted",
"enableLogger": false,
"enableShortCut": true,
"enablePlayTitlePlugin": false,
"settingManagerConfig": {
"enablePlayLoopSettingBtn": true,
"forceDisableSetting": {
"playNext": false
}
},
"responsiveBtnOrder": [
".txp_btn_role_filter",
".txp-btn-comment--slot",
".txp-btn-vip--slot",
".barrage-input",
".barrage-switch",
".barrage-setting-wrapper",
".txp_subtitle_panel_btn",
".txp_btn_pip",
".thumbplayer_setting_btn",
".txp_btn_loop",
".txp_btn_fake",
".txp_btn_fullscreen"
],
"ctrlConfig": {
"disableNextBtn": true,
"enableLoop": true,
"keysListenedOnBody": [
" ",
"ArrowLeft",
"ArrowRight"
],
"overrideComponents": {},
"removeComps": [
"Loop"
]
},
"vodFlowReporterConfig": {
"paramsKey": {
"extrainfo": "dtInfo"
}
},
"plugins": [],
"hlsjsKernelConfig": {
"progressive": true
},
"subtitleConfig": {
"renderer": 2,
"enableCtrlLogics": false,
"stickTo": "container"
}
},
"instanceId": "521a46a4b6abb17acdec8c56f89f5360"
}
