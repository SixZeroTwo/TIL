//布尔型boolean
let bool = true;
console.log(bool);
console.log('===================');
//数值number类型
let num = 10;
console.log(num);
//num = '123' 报错
console.log('===================');
//string类型
let str1 = `小明`;
let str2 = `的爸爸`;
let str3 = `是老王`;
console.log(`${str1}${str2}${str3}`);
console.log('===================');
//undefined和null
let und = undefined;
let nul = null;
console.log(und, nul);
//可以作为其他类型的子类型
let num1 = undefined;
console.log(num1);
let strs = null;
console.log(strs);
console.log('===================');
//数组类型Array
let arr1 = [1, 2, 3, 4, 5]; //定义方式1：数据类型[]
let arr2 = [100, 200, 300]; //定义方式2：泛型写法  Array<数据类型>
console.log('arr1:', arr1);
console.log('arr2', arr2);
console.log('===================');
//元组类型tuple：在定义数组的时候，类型、位置和数据的个数一开始就已经限定了
let arr3 = ['小甜甜', 2.14156, true];
console.log(arr3[0].split(''));
console.log(arr3[1].toFixed(2));
console.log('===================');
//枚举类型:为一组数值赋予名字,如果没有给名字赋予对应的值，则从0开始递增
//个人理解：可以看做一个双向的Map
var Color;
(function (Color) {
    Color[Color["red"] = 2] = "red";
    Color[Color["green"] = 4] = "green";
    Color[Color["blue"] = 6] = "blue";
})(Color || (Color = {}));
//定义一个Color的枚举类型的变量来接受枚举的值
let color = Color.red + Color.blue;
console.log(color);
console.log(Color[2]);
console.log('===================');
//any类型：啥都行！
let str = 100;
str = '我也是100';
console.log(str);
let arr = [1, '哈哈哈', true];
console.log(arr);
console.log('===================');
//void类型：通常表示没有返回值的函数，只能赋予null和undefined（他们是所有类型的子类）
function showMsg() {
    console.log('这是一个没有返回值的函数');
}
console.log('===================');
//object类型
let arrObj = [];
let fnObj = function () { };
let strobj = new String('123');
console.log('===================');
//联合类型 Union Type：就是或
function getString(str) {
    return str.toString();
}
console.log(getString('123'));
console.log(getString('456'));
console.log('===================');
//类型断言：程序员表示自己知道自己操作的数据类型，有两种断言方法，尖括号或as语法
function getStringLength(str) {
    //这样写ts会在检查阶段报错，因为str可能为number类型不存在length属性
    /*   if (str.length) { return str.length }
      else return str.toString().length */
    //加入类型断言，指明操作的数据类型
    if (str.length)
        return str.length;
    else
        return str.toString().length;
}
console.log('===================');
//类型推断：ts的自动赋类型机制，在定义赋值后会对变量赋予一个类型，如果没有定义赋值，会推断为any类型
let a = 100;
//a = '100'//会报错
let b; //推断b是any类型
b = 1;
b = '1';
console.log('===================');
