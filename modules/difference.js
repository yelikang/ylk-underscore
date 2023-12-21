import restArguments from './restArguments.js';
import flatten from './_flatten.js';
import filter from './filter.js';
import contains from './contains.js';

// Take the difference between one array and a number of other arrays.
// Only the elements present in just the first array will remain.
/**
 * 对比一个数组与其它数组之间的差异，返回这个数组与其它数组的差异项
 * _.difference([1, 2, 3, 4, 5], [5, 2, 10],[1]);
 * => [3, 4]
 */
export default restArguments(function(array, rest) {
  rest = flatten(rest, true, true);
  return filter(array, function(value){
    return !contains(rest, value);
  });
});
