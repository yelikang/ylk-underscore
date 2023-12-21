import find from './find.js';
import matcher from './matcher.js';

// Convenience version of a common use case of `_.find`: getting the first
// object containing specific `key:value` pairs.

/**
 * 返回数组中包含特定属性的对象，例如attrs = {name:'ylk'}
 * 就是找出集合中拥有name:ylk的对象
 * 类似于sql 的where过滤条件
 * @param {*} obj 
 * @param {*} attrs 
 * @returns 
 */
export default function findWhere(obj, attrs) {
  return find(obj, matcher(attrs));
}
