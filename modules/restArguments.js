// Some functions take a variable number of arguments, or a few expected
// arguments at the beginning and then a variable number of values to operate
// on. This helper accumulates all remaining arguments past the function’s
// argument length (or an explicit `startIndex`), into an array that becomes
// the last argument. Similar to ES6’s "rest parameter".

// let test = restArguments(function(a,b){
//   console.log(a, b)
// })
// // b会变成一个数组[2,3]，剩余的参数会归拢为一个数组
// test(1,2,3)
// // 1,[2,3]

// 用于处理Rest参数(不定参数、剩余参数)
// startIndex参数用于指定从原始函数参数列表的哪个位置开始算起为Rest参数
export default function restArguments(func, startIndex) {
    // func.length，返回函数有几个必填的参数，即形参个数( a=true 这种为非必填参数，不计入length)
    startIndex = startIndex == null ? func.length - 1 : +startIndex
    return function () {
        var length = Math.max(arguments.length - startIndex, 0),
            rest = Array(length),
            index = 0
        for (; index < length; index++) {
            rest[index] = arguments[index + startIndex]
        }
        switch (startIndex) {
            case 0:
                return func.call(this, rest)
            case 1:
                return func.call(this, arguments[0], rest)
            case 2:
                return func.call(this, arguments[0], arguments[1], rest)
        }
        var args = Array(startIndex + 1)
        for (index = 0; index < startIndex; index++) {
            args[index] = arguments[index]
        }
        args[startIndex] = rest
        return func.apply(this, args)
    }
}
