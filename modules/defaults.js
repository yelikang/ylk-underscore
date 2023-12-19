import createAssigner from './_createAssigner.js';
import allKeys from './allKeys.js';

// Fill in a given object with default properties.
// 用默认属性，填充给定对象
// _.defaluts(obj, {name:'ylk'})
export default createAssigner(allKeys, true);
