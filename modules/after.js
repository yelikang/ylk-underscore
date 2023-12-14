// Returns a function that will only be executed on and after the Nth call.
// 返回一个函数，该函数只在第n次调用时和之后执行。
// 可以结合webpack的needCalls函数，进行异常机制处理
export default function after(times, func) {
  return function() {
    if (--times < 1) {
      return func.apply(this, arguments);
    }
  };
}
