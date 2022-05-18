Function.prototype._call = function (thisArg, ...args) {
  const fn = this
  //给thisArg上加属性
  const sym = new Symbol()
  thisArg[sym] = fn
  let res = thisArg.sym(...args)
  delete thisArg.sym
  return res
}

Function.prototype._bind = function (thisArg, ...args) {
  const fn = this
  return function newFn() {
    //判断是否new调用
    if (this instanceof newFn) {
      return new fn(arguments, ...args)
    }
    else {
      const sym = new Symbol()
      thisArg[sym] = fn
      let res = thisArg.sym(arguments, ...args)
      delete thisArg.sym
      return res
    }
  }
}