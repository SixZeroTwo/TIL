//一个类，写法与ES6相同，但是可以加类型注解
class Person {
    //构造器函数
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + '_' + this.lastName;
    }
}
function showName(person) {
    console.log('hello' + person.firstName + '_' + person.lastName);
}
let person = new Person('Zhu', 'Zhu');
showName(person);
