/* 
何为泛型：在定义函数、接口、类的时候不能预先确定使用的数据类型，在使用时才能确定
怎么做：留一个坑位，用的时候指定类型
 */

//泛型函数
//需求：输入不同类型的参数，指定个数，生产数组
function generateArr<T>(val: T, count: number): T[] {
  let res: T[] = []
  for (let i = 0; i < count; i++) {
    res.push(val)
  }
  return res
}
const arrx = generateArr<number>(1, 5)
const arrx1 = generateArr<string>('1', 5)
const arrx2 = generateArr<boolean>(true, 5)

//多个泛型的泛型函数
function getAB<K, V>(a: K, b: V): [K, V] {
  return [a, b]
}
const AB = getAB<string, number>('1', 2)
console.log(AB);

//泛型接口：接口使用泛型
//需求：定义一个类，用来存储用户的相关信息（id，名字，年龄）
//通过类的实例对象调用相关方法可以添加多个用户信息对象，调用getUsrId方法可以根据id获取某个指定的用户信息对象
class Usr {
  constructor(public name: string, public age: number, public id?: number) {
  }
}
//写针对性的接口，可复用性不强
/* interface UsrCRUD {
  data: Usr[]
  add(user: Usr): Usr
  getUsrId(): number
} */
//写泛型接口，相当于将接口模块化
interface IBaseCRUD<T> {
  data: T[]
  add(t: T): T
  getUsrId(id: number): T
}
class UsrCRUD implements IBaseCRUD<Usr>{
  data: Usr[]
  constructor() {
    this.data = []
  }
  add(usr: Usr) {
    usr.id = Date.now() + Math.random()
    this.data.push(usr)
    return usr
  }
  getUsrId(id: number): Usr {
    return this.data.filter(usr => usr.id == id)[0]
  }
}
const usr = new Usr('韭菜用户', 18)
const usrCRUD = new UsrCRUD()
let { id } = usrCRUD.add(usr)
console.log(usrCRUD.getUsrId(id));

//泛型类
//定义一个类，类中的属性值的类型不确定，方法中的参数及返回值的类型也是不确定
class whatsClass<A, B>{
  public prop: A
  constructor(a: A) {
    this.prop = a
  }
  public method(arg: B): A {
    console.log(arg);
    return this.prop
  }
}
const whatsclass = new whatsClass<number, string>(3.14159)
console.log(whatsclass.method('我也不知道这个方法干啥用的'));

//泛型约束
//试想一下这个场景：对泛型类型的参数取了length参数，由于类型不确定，该操作会报错
//此时可以用接口的继承来实现泛型约束
function fn<T>(x: T) {
  //console.log(x.length);会报错
}
interface lengthStrict {
  length: number
}
function fnInRestrict<T extends lengthStrict>(x: T) {
  console.log(x.length);
}

fnInRestrict('12312312312')
