import _flatten from './_flatten.js';

// Flatten out an array, either recursively (by default), or up to `depth`.
// Passing `true` or `false` as `depth` means `1` or `Infinity`, respectively.


/**
 * 数组打平
 * @param {*} array 数组
 * @param {*} depth 打平深度(不传就全部打平)
 * @returns 
 */
export default function flatten(array, depth) {
  return _flatten(array, depth, false);
}
