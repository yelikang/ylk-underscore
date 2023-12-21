import toPath from './_toPath.js';
import deepGet from './_deepGet.js';
import isUndefined from './isUndefined.js';

// Get the value of the (deep) property on `path` from `object`.
// If any property in `path` does not exist or if the value is
// `undefined`, return `defaultValue` instead.
// The `path` is normalized through `_.toPath`.

/**
 * 通过路径，获取对象某个属性值；没取到使用默认值
 * let obj = {a:{b:c:1}}
 * _.get(obj, ['a','b', 'c'])
 * => 1
 * 
 * 这里abc的属性写法只能通过数组，lodash更灵活; lodash.get(obj, 'a.b.c')
 * 
 * @param {*} object 
 * @param {*} path 
 * @param {*} defaultValue 
 * @returns 
 */
export default function get(object, path, defaultValue) {
  var value = deepGet(object, toPath(path));
  return isUndefined(value) ? defaultValue : value;
}
