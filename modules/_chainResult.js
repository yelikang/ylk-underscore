import _ from './underscore.js';

// Helper function to continue chaining intermediate results.
export default function chainResult(instance, obj) {
  // 如果当前对象为链式对象，把他的结果页构造成链式对象，这样就能继续调用；调用value方法可以获取链式对象的值
  return instance._chain ? _(obj).chain() : obj;
}
