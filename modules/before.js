// Returns a function that will only be executed up to (but not including) the
// Nth call.
// 返回一个函数，该函数只执行到(但不包括)，第n次调用
//  之后再调用这个函数，将返回一次最后调用func的结果。
export default function before(times, func) {
  var memo;
  return function() {
    if (--times > 0) {
      memo = func.apply(this, arguments);
    }
    if (times <= 1) func = null;
    return memo;
  };
}
