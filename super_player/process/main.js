// const tools = require('./txv_decryptor.js');

// console.log("🛠️  正在加载解密工具库...");
// console.log("📦 包含的解密器:", Object.keys(tools).join(", "));

// // ---------------------------------------------------------
// // 1. 自动寻找那个 "VC" (即对应 i(369) = "config" 的函数)
// // ---------------------------------------------------------
// let mainDecryptorName = null;

// for (const name of Object.keys(tools)) {
//     try {
//         const result = tools[name](369);
//         // 你之前验证过，369 应该是 "config" 或 "vinfo" 这种有意义的词
//         if (result === "config" || result === "vinfo" || result === "getSspKey") {
//             console.log(`\n✅ 找到主解密函数: [${name}]`);
//             console.log(`   验证: ${name}(369) = "${result}"`);
//             mainDecryptorName = name;
//             break;
//         }
//     } catch (e) {
//         // 忽略索引越界错误
//     }
// }

// if (!mainDecryptorName) {
//     console.log("\n⚠️ 没有自动匹配到 i(369)='config' 的函数，尝试打印所有函数的测试值：");
//     // 暴力打印前几个值，帮你人工辨别
//     for (const name of Object.keys(tools)) {
//         try {
//             console.log(`   ${name}(0) = "${tools[name](0)}"`);
//         } catch(e) {}
//     }
// } else {
//     // ---------------------------------------------------------
//     // 2. 使用演示：解密任意参数
//     // ---------------------------------------------------------
//     const VC = tools[mainDecryptorName];
    
//     console.log("\n🚀 开始解密测试:");
//     console.log(`   i(369) -> ${VC(589)}`);
//     console.log(`   t(405) -> ${VC(405)}`);
//     console.log(`   t(374) -> ${VC(374)}`); // 之前日志里的 2660kvwDBJ
//     console.log(`   t(385) -> ${VC(385)}`); // 之前日志里的 550149UPzynA
    
//     // 如果你要解密 anc，通常是另一个函数，可以在这里尝试
//     // 假设是 fp
//     if (tools.fp) {
//         console.log("\n🔍 尝试广告解密器 (fp):");
//         try {
//             console.log(`   fp(0) -> ${tools.fp(0)}`);
//         } catch(e) {}
//     }
// }

// ---------------------------------------------------------
// 3. 如何在你的爬虫/分析代码中使用？
// ---------------------------------------------------------

const txv = require('./txv_decryptor');

// 如果你知道 369 对应的是 VC 函数
const configKey = txv.Jh(525); 
console.log(configKey)

// // 如果你知道 123 对应的是 fp 函数
// const adParam = txv.fp(123);
