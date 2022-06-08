//一个接口，IPerson，由名和姓组成
//可以理解为对一个对象进行了类型注解，并将其作为一个数据类型
/* 
需要注意的是，下面的Person类new出来的实例对象虽然多了一个fullName属性
但是由于它拥有IPerson接口所规定的所有属性，因此它们是兼容的 
*/
interface IPerson {
  firstName: string,
  lastName: string,
}

//一个类，写法与ES6相同，但是可以加类型注解
class Person {
  //成员变量类型注解写前面更清楚
  firstName: string
  lastName: string
  fullName: string

  //构造器函数
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = this.firstName + '_' + this.lastName
  }
}

function showName(person: IPerson) {
  console.log('hello' + person.firstName + '_' + person.lastName)
}
let person = new Person('Zhu', 'Zhu')
showName(person)