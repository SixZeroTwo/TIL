/*
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
接口类型的对象
    多了或者少了属性是不允许的
    可选属性: ?
    只读属性: readonly
*/
const person1 = {
    id: 1,
    name: 'tom',
    age: 20,
    //sex: '男'
};
const searchString = function (source, subString) {
    return source.includes(subString);
};
console.log(searchString('abcd', 'abc'));
//一个类可以接受多个接口
class Bob {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log('hi');
    }
    sayBye() {
        console.log('bye');
    }
    shoot() {
    }
}
console.log(new Bob('bob'));
