const _new = function (constructor, ...args) {
  //必须要是函数
  if (typeof constructor != 'function') return
  const obj = Object.create(constructor)
  let res = constructor.call(obj, ...args)
  return res instanceof Object ? res : obj
}

function Foo() {
  this.age = 'li'
  this.print = function () {
    console.log(this.name)
  }
}
let foo = _new(Foo)
foo.print()