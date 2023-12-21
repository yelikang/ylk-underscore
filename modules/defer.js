import partial from './partial.js';
import delay from './delay.js';
import _ from './underscore.js';

// Defers a function, scheduling it to run after the current call stack has
// cleared.
/**
 * 延迟调用函数，知道当前调用栈清空为止；类似setTimeout(fn, 0)
 * 实际上是调用delay, wait为1毫秒
 */
export default partial(delay, _, 1);
