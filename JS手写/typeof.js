function typeOf(obj) {
  return Object.prototype.toString.apply(obj).slice(8, -1)
}
console.log(typeOf([]));
console.log(typeOf(null));