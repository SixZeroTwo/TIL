//布尔型boolean
let bool: boolean = true
console.log(bool);
console.log('===================');


//数值number类型
let num: number = 10
console.log(num);
//num = '123' 报错
console.log('===================');

//string类型
let str1: string = `小明`
let str2: string = `的爸爸`
let str3: string = `是老王`
console.log(`${str1}${str2}${str3}`);
console.log('===================');

//undefined和null
let und: undefined = undefined
let nul: null = null
console.log(und, nul);
//可以作为其他类型的子类型
let num1: number = undefined
console.log(num1);
let strs: string = null
console.log(strs);
console.log('===================');

//数组类型Array
let arr1: number[] = [1, 2, 3, 4, 5] //定义方式1：数据类型[]
let arr2: Array<number> = [100, 200, 300]//定义方式2：泛型写法  Array<数据类型>
console.log('arr1:', arr1);
console.log('arr2', arr2);
console.log('===================');

//元组类型tuple：在定义数组的时候，类型、位置和数据的个数一开始就已经限定了
let arr3: [string, number, boolean] = ['小甜甜', 2.14156, true]
console.log(arr3[0].split(''));
console.log(arr3[1].toFixed(2));
console.log('===================');

//枚举类型:为一组数值赋予名字,如果没有给名字赋予对应的值，则从0开始递增
//个人理解：可以看做一个双向的Map
enum Color {
  red = 2,
  green = 4,
  blue = 6,
}
//定义一个Color的枚举类型的变量来接受枚举的值
let color: Color = Color.red + Color.blue
console.log(color);
console.log(Color[2]);
console.log('===================');

//any类型：啥都行！
let str: any = 100
str = '我也是100'
console.log(str);
let arr: any[] = [1, '哈哈哈', true]
console.log(arr);
console.log('===================');

//void类型：通常表示没有返回值的函数，只能赋予null和undefined（他们是所有类型的子类）
function showMsg(): void {
  console.log('这是一个没有返回值的函数');
}
console.log('===================');

//object类型
let arrObj: object = []
let fnObj: object = function () { }
let strobj: object = new String('123')
console.log('===================');

//联合类型 Union Type：就是或
function getString(str: string | number) {
  return str.toString()
}
console.log(getString('123'));
console.log(getString('456'));
console.log('===================');

//类型断言：程序员表示自己知道自己操作的数据类型，有两种断言方法，尖括号或as语法
function getStringLength(str: string | number) {
  //这样写ts会在检查阶段报错，因为str可能为number类型不存在length属性
  /*   if (str.length) { return str.length }
    else return str.toString().length */
  //加入类型断言，指明操作的数据类型
  if ((<string>str).length) return (<string>str).length
  else return str.toString().length
}
console.log('===================');

//类型推断：ts的自动赋类型机制，在定义赋值后会对变量赋予一个类型，如果没有定义赋值，会推断为any类型
let a = 100
//a = '100'//会报错
let b//推断b是any类型
b = 1
b = '1'
console.log('===================');




