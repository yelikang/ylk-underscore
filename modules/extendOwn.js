import createAssigner from './_createAssigner.js';
import keys from './keys.js';

// Assigns a given object with all the own properties in the passed-in
// object(s).
// (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
/**
 * 类似extend,但是只复制自身属性到目标对象，不包括集成过来的属性
 */
export default createAssigner(keys);
