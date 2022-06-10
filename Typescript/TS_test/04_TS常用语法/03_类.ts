/* 
类的基本定义与使用
*/

class Greeter {
  // 声明属性
  message: string

  // 构造方法
  constructor(message: string) {
    this.message = message
  }

  // 一般方法
  greet(): string {
    return 'Hello ' + this.message
  }
}

// 创建类的实例
const greeter = new Greeter('world')
// 调用实例的方法
console.log(greeter.greet())

/* 
类的继承
*/

class Person {
  name: string
  age: number
  constructor(name: string = '默认名', age: number = 18) {
    this.name = name
    this.age = age
  }
  sayHi(str: string): void {
    console.log(str + '我是' + this.name + ',' + '我的年龄是' + this.age);
  }
}

class Stu extends Person {
  name: string
  age: number
  grade: number
  constructor(name, age, grade) {
    super(name, age)
    this.grade = grade
  }
  sayHi(): void {
    //重写父类的sayHi方法
    super.sayHi('嘻嘻嘻')
    console.log('我的成绩是' + this.grade);
  }
}
const person = new Person('shashigay', 17)
const stu1 = new Stu('naruto', 18, 66)
person.sayHi('八嘎')
stu1.sayHi()

/* 
类的多态 :不同类型的对象（通常是父子类）针对相同的方法，产生了不同的行为（因为子类方法的重写）
*/
class Animal {
  name: string
  constructor(name: string = 'animal') {
    this.name = name
  }
  run(distance: number = 5): void {
    console.log(`${this.name}跑了${distance}m`);
  }
}
class Dog extends Animal {
  name: string
  constructor(name: string = 'dog') {
    super(name)
  }
  run(distance: number = 10): void {
    super.run(distance)
  }
}
class Pig extends Animal {
  name: string
  constructor(name: string = 'pig') {
    super(name)
  }
  run(distance: number = 15): void {
    super.run(distance)
  }
}

let ani: Animal = new Animal
let dog: Dog = new Dog
let pig: Pig = new Pig

function animalRun(instance: Animal): void {
  instance.run()
}

animalRun(ani)
animalRun(dog)
animalRun(pig)

/* 
访问修饰符: 用来描述类内部的属性/方法的可访问性
  public: 默认值, 公开的外部也可以访问
  private: 只能类内部可以访问
  protected: 类内部和子类可以访问
*/
class Test {
  public name: string
  protected age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
  private sayName_private(): void {
    console.log(this.name);
  }
  public sayName_public(): void {
    this.sayName_private()
  }
}
class Test1 extends Test {
  constructor(name: string, age: number) {
    super(name, age)
  }
  public visit_Test_age(): void {
    console.log(super.age);
  }
  public visit_Test1_age(): void {
    console.log(this.age);
  }
}
let test = new Test('小明', 18)
let test1 = new Test1('富婆', 48)
//console.log(test.sayName_private);//报错
console.log(test.sayName_public());//正确访问
//console.log(test.age);//报错
console.log(test1.visit_Test_age()); //protected修饰的变量能在类内和子内中访问
console.log(test1.visit_Test1_age());//protected修饰的变量能在类内和子内中访问


/* 
readonly修饰符 ：被修饰的变量只能在constrctor里面被修改，在其他地方不可被修改
*/
class BigMan {
  readonly name: string
  constructor(name: string) {
    this.name = '熊二'
    console.log(this.name);
    this.name = '米奇'
    console.log(this.name);
    this.name = name
  }
}
let bigMan: BigMan = new BigMan('YaoMing')
console.log(bigMan.name);
//bigMan.name = 'Shark'//报错

/* 
参数属性 
*/
class LittleMan {
  //通过在构造函数参数前面添加修饰符，可以让其直接初始化为成员属性
  constructor(readonly name: string, public age: number, private height: number) {

  }
  getHeight() {
    return this.height
  }
}
let lMan = new LittleMan('GuoJM', 38, 160)
console.log(lMan.name, lMan.age, lMan.getHeight());

/*
 getter和setter
  */
class Guy {
  constructor(public firstName: string, public lastName: string) {
  }
  get fullName(): string {
    return this.firstName + '_' + this.lastName
  }
  set fullName(full: string) {
    this.firstName = full.split('_')[0]
    this.firstName = full.split('_')[1]
  }
}

/*
 静态成员：存在与构造函数（类）上，不赋予原型和实例
 */
class HiHiHi {
  constructor() { }
  static sayHi() {
    console.log('it is static')
  }
  sayHIHIHI() {
    console.log('it is not static,HIHIHI');

  }
}
let hi = new HiHiHi
hi.sayHIHIHI()
HiHiHi.sayHi()

/* 
  抽象类：包含抽象方法、属性，也可以包含实例方法、属性。
  注意：抽象类不能被实例化，它的存在是为了让子类进行实例化以及实现其抽象方法
*/
abstract class ABS {

  //抽象方法
  abstract sayHi(): void
  //实例方法
  run(distance: number): void {
    console.log('跑了' + distance + 'm');
  }
}
class exact extends ABS {
  constructor() {
    super()
  }
  //抽象类定义的抽象函数要在子类中被实现
  sayHi(): void {
    console.log('hi');
  }
}