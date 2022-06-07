let Sup = function (value) {
  this.value = value
}
Sup.prototype.hello = function () {
  console.log('hello')
}
let Sub = function (value) {
  Sup.call(this, value)
}
//Sub.prototype.__proto__ = Sup.prototype
Sub.prototype = Object.create(Sup.prototype, { constructor: { value: Sub } })
Sub.prototype.fuck = function () {
  console.log('fuck');
}
const subinstance = new Sub()
subinstance.hello()
subinstance.fuck()