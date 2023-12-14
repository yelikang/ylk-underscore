import _ from './underscore.js';
import each from './each.js';
import functions from './functions.js';
import { push } from './_setup.js';
import chainResult from './_chainResult.js';

// Add your own custom functions to the Underscore object.
export default function mixin(obj) {
  // 循环underscore上的所有函数，进行一层装饰；实现underscore对象的chain（链式）调用
  each(functions(obj), function(name) {
    // '_'上面也绑定对应的方法
    var func = _[name] = obj[name];
    _.prototype[name] = function() {
      // 组装参数 _wrapperd(对象) + iterator(迭代器)
      var args = [this._wrapped];
      push.apply(args, arguments);
      return chainResult(this, func.apply(_, args));
    };
  });
  return _;
}
