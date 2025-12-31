/**
 * 腾讯视频播放器Widevine解密器测试和使用示例
 * 
 * 使用方法:
 * 1. 安装依赖: npm install jsdom
 * 2. 运行测试: node widevine_test.js
 */

const WidevineDecryptor = require('./widevine_decryptor');
const fs = require('fs');
const path = require('path');

async function testDecryptor() {
    console.log('🧪 开始测试Widevine解密器...\n');

    const decryptor = new WidevineDecryptor();

    try {
        // 测试用例1: 使用anc.txt文件中的数据
        console.log('📁 测试用例1: 使用本地anc.txt文件');
        
        const ancFilePath = path.join(__dirname, 'anc.txt');
        if (fs.existsSync(ancFilePath)) {
            const ancContent = fs.readFileSync(ancFilePath, 'utf8').trim();
            console.log('📋 anc文件内容长度:', ancContent.length);
            console.log('📋 anc前50个字符:', ancContent.substring(0, 50) + '...');
            
            const result1 = await decryptor.decrypt({ anc: ancContent });
            console.log('✅ 测试用例1结果:', result1 ? '成功' : '失败');
        } else {
            console.log('⚠️ anc.txt文件不存在，跳过测试用例1');
        }

        console.log('\n' + '='.repeat(50) + '\n');

        // 测试用例2: 使用模拟的anc数据
        console.log('📁 测试用例2: 使用模拟数据');
        
        // 模拟一个简单的anc字符串 (实际使用时应该是真实的Base64编码数据)
        const mockAnc = 'AGFzbQEAAAAB4gEeYAF/AX9gAn9/AGADf39/AGACf38Bf2ADf39/AX9gAX8AYAAAYAZ/f35/f38Bf2ADf39+AX9gBH9/f38AYAR/fn9/AX9gBn9/fn9+fwF/YAV/f39/fwBgA39/fgBgBn98f39/fwF/YAV/f39/fwF/YAR/f39/AX9gAnx/AXxgB39/f35/f38AYAp/f39/f39/f39/AX9gAn5/AX9gAAF/YAh/f39/f39/fwF/YAJ/fgBgCH9/f39/f39/AGAAAX5gBH9/f34AYAl/f39/f39/f38Bf2AAAXxgBn9/f39/fwF/AikEA1VBNgMwelMABgNVQTYDT0ZRAAADVUE2AzJIaQAcA1VBNgNuM3oAAgNnZgEAAQAGEAMABQEAAwERBgICAQEAAAEMDQIAAQAECQICEgcDABMAAgEAABQCFQQWABcYAQUCBAgCAAUAAAAZCgwBAwIaAQEACQENBQIJAA4PBQUbAAsCDx0ABAMBAAEAAQABAAICAgQFAXABCgoFBgEBgAKAAgYIAX8BQbCcBAsHYRADWUNPAB8DNjdXAFYDZ3prAAcDOHRsADIDSFJBAFMDQ3VrADADdTRwACgDZl9qAFsDWGlBAAgDREFwADkDUWExAD0DeTNLAAkDMVVrAQADTXlmAFQDN3ZpAgADS0hkAFcJDwEAQQELCSY6XkJYJVJIIAqXiwNmYwECfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwhASACKAIIIQMjAEEQayIAJAAgACABNgIMIAAgAzYCCCAAKAIMIAAoAggQJyAAKAIIECkQKiAAQRBqJAAgAkEQaiQACzcBAX8jAEEQayIBJAAgASAANgIMAn8gASgCDCIAECxBAXEEQCAAEBgMAQsgABA8CyABQRBqJAALTgEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIoAhwiACACQRBqIAJBCGoQLyAAIAIoAhgiASABED8QEyMAQRBrIAA2AgwgAkEgaiQAC+AoAQt/IwBBEGsiCyQAAkACQAJAAkACQAJAAkACQCAAQfQBTQRAQbgYKAIAIglBECAAQQtqQXhxIABBC0kbIgZBA3YiAnYiAUEDcQRAIAFBf3NBAXEgAmoiA0EDdCIBQegYaigCACIEQQhqIQACQCAEKAIIIgIgAUHgGGoiAUYEQEG4GCAJQX4gA3dxNgIADAELIAIgATYCDCABIAI2AggLIAQgA0EDdCIBQQNyNgIEIAEgBGoiASABKAIEQQFyNgIEDAkLIAZBwBgoAgAiCk0NASABBEACQEECIAJ0IgBBACAAa3IgASACdHEiAEEAIABrcWgiAkEDdCIAQegYaigCACIEKAIIIgEgAEHgGGoiAEYEQEG4GCAJQX4gAndxIgk2AgAMAQsgASAANgIMIAAgATYCCAsgBEEIaiEAIAQgBkEDcjYCBCAEIAZqIgMgAkEDdCIBIAZrIgVBAXI2AgQgASAEaiAFNgIAIAoEQCAKQQN2IgJBA3RB4BhqIQFBzBgoAgAhBwJ/IAlBASACdCICcUUEQEG4GCACIAlyNgIAIAEMAQsgASgCCAshBCABIAc2AgggBCAHNgIMIAcgATYCDCAHIAQ2AggLQcwYIAM2AgBBwBggBTYCAAwJC0G8GCgCACIHRQ0BIAdBACAHa3FoQQJ0QegaaigCACIBKAIEQXhxIAZrIQMgASECA0ACQCACKAIQIgBFBEAgAkEUaigCACIARQ0BCyAAKAIEQXhxIAZrIgIgAyACIANJIgIbIQMgACABIAIbIQEgACECDAELCyABKAIYIQggASABKAIMIgRHBEBByBgoAgAaIAEoAggiACAENgIMIAQgADYCCAwICyABQRRqIgIoAgAiAEUEQCABKAIQIgBFDQMgAUEQaiECCwNAIAIhBSAAIgRBFGoiAigCACIADQAgBEEQaiECIAQoAhAiAA0ACyAFQQA=';
        
        const result2 = await decryptor.decrypt({ anc: mockAnc });
        console.log('✅ 测试用例2结果:', result2 ? '成功' : '失败');
        
        console.log('\n' + '='.repeat(50) + '\n');

        // 测试用例3: 错误处理测试
        console.log('📁 测试用例3: 错误处理测试');
        
        try {
            await decryptor.decrypt({}); // 缺少anc参数
            console.log('❌ 错误处理测试失败: 应该抛出错误');
        } catch (error) {
            console.log('✅ 错误处理测试成功:', error.message);
        }

        try {
            await decryptor.decrypt({ anc: 'invalid_base64' }); // 无效的Base64
            console.log('❌ 无效Base64测试失败: 应该抛出错误');
        } catch (error) {
            console.log('✅ 无效Base64测试成功:', error.message);
        }

        console.log('\n' + '='.repeat(50) + '\n');

        // 测试用例4: 真实使用场景模拟
        console.log('📁 测试用例4: 真实使用场景模拟');
        
        const realUsageExample = async () => {
            // 模拟从播放器获取的anc数据
            const playerAncData = 'AGFzbQEAAAAB4gEeYAF/AX9gAn9/AGADf39/AGACf38Bf2ADf39/AX9gAX8AYAAAYAZ/f35/f38Bf2ADf39+AX9gBH9/f38AYAR/fn9/AX9gBn9/fn9+fwF/YAV/f39/fwBgA39/fgBgBn98f39/fwF/YAV/f39/fwF/YAR/f39/AX9gAnx/AXxgB39/f35/f38AYAp/f39/f39/f39/AX9gAn5/AX9gAAF/YAh/f39/f39/fwF/YAJ/fgBgCH9/f39/f39/AGAAAX5gBH9/f34AYAl/f39/f39/f38Bf2AAAXxgBn9/f39/fwF/AikEA1VBNgMwelMABgNVQTYDT0ZRAAADVUE2AzJIaQAcA1VBNgNuM3oAAgNnZgEAAQAGEAMABQEAAwERBgICAQEAAAEMDQIAAQAECQICEgcDABMAAgEAABQCFQQWABcYAQUCBAgCAAUAAAAZCgwBAwIaAQEACQENBQIJAA4PBQUbAAsCDx0ABAMBAAEAAQABAAICAgQFAXABCgoFBgEBgAKAAgYIAX8BQbCcBAsHYRADWUNPAB8DNjdXAFYDZ3prAAcDOHRsADIDSFJBAFMDQ3VrADADdTRwACgDZl9qAFsDWGlBAAgDREFwADkDUWExAD0DeTNLAAkDMVVrAQADTXlmAFQDN3ZpAgADS0hkAFcJDwEAQQELCSY6XkJYJVJIIAqXiwNmYwECfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwhASACKAIIIQMjAEEQayIAJAAgACABNgIMIAAgAzYCCCAAKAIMIAAoAggQJyAAKAIIECkQKiAAQRBqJAAgAkEQaiQACzcBAX8jAEEQayIBJAAgASAANgIMAn8gASgCDCIAECxBAXEEQCAAEBgMAQsgABA8CyABQRBqJAALTgEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIoAhwiACACQRBqIAJBCGoQLyAAIAIoAhgiASABED8QEyMAQRBrIAA2AgwgAkEgaiQAC+AoAQt/IwBBEGsiCyQAAkACQAJAAkACQAJAAkACQCAAQfQBTQRAQbgYKAIAIglBECAAQQtqQXhxIABBC0kbIgZBA3YiAnYiAUEDcQRAIAFBf3NBAXEgAmoiA0EDdCIBQegYaigCACIEQQhqIQACQCAEKAIIIgIgAUHgGGoiAUYEQEG4GCAJQX4gA3dxNgIADAELIAIgATYCDCABIAI2AggLIAQgA0EDdCIBQQNyNgIEIAEgBGoiASABKAIEQQFyNgIEDAkLIAZBwBgoAgAiCk0NASABBEACQEECIAJ0IgBBACAAa3IgASACdHEiAEEAIABrcWgiAkEDdCIAQegYaigCACIEKAIIIgEgAEHgGGoiAEYEQEG4GCAJQX4gAndxIgk2AgAMAQsgASAANgIMIAAgATYCCAsgBEEIaiEAIAQgBkEDcjYCBCAEIAZqIgMgAkEDdCIBIAZrIgVBAXI2AgQgASAEaiAFNgIAIAoEQCAKQQN2IgJBA3RB4BhqIQFBzBgoAgAhBwJ/IAlBASACdCICcUUEQEG4GCACIAlyNgIAIAEMAQsgASgCCAshBCABIAc2AgggBCAHNgIMIAcgATYCDCAHIAQ2AggLQcwYIAM2AgBBwBggBTYCAAwJC0G8GCgCACIHRQ0BIAdBACAHa3FoQQJ0QegaaigCACIBKAIEQXhxIAZrIQMgASECA0ACQCACKAIQIgBFBEAgAkEUaigCACIARQ0BCyAAKAIEQXhxIAZrIgIgAyACIANJIgIbIQMgACABIAIbIQEgACECDAELCyABKAIYIQggASABKAIMIgRHBEBByBgoAgAaIAEoAggiACAENgIMIAQgADYCCAwICyABQRRqIgIoAgAiAEUEQCABKAIQIgBFDQMgAUEQaiECCwNAIAIhBSAAIgRBFGoiAigCACIADQAgBEEQaiECIAQoAhAiAA0ACyAFQQA=';
            
            console.log('🎬 开始解密视频流数据...');
            
            const decryptedResult = await decryptor.decrypt({
                anc: playerAncData
            });
            
            console.log('🎯 解密完成，返回结果类型:', typeof decryptedResult);
            console.log('📊 结果内容预览:', 
                decryptedResult ? 
                JSON.stringify(decryptedResult).substring(0, 100) + '...' : 
                'null 或 undefined');
            
            return decryptedResult;
        };

        const result4 = await realUsageExample();
        console.log('✅ 测试用例4完成');

        console.log('\n' + '='.repeat(50) + '\n');
        console.log('🎉 所有测试用例执行完成!');
        console.log('📝 使用建议:');
        console.log('   1. 确保输入的anc参数是有效的Base64编码字符串');
        console.log('   2. 在生产环境中添加适当的错误处理和重试机制');
        console.log('   3. 可以根据需要扩展responseModifier中的解密逻辑');
        console.log('   4. 建议缓存解密器实例以提高性能');

    } catch (error) {
        console.error('❌ 测试过程中发生错误:', error);
        console.error('错误堆栈:', error.stack);
    } finally {
        // 清理资源
        decryptor.destroy();
        console.log('🧹 资源清理完成');
    }
}

