import restArguments from './restArguments.js';
import executeBound from './_executeBound.js';
import _ from './underscore.js';

// Partially apply a function by creating a version that has had some of its
// arguments pre-filled, without changing its dynamic `this` context. `_` acts
// as a placeholder by default, allowing any combination of arguments to be
// pre-filled. Set `_.partial.placeholder` for a custom placeholder argument.
/**
 *  创建一个已经预填充部分参数的函数，而不改变它的this上下文；也可以使用默认占位符_，告知在调用时刻提供参数
 *  let subtract = function(a, b){return b - a}
 *  sub5 = _.partial(subtract, 5) // a 预先填充为5
 *  sub5(20) // 调用时传入 b = 20
 * 
 *  sub20 = _.partial(subtract, _, 20) // a使用_占位，b预先填充20
 *  sub20(5) // 调用时传入a = 5
 * 
 */
var partial = restArguments(function(func, boundArgs) {
  var placeholder = partial.placeholder;
  var bound = function() {
    var position = 0, length = boundArgs.length;
    var args = Array(length);
    for (var i = 0; i < length; i++) {
      args[i] = boundArgs[i] === placeholder ? arguments[position++] : boundArgs[i];
    }
    while (position < arguments.length) args.push(arguments[position++]);
    return executeBound(func, bound, this, this, args);
  };
  return bound;
});

partial.placeholder = _;
export default partial;
