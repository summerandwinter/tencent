// 调试 responseModifier 赋值的脚本
// 使用方法：复制到浏览器控制台中执行

console.log('=== responseModifier 调试脚本启动 ===');

// 方法1：全局对象属性监听
(function() {
  const originalDefineProperty = Object.defineProperty;
  Object.defineProperty = function(obj, prop, descriptor) {
    if (prop === 'responseModifier') {
      console.log('📍 发现 responseModifier 定义:', {
        对象: obj,
        属性: prop,
        描述符: descriptor,
        调用堆栈: new Error().stack
      });
      
      // 为该属性添加 getter/setter 监控
      const originalSet = descriptor.set;
      if (originalSet) {
        descriptor.set = function(value) {
          console.log('📍 responseModifier 被赋值:', {
            新值: value,
            原值: this._responseModifier,
            调用堆栈: new Error().stack
          });
          originalSet.call(this, value);
        };
      }
    }
    return originalDefineProperty.call(this, obj, prop, descriptor);
  };
})();

// 方法2：监控特定对象的 responseModifier 属性
function monitorObjectResponseModifier(obj, objName = 'unknown') {
  if (!obj || typeof obj !== 'object') return;
  
  Object.defineProperty(obj, 'responseModifier', {
    set: function(value) {
      console.log(`📍 [${objName}] responseModifier 赋值:`, {
        新值: value,
        赋值类型: typeof value,
        调用堆栈: new Error().stack
      });
      this._responseModifier = value;
    },
    get: function() {
      console.log(`📍 [${objName}] responseModifier 被读取:`, this._responseModifier);
      return this._responseModifier;
    }
  });
}

// 方法3：定期扫描所有对象查找 responseModifier
function scanForResponseModifier() {
  const foundObjects = [];
  const scanned = new Set();
  
  function scan(obj, path = 'window') {
    if (scanned.has(obj) || obj === null || typeof obj !== 'object') return;
    scanned.add(obj);
    
    try {
      if ('responseModifier' in obj) {
        foundObjects.push({
          对象: obj,
          路径: path,
          当前值: obj.responseModifier,
          类型: typeof obj.responseModifier
        });
      }
      
      // 递归扫描子对象
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
          scan(obj[key], `${path}.${key}`);
        }
      }
    } catch (e) {
      // 忽略访问错误
    }
  }
  
  scan(window, 'window');
  return foundObjects;
}

// 启动定期扫描
console.log('🔍 开始定期扫描 responseModifier...');
setInterval(() => {
  const results = scanForResponseModifier();
  if (results.length > 0) {
    console.log('📋 发现 responseModifier 对象:', results);
  }
}, 1000);

// 方法4：Hook 原型方法
(function() {
  const originalSet = Map.prototype.set;
  Map.prototype.set = function(key, value) {
    if (key === 'responseModifier') {
      console.log('📍 Map.set responseModifier:', {
        key: key,
        value: value,
        调用堆栈: new Error().stack
      });
    }
    return originalSet.call(this, key, value);
  };
})();

console.log('✅ responseModifier 调试脚本加载完成');
console.log('💡 使用说明:');
console.log('   1. monitorObjectResponseModifier(obj, "名称") - 监控特定对象');
console.log('   2. scanForResponseModifier() - 手动扫描所有对象');
console.log('   3. 查看控制台输出获取详细信息');