const Myapply = function (thisArg = window, args) {
  //参数判定
  if (args instanceof Array) { }
  //apply返回函数的调用结果，并把函数的this值绑定到thisArg上
  //调用Myapply的函数对象
  const fnSym = new Symbol()
  //隐示调用
  thisArg[fnSym] = this
  //保存结果
  let res = thisArg.fn(...args)
  //删除属性
  delete thisArg.fn
  return res
}

const Mybind = function (thisArg = window, ...args) {
  const fn = this
  return function newFn(...newArgs) {
    //判断是否通过new方式调用
    if (this instanceof newFN) {
      return new fn(...args, ...newArgs)
    }
    else return fn.Myapply(thisArg, [...args, ...newArgs])
  }
}