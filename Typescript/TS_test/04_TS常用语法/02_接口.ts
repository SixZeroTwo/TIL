/* 
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型
接口: 是对象的状态(属性)和行为(方法)的抽象(描述)
接口类型的对象
    多了或者少了属性是不允许的
    可选属性: ?
    只读属性: readonly
*/

/* 
需求: 创建人的对象, 需要对人的属性进行一定的约束
  id是number类型, 必须有, 只读的
  name是string类型, 必须有
  age是number类型, 必须有
  sex是string类型, 可以没有
*/

// 定义人的接口
interface IPerson {
  readonly id: number
  name: string
  age: number
  sex?: string
}

const person1: IPerson = {
  id: 1,
  name: 'tom',
  age: 20,
  //sex: '男'
}
//person1.id=3 修改readonly属性会报错

//函数类型：接口还可以定义函数的类型，规范函数的参数个数、类型、返回类型
interface IsearchString {
  (source: string, subString: string): boolean
}
const searchString: IsearchString = function (source: string, subString: string) {
  return source.includes(subString)
}
console.log(searchString('abcd', 'abc'));

//类类型：规范一个类，类通过implements关键字来接受接口规范
interface Alice {
  sayHi(): void,
  sayBye(): void,
  name: string,
}
interface Jack {
  shoot(): void
}

//一个类可以接受多个接口
class Bob implements Alice, Jack {
  name: string
  age: number
  constructor(name: string) {
    this.name = name
  }
  sayHi(): void {
    console.log('hi');

  }
  sayBye(): void {
    console.log('bye');
  }
  shoot(): void {

  }
}

//接口继承：接口之间可以相互继承，和类一样
//注意！！！！：接口和接口之间是继承关系extends，而类和接口之间是接受关系implements
interface who extends Alice, Bob {
  newProp: string
}

console.log(new Bob('bob'));
