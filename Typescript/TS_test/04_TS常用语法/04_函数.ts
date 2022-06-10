/*
 函数定义 
*/
/* function add(x: number, y: number): number {
  return x + y
} */

let myAdd = function (x: number, y: number): number {
  return x + y
}

/* 
完整函数类型 
*/
let myAdd2: (x: number, y: number) => number =
  function (x: number, y: number): number {
    return x + y
  }

/* 
可选参数、默认参数、剩余参数 ：
prop?:string
prop:string = 'a'
...args:number[]
*/

/* 
函数重载：函数名字相同，但是可以传入不同类型和不同个数的参数
 */

// 重载函数声明，只是声明，并没有实现
function add(x: string, y: string): string
function add(x: number, y: number): number
// 定义函数实现
function add(x: string | number, y: string | number): string | number {
  // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
  if (typeof x === 'string' && typeof y === 'string') {
    return x + y
  } else if (typeof x === 'number' && typeof y === 'number') {
    return x + y
  }
}

console.log(add(1, 2))
console.log(add('a', 'b'))
// console.log(add(1, 'a')) // error