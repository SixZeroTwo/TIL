function Animal(name) {
  this.name = name
  this.colors = ['white', 'black']
  this.getName = function () {
    return this.name
  }
}
function Dog(name) {
  Animal.call(this, name)
}
Dog.prototype = new Animal()
Dog.prototype.constructor = Dog()
let dog1 = new Dog('dog1')
let dog2 = new Dog('dog2')
dog1.colors.push('yellow')
dog2.colors.push('red')
console.log(dog1.getName(), dog1.colors);
console.log(dog2.getName(), dog2.colors);