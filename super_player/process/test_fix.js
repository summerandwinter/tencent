const decryptNode = require('./decrypt_node');
const fs = require('fs');

async function testDecryptNode() {
  try {
    console.log('正在读取anc.txt测试数据...');
    
    // 读取anc.txt文件
    const ancContent = fs.readFileSync('/Users/summer/dev/mine/tencent/super_player/process/anc.txt', 'utf8').trim();
    console.log('✓ anc.txt读取成功');
    console.log('数据长度:', ancContent.length);
    
    // 创建测试输入对象
    const input = {
      anc: ancContent
    };
    
    console.log('正在测试decryptNode函数...');
    console.log('输入对象包含anc参数:', !!input.anc);
    
    // 调用decryptNode函数
    const result = await decryptNode(input);
    
    console.log('✓ decryptNode执行成功!');
    console.log('返回结果类型:', typeof result);
    
    if (result && typeof result === 'object') {
      console.log('返回对象的主要属性:');
      console.log('- Keys:', Object.keys(result).slice(0, 10));
      console.log('- Total keys:', Object.keys(result).length);
      
      // 尝试查找可能的证书或密钥数据
      const possibleKeys = ['cert', 'key', 'license', 'certificate', 'data', 'result'];
      for (const key of possibleKeys) {
        if (result[key]) {
          console.log(`- 找到 ${key} 属性:`, typeof result[key]);
        }
      }
    } else {
      console.log('返回结果:', result);
    }
    
  } catch (error) {
    console.error('❌ 测试失败:');
    console.error('错误对象类型:', typeof error);
    console.error('错误对象值:', error);
    if (error) {
      console.error('错误类型:', error.constructor.name);
      console.error('错误信息:', error.message);
    } else {
      console.error('错误对象为 undefined 或 null');
    }
    
    if (error && error.stack) {
      console.error('错误堆栈 (前10行):');
      console.error(error.stack.split('\n').slice(0, 10).join('\n'));
    }
  }
}

// 运行测试
testDecryptNode();