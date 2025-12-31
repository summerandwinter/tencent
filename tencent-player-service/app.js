// app.js
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const apiRoutes = require('./src/routes/api');
const teeService = require('./src/services/teeService');

const app = express();

app.use(bodyParser.json({ limit: '10mb' }));

// ============================================================
// 【修复 1】还原 vm-env 路由，确保页面环境与原代码一致
// ============================================================
app.get('/vm-env', (req, res) => {
    res.send('<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>');
});

app.use('/api', apiRoutes);

app.listen(config.PORT, async () => {
    console.log(`>>> Server started on port ${config.PORT}`);
    // 传入完整 URL 供 Service 使用
    const vmUrl = `http://127.0.0.1:${config.PORT}/vm-env`;
    console.log(">>> [Init] Pre-warming services...");
    await teeService.init(vmUrl); // 传入 URL
});