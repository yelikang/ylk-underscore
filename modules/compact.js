import filter from './filter.js';

// Trim out all falsy values from an array.
// 返回出去所有false(假值)的list副本 （false, null,0, '', undefined、NaN 都是 falsy假值）
// 使用全局Boolean函数，进行Boolean(value)，就能过滤出是否假值
export default function compact(array) {
  return filter(array, Boolean);
}
