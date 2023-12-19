// Predicate-generating function. Often useful outside of Underscore.
// 构建一个函数，用于每次都返回固定的参数；但是value是对象时，外部value改变还是会影响这里的输出
export default function constant(value) {
  return function() {
    return value;
  };
}
