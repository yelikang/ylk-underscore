import { toString } from './_setup.js';

// Is a given value a boolean?
export default function isBoolean(obj) {
  // Object.prototype.toString.call(true) 会返回 [object Boolean]
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
}
