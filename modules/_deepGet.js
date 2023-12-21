// Internal function to obtain a nested property in `obj` along `path`.
export default function deepGet(obj, path) {
  var length = path.length;
  for (var i = 0; i < length; i++) {
    if (obj == null) return void 0;
    // 重新为参数赋值，相当于在函数内部创建了一个新的局部变量；并指向新的对象，不影响原始参数对象的引用
    // 但是可以修改原始参数的某个属性 Obj.xxx = 1

    // 函数参数是按值传递(不管是基础类型，还是对象类型)
    // 1.函数参数形参，与实参，开始时指向的都是同一块堆内存中的共享对象；
    // 2.所以在函数内部可以通过 obj.xxx = xxx 修改这块共享对象的值
    // 3.但是如果在函数内部直接改变obj的指向 obj = {}
    // 4.就相当于新开辟了一块堆内存，创建了一个新的局部变量，obj指向了这块新的对象
    // 5.所以并不会改变函数外部实参的指向
    obj = obj[path[i]];
  }
  return length ? obj : void 0;
}
