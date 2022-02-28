//给Function的原型加上手写的方法
//apply
Function.prototype.myApply = function (thisArg, args) {
  //对参数做一些简单判断容错处理，这里用默认参数写法也可以
  thisArg = thisArg || window
  args = args ? args : []
  //利用隐式绑定(调用)实现apply

  //this对象利用key绑定并调用Function的实例对象——即具体的函数fn
  const key = Symbol.for()
  thisArg[key] = this
  let res = thisArg.key(...args)
  //将thisArg上的对象删除，并返回函数的返回值
  delete thisArg.key
  return res
}

//call
Function.prototype.myCall = function (thisArg = window, ...args = []) {
  //this对象利用key绑定并调用Function的实例对象——即具体的函数fn
  const key = Symbol.for()
  thisArg[key] = this
  let res = thisArg.key(...args)
  //将thisArg上的对象删除，并返回函数的返回值
  delete thisArg.key
  return res
}

//bind
//fn.bind(thisArg,...args)函数返回已经绑定好thisArg的fn，并且args值可以作为fn的预设参数，与之后加入的参数一起作为执行时的参数
Function.prototype.myBind = function (thisArg = window, ...args = []) {
  //记录fn
  let fn = this
  return function newFn(...newArgs) {
    //考虑this是否通过new newFn生成，如果是，本意不是想new newFn，而是想new fn，所以要改变返回值
    if (this instanceof newFn) {
      return new fn(...args, ...newArgs)
    }
    else {
      return fn.myApply(thisArg, [...args, ...newArgs])
    }
  }
}