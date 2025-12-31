// 在浏览器控制台中执行此脚本设置断点
// 用于追踪 responseModifier 的赋值过程

// 方法1：Hook 所有对象的属性赋值
function setResponseModifierBreakpoint() {
  // 保存原始的 Object.defineProperty
  const originalDefineProperty = Object.defineProperty;
  
  // 重写 Object.defineProperty 来监控 responseModifier
  Object.defineProperty = function(obj, prop, descriptor) {
    if (prop === 'responseModifier') {
      console.log('📍 [断点] 发现 responseModifier 定义:', {
        对象: obj,
        描述符: descriptor,
        堆栈: new Error().stack
      });
      
      // 在赋值时设置断点
      if (descriptor.set) {
        const originalSet = descriptor.set;
        descriptor.set = function(value) {
          console.log('📍 [断点] responseModifier 被赋值:', {
            新值: value,
            原值: this._responseModifier,
            堆栈: new Error().stack
          });
          
          // 这里会自动触发断点
          debugger;
          originalSet.call(this, value);
        };
      }
    }
    
    return originalDefineProperty.call(this, obj, prop, descriptor);
  };
}

// 方法2：Hook 特定的 setter
function hookSpecificSetter(obj, propName = 'responseModifier') {
  if (!obj || typeof obj !== 'object') return;
  
  const descriptor = Object.getOwnPropertyDescriptor(obj, propName);
  if (!descriptor) {
    // 如果属性不存在，创建一个可监控的
    Object.defineProperty(obj, propName, {
      set: function(value) {
        console.log('📍 [监控] 新增 responseModifier:', {
          值: value,
          堆栈: new Error().stack
        });
        debugger;
        this._responseModifier = value;
      },
      get: function() {
        return this._responseModifier;
      }
    });
  } else {
    // 监控现有的属性
    const originalSet = descriptor.set;
    if (originalSet) {
      Object.defineProperty(obj, propName, {
        ...descriptor,
        set: function(value) {
          console.log('📍 [监控] responseModifier 变更:', {
            新值: value,
            原值: this._responseModifier,
            堆栈: new Error().stack
          });
          debugger;
          originalSet.call(this, value);
        }
      });
    }
  }
}

// 方法3：定时扫描并设置监控
function autoMonitorResponseModifier() {
  console.log('🔍 开始自动监控 responseModifier...');
  
  function scanAndHook(obj, path = 'window', depth = 0) {
    if (depth > 5) return; // 防止无限递归
    if (!obj || typeof obj !== 'object') return;
    
    try {
      if ('responseModifier' in obj) {
        console.log(`📍 [发现] ${path} 有 responseModifier:`, obj.responseModifier);
        hookSpecificSetter(obj, 'responseModifier');
      }
      
      // 扫描子对象
      for (const key in obj) {
        if (obj.hasOwnProperty(key) && typeof obj[key] === 'object') {
          scanAndHook(obj[key], `${path}.${key}`, depth + 1);
        }
      }
    } catch (e) {
      // 忽略访问错误
    }
  }
  
  // 立即扫描一次
  scanAndHook(window, 'window');
  
  // 每2秒扫描一次新对象
  setInterval(() => {
    scanAndHook(window, 'window');
  }, 2000);
}

// 方法4：设置条件断点
function setConditionalBreakpoint() {
  console.log('💡 手动设置断点方法:');
  console.log('1. 打开 Chrome DevTools');
  console.log('2. 切换到 Sources 标签');
  console.log('3. 找到 source_final.js 文件');
  console.log('4. 在第32876行设置条件断点: n.responseModifier !== undefined');
  console.log('5. 条件: n && n.responseModifier && typeof n.responseModifier === "function"');
}

// 执行设置
console.log('=== responseModifier 断点设置工具 ===');
setResponseModifierBreakpoint();
autoMonitorResponseModifier();
setConditionalBreakpoint();

console.log('✅ 断点设置完成，请触发相关操作观察控制台输出');