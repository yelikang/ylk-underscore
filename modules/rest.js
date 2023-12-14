import { slice } from './_setup.js'

// Returns everything but the first entry of the `array`. Especially useful on
// the `arguments` object. Passing an **n** will return the rest N values in the
// `array`.

// 传入一个数组
// 返回剔除第一个元素后的数组副本
// 如果传入参数 n，则剔除前 n 个元素
// 也命名为drop
export default function rest(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n)
}
