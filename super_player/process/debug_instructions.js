// 调试脚本：分析 Base64 解码后的指令序列
const fs = require('fs');
const path = require('path');

// 复制解码逻辑
function base64Decode(encoded) {
  return Buffer.from(encoded, 'base64');
}

function decodeVarint(buffer, offset = 0) {
  let value = 0;
  let shift = 0;
  let byte;
  do {
    if (offset >= buffer.length) {
      throw new Error("Varint解码超出缓冲区长度");
    }
    byte = buffer[offset++];
    value |= (byte & 0x7F) << shift;
    shift += 7;
  } while (byte & 0x80);
  
  // 有符号整数转换
  return {
    value: value >> 1 ^ -(value & 1),
    offset: offset
  };
}

function decodeInstructions(anc) {
  const buffer = base64Decode(anc);
  console.log('Base64 解码后的 buffer 长度:', buffer.length);
  console.log('Buffer 内容 (hex):', buffer.toString('hex'));
  console.log('Buffer 内容 (utf8):', buffer.toString('utf8'));
  
  const instructions = [];
  let offset = 0;
  let step = 0;
  
  while (offset < buffer.length && step < 20) { // 只解码前20个指令避免输出太多
    const result = decodeVarint(buffer, offset);
    instructions.push(result.value);
    console.log(`指令 ${step}: ${result.value} (offset: ${offset} -> ${result.offset})`);
    offset = result.offset;
    step++;
  }
  
  console.log(`总共解码了 ${instructions.length} 个指令`);
  console.log('前10个指令:', instructions.slice(0, 10));
  
  return instructions;
}

const testAnc = "eyJyYyI6IkdxQ2xScU81TXZU";
console.log('测试 ANC:', testAnc);
console.log('='.repeat(50));

try {
  const instructions = decodeInstructions(testAnc);
} catch (e) {
  console.error('解码错误:', e.message);
}