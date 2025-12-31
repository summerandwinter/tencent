/**
 * 腾讯视频播放器Widevine解密服务示例
 * 
 * 这是一个简单的HTTP服务器示例，展示如何在生产环境中使用WidevineDecryptor
 * 
 * 运行方式:
 * 1. 安装依赖: npm install jsdom express
 * 2. 启动服务: node server_example.js
 * 3. 发送POST请求到 http://localhost:3000/decrypt
 */

const express = require('express');
const WidevineDecryptor = require('./widevine_decryptor');

class WidevineDecryptService {
    constructor() {
        this.app = express();
        this.setupMiddleware();
        this.setupRoutes();
        this.decryptor = new WidevineDecryptor();
    }

    /**
     * 设置中间件
     */
    setupMiddleware() {
        this.app.use(express.json({ limit: '50mb' }));
        this.app.use(express.urlencoded({ extended: true, limit: '50mb' }));
        
        // CORS设置 (生产环境请根据需要调整)
        this.app.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            
            if (req.method === 'OPTIONS') {
                res.sendStatus(200);
            } else {
                next();
            }
        });

        // 请求日志
        this.app.use((req, res, next) => {
            console.log(`📡 ${new Date().toISOString()} - ${req.method} ${req.path}`);
            next();
        });
    }

    /**
     * 设置路由
     */
    setupRoutes() {
        // 健康检查
        this.app.get('/health', (req, res) => {
            res.json({
                status: 'ok',
                timestamp: new Date().toISOString(),
                service: 'widevine-decryptor',
                version: '1.0.0'
            });
        });

        // 解密接口
        this.app.post('/decrypt', async (req, res) => {
            try {
                console.log('🔓 收到解密请求');
                
                // 验证请求参数
                if (!req.body || typeof req.body.anc !== 'string') {
                    return res.status(400).json({
                        error: '无效的请求参数',
                        message: '需要提供有效的anc参数 (Base64编码字符串)',
                        code: 'INVALID_PARAM'
                    });
                }

                const { anc } = req.body;
                console.log('📦 anc长度:', anc.length);

                // 执行解密
                const result = await this.decryptor.decrypt({ anc });
                
                console.log('✅ 解密成功');
                
                // 返回结果
                res.json({
                    success: true,
                    data: result,
                    timestamp: new Date().toISOString()
                });

            } catch (error) {
                console.error('❌ 解密失败:', error);
                
                res.status(500).json({
                    success: false,
                    error: '解密过程失败',
                    message: error.message,
                    code: 'DECRYPT_FAILED'
                });
            }
        });

        // 获取服务信息
        this.app.get('/info', (req, res) => {
            res.json({
                name: '腾讯视频Widevine解密服务',
                version: '1.0.0',
                description: '基于superplayer-txv.js移植的Node.js解密服务',
                endpoints: {
                    'GET /health': '健康检查',
                    'POST /decrypt': '执行解密操作',
                    'GET /info': '服务信息'
                },
                usage: {
                    method: 'POST',
                    url: '/decrypt',
                    body: {
                        anc: "Base64编码的指令字符串"
                    }
                },
                timestamp: new Date().toISOString()
            });
        });

        // 404处理
        this.app.use('*', (req, res) => {
            res.status(404).json({
                error: '接口不存在',
                message: `路径 ${req.originalUrl} 未找到`,
                availableEndpoints: [
                    'GET /health',
                    'POST /decrypt',
                    'GET /info'
                ]
            });
        });
    }

    /**
     * 启动服务器
     */
    async start(port = 3000) {
        return new Promise((resolve, reject) => {
            try {
                this.server = this.app.listen(port, () => {
                    console.log(`🚀 Widevine解密服务已启动`);
                    console.log(`🌐 服务地址: http://localhost:${port}`);
                    console.log(`📋 健康检查: http://localhost:${port}/health`);
                    console.log(`ℹ️  服务信息: http://localhost:${port}/info`);
                    console.log(`🔓 解密接口: POST http://localhost:${port}/decrypt`);
                    console.log('');
                    console.log('📝 使用示例:');
                    console.log('curl -X POST http://localhost:' + port + '/decrypt \\');
                    console.log('  -H "Content-Type: application/json" \\');
                    console.log('  -d \'{"anc": "Base64编码字符串"}\'');
                    resolve(this.server);
                });
            } catch (error) {
                console.error('❌ 服务器启动失败:', error);
                reject(error);
            }
        });
    }

    /**
     * 停止服务器
     */
    async stop() {
        return new Promise((resolve) => {
            if (this.server) {
                this.server.close(() => {
                    console.log('🛑 服务器已停止');
                    if (this.decryptor) {
                        this.decryptor.destroy();
                    }
                    resolve();
                });
            } else {
                resolve();
            }
        });
    }

    /**
     * 获取Express应用实例
     */
    getApp() {
        return this.app;
    }
}

// 如果直接运行此文件，则启动服务器
if (require.main === module) {
    const service = new WidevineDecryptService();
    
    service.start().catch(error => {
        console.error('服务启动失败:', error);
        process.exit(1);
    });

    // 优雅关闭处理
    process.on('SIGTERM', async () => {
        console.log('收到SIGTERM信号，正在关闭服务器...');
        await service.stop();
        process.exit(0);
    });

    process.on('SIGINT', async () => {
        console.log('收到SIGINT信号，正在关闭服务器...');
        await service.stop();
        process.exit(0);
    });
}

// 导出服务类
module.exports = WidevineDecryptService;