/*
何为泛型：在定义函数、接口、类的时候不能预先确定使用的数据类型，在使用时才能确定
怎么做：留一个坑位，用的时候指定类型
 */
//泛型函数
//需求：输入不同类型的参数，指定个数，生产数组
function generateArr(val, count) {
    let res = [];
    for (let i = 0; i < count; i++) {
        res.push(val);
    }
    return res;
}
const arrx = generateArr(1, 5);
const arrx1 = generateArr('1', 5);
const arrx2 = generateArr(true, 5);
//多个泛型的泛型函数
function getAB(a, b) {
    return [a, b];
}
const AB = getAB('1', 2);
console.log(AB);
//泛型接口：接口使用泛型
//需求：定义一个类，用来存储用户的相关信息（id，名字，年龄）
//通过类的实例对象调用相关方法可以添加多个用户信息对象，调用getUsrId方法可以根据id获取某个指定的用户信息对象
class Usr {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
    }
}
class UsrCRUD {
    constructor() {
        this.data = [];
    }
    add(usr) {
        usr.id = Date.now() + Math.random();
        this.data.push(usr);
        return usr;
    }
    getUsrId(id) {
        return this.data.filter(usr => usr.id == id)[0];
    }
}
const usr = new Usr('韭菜用户', 18);
const usrCRUD = new UsrCRUD();
let { id } = usrCRUD.add(usr);
console.log(usrCRUD.getUsrId(id));
//泛型类
//定义一个类，类中的属性值的类型不确定，方法中的参数及返回值的类型也是不确定
class whatsClass {
    constructor(a) {
        this.prop = a;
    }
    method(arg) {
        console.log(arg);
        return this.prop;
    }
}
const whatsclass = new whatsClass(3.14159);
console.log(whatsclass.method('我也不知道这个方法干啥用的'));
//泛型约束
//试想一下这个场景：对泛型类型的参数取了length参数，由于类型不确定，该操作会报错
//此时可以用接口的继承来实现泛型约束
function fn(x) {
    //console.log(x.length);会报错
}
function fnInRestrict(x) {
    console.log(x.length);
}
fnInRestrict('12312312312');
