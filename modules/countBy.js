import group from './_group.js';
import has from './_has.js';

// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
/**
 * 对数组进行分组统计(指定分组规则，不传递则使用对象对比)，统计每个值的数目
 * _.countBy([1, 2, 3, 4, 5], function(num) {
 *  return num % 2 == 0 ? 'even': 'odd';
 * });
 * => {odd: 3, even: 2}
 * _.countBy([1, 2, 3, 4, 5])
 * => {1:1,2:2,3:1,4:1,5:1}
 */
export default group(function(result, value, key) {
  if (has(result, key)) result[key]++; else result[key] = 1;
});
