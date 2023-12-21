import restArguments from './restArguments.js';

// Delays a function for the given number of milliseconds, and then calls
// it with the arguments supplied.
/**
 * 等待wait毫秒之后调用fnc
 */
export default restArguments(function(func, wait, args) {
  return setTimeout(function() {
    return func.apply(null, args);
  }, wait);
});
