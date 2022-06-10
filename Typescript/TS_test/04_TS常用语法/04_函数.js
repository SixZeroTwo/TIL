/*
 函数定义
*/
/* function add(x: number, y: number): number {
  return x + y
} */
let myAdd = function (x, y) {
    return x + y;
};
/*
完整函数类型
*/
let myAdd2 = function (x, y) {
    return x + y;
};
// 定义函数实现
function add(x, y) {
    // 在实现上我们要注意严格判断两个参数的类型是否相等，而不能简单的写一个 x + y
    if (typeof x === 'string' && typeof y === 'string') {
        return x + y;
    }
    else if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
}
console.log(add(1, 2));
console.log(add('a', 'b'));
// console.log(add(1, 'a')) // error
