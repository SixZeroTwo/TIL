// 编程范式：命令行编程/声明式编程
// 编程范式：面向对象编程（第一公式：对象）/函数式编程（第一公民：函数）
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个布尔值
// true：当返回true式，函数内部会自动将这次回调的n加入到新的数组中
// false:当返回false时，函数内部就会过滤这次的n

const nums = [10, 20, 111, 222, 444, 40, 50];

// let total = nums
//   .filter(function (n) {
//     return n < 100;
//   })
//   .map(function (n) {
//     return n * 2;
//   })
//   .reduce(function (preValue, n) {
//     return preValue + n;
//   }, 0);

let total = nums
  .filter((n) => n < 100)
  .map((n) => n * 2)
  .reduce((preValue, n) => preValue + n);

console.log(total);

// let newNums = nums.filter(function (n) {
//   // return true;
//   return n < 100;
// });
// console.log(newNums); // [ 10, 20, 40, 50 ]

// // map函数的使用
// let new2Nums = newNums.map(function (n) {
//   return n * 2;
// });
// console.log(new2Nums); // [ 20, 40, 80, 100 ]

// // reduce函数的使用
// // 对数组中所有的内容进行汇总
// let total = new2Nums.reduce(function (preValue, n) {
//   return preValue + n;
// }, 0);
// console.log(total);
// 第一次：preValue 0 n 20
// 第二次：preValue 20 n 40
// 第三次：preValue 60 n 80
// 第四次：preValue 140 n 100
// 240

// 1.需求取出所有小于100的数字
// let newNums = [];
// for (let n of nums) {
//   if (n < 100) {
//     newNums.push(n);
//   }
// }

// //2.将所有小于100的数字进行转化：全部*2
// let new2Nums = [];
// for (let n of newNums) {
//   new2Nums.push(n * 2);
// }

// console.log(new2Nums);

// //3.将所有newNums数字相加，得到最终的结果
// let total = 0;
// for (let n of new2Nums) {
//   total += n;
// }

// console.log(total);
