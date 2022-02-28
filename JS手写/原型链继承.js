function Animal() {
  this.colors = ['black', 'white']
}
function Dog() {
  this.name = 'doge'
}
Dog.prototype = new Animal
let dog1 = new Dog()
let dog2 = new Dog()
dog1.colors.push('yellow')
console.log(dog2.colors)
console.log(Dog.prototype.constructor);