// Returns a function that is the composition of a list of functions, each
// consuming the return value of the function that follows.

/**
 * 函数组合，函数从右到左执行
 * 返回一个函数，该函数是一个函数列表的组合，每个函数,使用后面函数的返回值。
 * @returns 
 */
export default function compose() {
  var args = arguments;
   // 从尾部开始，从右到左
  var start = args.length - 1;
  return function() {
    var i = start;
    // 先单独执行最后一个函数，因为要根据arguments入参拿到出参result
    // arguments为数组，所以要使用apply传递数组；后面的result都为一个对象，所以使用call
    var result = args[start].apply(this, arguments);
    // 开始循环剩下的函数
    while (i--) result = args[i].call(this, result);
    return result;
  };
}
