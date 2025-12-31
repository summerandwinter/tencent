import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { RateLimiterMemory } from 'rate-limiter-flexible';
import { decryptService } from './decrypt-service.js';

const app = express();
const PORT = process.env.PORT || 3000;

// 安全中间件
app.use(helmet({
    contentSecurityPolicy: false, // 可根据需要配置
    crossOriginEmbedderPolicy: false
}));
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// 速率限制
const rateLimiter = new RateLimiterMemory({
    points: 10, // 每个IP每10秒10次请求
    duration: 10
});

// 速率限制中间件
const rateLimiterMiddleware = (req, res, next) => {
    rateLimiter.consume(req.ip)
        .then(() => next())
        .catch(() => res.status(429).json({ 
            error: '请求过于频繁，请稍后再试' 
        }));
};

// 路由
app.get('/', (req, res) => {
    res.json({ 
        service: '视频解密API',
        version: '1.0.0',
        endpoints: {
            decrypt: 'POST /api/decrypt',
            health: 'GET /api/health'
        }
    });
});

// 健康检查
app.get('/api/health', async (req, res) => {
    const health = await decryptService.healthCheck();
    res.json(health);
});

// 解密接口
app.post('/api/decrypt', rateLimiterMiddleware, async (req, res) => {
    try {
        const { data, options } = req.body;
        
        if (!data) {
            return res.status(400).json({ 
                error: '缺少解密数据',
                example: { 
                    data: { anc: '加密数据...' },
                    options: { timeout: 5000 }
                }
            });
        }

        console.log(`收到解密请求，数据长度: ${JSON.stringify(data).length} bytes`);
        
        // 设置超时
        const timeout = options?.timeout || 10000;
        const timeoutPromise = new Promise((_, reject) => 
            setTimeout(() => reject(new Error('解密超时')), timeout)
        );

        // 执行解密
        const result = await Promise.race([
            decryptService.decrypt(data),
            timeoutPromise
        ]);

        res.json(result);
    } catch (error) {
        console.error('API错误:', error);
        res.status(500).json({
            success: false,
            error: error.message,
            timestamp: Date.now()
        });
    }
});

// 批量解密接口
app.post('/api/decrypt/batch', rateLimiterMiddleware, async (req, res) => {
    try {
        const { items, concurrency = 3 } = req.body;
        
        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: '需要数组格式的批量数据' });
        }

        if (items.length > 50) {
            return res.status(400).json({ error: '单次批量解密最多50条数据' });
        }

        // 限制并发数
        const results = [];
        for (let i = 0; i < items.length; i += concurrency) {
            const batch = items.slice(i, i + concurrency);
            const batchResults = await Promise.all(
                batch.map(item => decryptService.decrypt(item))
            );
            results.push(...batchResults);
            
            // 批量请求间短暂延迟
            if (i + concurrency < items.length) {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
        }

        res.json({
            success: true,
            count: results.length,
            results,
            timestamp: Date.now()
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// 错误处理中间件
app.use((err, req, res, next) => {
    console.error('全局错误:', err);
    res.status(500).json({ 
        error: '服务器内部错误',
        message: err.message 
    });
});

// 启动服务器
const startServer = async () => {
    try {
        // 预热：初始化解密服务
        console.log('正在预热解密服务...');
        await decryptService.init();
        
        app.listen(PORT, () => {
            console.log(`✅ 解密API服务已启动`);
            console.log(`📡 端口: ${PORT}`);
            console.log(`🌐 接口地址: http://localhost:${PORT}`);
            console.log(`🔐 解密接口: POST http://localhost:${PORT}/api/decrypt`);
        });

        // 优雅关闭
        process.on('SIGTERM', async () => {
            console.log('收到关闭信号，正在清理资源...');
            await decryptService.cleanup();
            process.exit(0);
        });
        
        process.on('SIGINT', async () => {
            console.log('收到中断信号，正在清理资源...');
            await decryptService.cleanup();
            process.exit(0);
        });
    } catch (error) {
        console.error('启动失败:', error);
        process.exit(1);
    }
};

startServer();