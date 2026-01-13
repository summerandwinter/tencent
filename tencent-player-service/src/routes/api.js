const express = require('express');
const router = express.Router();
const teeService = require('../services/teeService');

// TEE 解密接口
router.post('/tee/decrypt', async (req, res) => {
    try {
        const result = await teeService.decrypt(req.body);
        res.json({ status: 0, data: result });
    } catch (error) {
        console.error("Decrypt Error:", error);
        res.status(500).json({ status: -1, msg: error.message });
    }
});

// TEE 生成 CKey 接口
router.post('/tee/genCkey', async (req, res) => {
    try {
        const result = await teeService.genCkey(req.body);
        console.log(result)
        res.json({ status: 0, data: result });
    } catch (error) {
        console.error("GenCkey Error:", error);
        res.status(500).json({ status: -1, msg: error.message });
    }
});

// 预留：CKey 接口
// router.post('/ckey/gen', ckeyController.generate);

module.exports = router;