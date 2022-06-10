/*
类的基本定义与使用
*/
class Greeter {
    // 构造方法
    constructor(message) {
        this.message = message;
    }
    // 一般方法
    greet() {
        return 'Hello ' + this.message;
    }
}
// 创建类的实例
const greeter = new Greeter('world');
// 调用实例的方法
console.log(greeter.greet());
/*
类的继承
*/
class Person {
    constructor(name = '默认名', age = 18) {
        this.name = name;
        this.age = age;
    }
    sayHi(str) {
        console.log(str + '我是' + this.name + ',' + '我的年龄是' + this.age);
    }
}
class Stu extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    sayHi() {
        //重写父类的sayHi方法
        super.sayHi('嘻嘻嘻');
        console.log('我的成绩是' + this.grade);
    }
}
const person = new Person('shashigay', 17);
const stu1 = new Stu('naruto', 18, 66);
person.sayHi('八嘎');
stu1.sayHi();
/*
类的多态 :不同类型的对象（通常是父子类）针对相同的方法，产生了不同的行为（因为子类方法的重写）
*/
class Animal {
    constructor(name = 'animal') {
        this.name = name;
    }
    run(distance = 5) {
        console.log(`${this.name}跑了${distance}m`);
    }
}
class Dog extends Animal {
    constructor(name = 'dog') {
        super(name);
    }
    run(distance = 10) {
        super.run(distance);
    }
}
class Pig extends Animal {
    constructor(name = 'pig') {
        super(name);
    }
    run(distance = 15) {
        super.run(distance);
    }
}
let ani = new Animal;
let dog = new Dog;
let pig = new Pig;
function animalRun(instance) {
    instance.run();
}
animalRun(ani);
animalRun(dog);
animalRun(pig);
/*
访问修饰符: 用来描述类内部的属性/方法的可访问性
  public: 默认值, 公开的外部也可以访问
  private: 只能类内部可以访问
  protected: 类内部和子类可以访问
*/
class Test {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayName_private() {
        console.log(this.name);
    }
    sayName_public() {
        this.sayName_private();
    }
}
class Test1 extends Test {
    constructor(name, age) {
        super(name, age);
    }
    visit_Test_age() {
        console.log(super.age);
    }
    visit_Test1_age() {
        console.log(this.age);
    }
}
let test = new Test('小明', 18);
let test1 = new Test1('富婆', 48);
//console.log(test.sayName_private);//报错
console.log(test.sayName_public()); //正确访问
//console.log(test.age);//报错
console.log(test1.visit_Test_age()); //protected修饰的变量能在类内和子内中访问
console.log(test1.visit_Test1_age()); //protected修饰的变量能在类内和子内中访问
/*
readonly修饰符 ：被修饰的变量只能在constrctor里面被修改，在其他地方不可被修改
*/
class BigMan {
    constructor(name) {
        this.name = '熊二';
        console.log(this.name);
        this.name = '米奇';
        console.log(this.name);
        this.name = name;
    }
}
let bigMan = new BigMan('YaoMing');
console.log(bigMan.name);
//bigMan.name = 'Shark'//报错
/*
参数属性
*/
class LittleMan {
    //通过在构造函数参数前面添加修饰符，可以让其直接初始化为成员属性
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
    getHeight() {
        return this.height;
    }
}
let lMan = new LittleMan('GuoJM', 38, 160);
console.log(lMan.name, lMan.age, lMan.getHeight());
/*
 getter和setter
  */
class Guy {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + '_' + this.lastName;
    }
    set fullName(full) {
        this.firstName = full.split('_')[0];
        this.firstName = full.split('_')[1];
    }
}
/*
 静态成员：存在与构造函数（类）上，不赋予原型和实例
 */
class HiHiHi {
    constructor() { }
    static sayHi() {
        console.log('it is static');
    }
    sayHIHIHI() {
        console.log('it is not static,HIHIHI');
    }
}
let hi = new HiHiHi;
hi.sayHIHIHI();
HiHiHi.sayHi();
/*
  抽象类：包含抽象方法、属性，也可以包含实例方法、属性。
  注意：抽象类不能被实例化，它的存在是为了让子类进行实例化以及实现其抽象方法
*/
class ABS {
    //实例方法
    run(distance) {
        console.log('跑了' + distance + 'm');
    }
}
class exact extends ABS {
    constructor() {
        super();
    }
    //抽象类定义的抽象函数要在子类中被实现
    sayHi() {
        console.log('hi');
    }
}