// 如果直接运行此文件，则执行测试
if (require.main === module) {
    testDecryptor().catch(console.error);
}

// 导出测试函数供其他模块使用
module.exports = {
    testDecryptor,
    
    // 快速使用示例
    quickExample: async () => {
        console.log('🚀 快速使用示例');
        
        const decryptor = new WidevineDecryptor();
        
        try {
            const result = await decryptor.decrypt({
                anc: 'AGFzbQEAAAAB4gEeYAF/AX9gAn9/AGADf39/AGACf38Bf2ADf39/AX9gAX8AYAAAYAZ/f35/f38Bf2ADf39+AX9gBH9/f38AYAR/fn9/AX9gBn9/fn9+fwF/YAV/f39/fwBgA39/fgBgBn98f39/fwF/YAV/f39/fwF/YAR/f39/AX9gAnx/AXxgB39/f35/f38AYAp/f39/f39/f39/AX9gAn5/AX9gAAF/YAh/f39/f39/fwF/YAJ/fgBgCH9/f39/f39/AGAAAX5gBH9/f34AYAl/f39/f39/f38Bf2AAAXxgBn9/f39/fwF/AikEA1VBNgMwelMABgNVQTYDT0ZRAAADVUE2AzJIaQAcA1VBNgNuM3oAAgNnZgEAAQAGEAMABQEAAwERBgICAQEAAAEMDQIAAQAECQICEgcDABMAAgEAABQCFQQWABcYAQUCBAgCAAUAAAAZCgwBAwIaAQEACQENBQIJAA4PBQUbAAsCDx0ABAMBAAEAAQABAAICAgQFAXABCgoFBgEBgAKAAgYIAX8BQbCcBAsHYRADWUNPAB8DNjdXAFYDZ3prAAcDOHRsADIDSFJBAFMDQ3VrADADdTRwACgDZl9qAFsDWGlBAAgDREFwADkDUWExAD0DeTNLAAkDMVVrAQADTXlmAFQDN3ZpAgADS0hkAFcJDwEAQQELCSY6XkJYJVJIIAqXiwNmYwECfyMAQRBrIgIkACACIAA2AgwgAiABNgIIIAIoAgwhASACKAIIIQMjAEEQayIAJAAgACABNgIMIAAgAzYCCCAAKAIMIAAoAggQJyAAKAIIECkQKiAAQRBqJAAgAkEQaiQACzcBAX8jAEEQayIBJAAgASAANgIMAn8gASgCDCIAECxBAXEEQCAAEBgMAQsgABA8CyABQRBqJAALTgEBfyMAQSBrIgIkACACIAA2AhwgAiABNgIYIAIoAhwiACACQRBqIAJBCGoQLyAAIAIoAhgiASABED8QEyMAQRBrIAA2AgwgAkEgaiQAC+AoAQt/IwBBEGsiCyQAAkACQAJAAkACQAJAAkACQCAAQfQBTQRAQbgYKAIAIglBECAAQQtqQXhxIABBC0kbIgZBA3YiAnYiAUEDcQRAIAFBf3NBAXEgAmoiA0EDdCIBQegYaigCACIEQQhqIQACQCAEKAIIIgIgAUHgGGoiAUYEQEG4GCAJQX4gA3dxNgIADAELIAIgATYCDCABIAI2AggLIAQgA0EDdCIBQQNyNgIEIAEgBGoiASABKAIEQQFyNgIEDAkLIAZBwBgoAgAiCk0NASABBEACQEECIAJ0IgBBACAAa3IgASACdHEiAEEAIABrcWgiAkEDdCIAQegYaigCACIEKAIIIgEgAEHgGGoiAEYEQEG4GCAJQX4gAndxIgk2AgAMAQsgASAANgIMIAAgATYCCAsgBEEIaiEAIAQgBkEDcjYCBCAEIAZqIgMgAkEDdCIBIAZrIgVBAXI2AgQgASAEaiAFNgIAIAoEQCAKQQN2IgJBA3RB4BhqIQFBzBgoAgAhBwJ/IAlBASACdCICcUUEQEG4GCACIAlyNgIAIAEMAQsgASgCCAshBCABIAc2AgggBCAHNgIMIAcgATYCDCAHIAQ2AggLQcwYIAM2AgBBwBggBTYCAAwJC0G8GCgCACIHRQ0BIAdBACAHa3FoQQJ0QegaaigCACIBKAIEQXhxIAZrIQMgASECA0ACQCACKAIQIgBFBEAgAkEUaigCACIARQ0BCyAAKAIEQXhxIAZrIgIgAyACIANJIgIbIQMgACABIAIbIQEgACECDAELCyABKAIYIQggASABKAIMIgRHBEBByBgoAgAaIAEoAggiACAENgIMIAQgADYCCAwICyABQRRqIgIoAgAiAEUEQCABKAIQIgBFDQMgAUEQaiECCwNAIAIhBSAAIgRBFGoiAigCACIADQAgBEEQaiECIAQoAhAiAA0ACyAFQQA='
            });
            
            console.log('✅ 解密成功:', result);
            return result;
            
        } catch (error) {
            console.error('❌ 解密失败:', error);
            throw error;
        } finally {
            decryptor.destroy();
        }
    }
};