import isFunction from './isFunction.js';

// Return a sorted list of the function names available on the object.

/**
 * 返回一个对象里面的所有方法，并且是已经排序了
 * @param {*} obj 
 * @returns 
 */
export default function functions(obj) {
  var names = [];
  for (var key in obj) {
    if (isFunction(obj[key])) names.push(key);
  }
  return names.sort();
}
