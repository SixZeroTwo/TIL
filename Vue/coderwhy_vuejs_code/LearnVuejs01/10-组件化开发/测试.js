// 第一种形式
function abc() {
  return {
    name: "why",
    age: 18,
  };
}
let obj1 = abc();
let obj2 = abc();
let obj3 = abc();

obj1.name = "kobe";
console.log(obj2); //{ name: 'why', age: 18 } 没有被改变
console.log(obj3); //{ name: 'why', age: 18 }

// 第二种形式
// 存入的是内存地址
const cobj = {
  name: "why",
  age: 18,
};
function bcd() {
  return cobj; // 这里直接返回内存地址，对内存地址进行操作
}

let cobj1 = bcd();
let cobj2 = bcd();
let cobj3 = bcd();

cobj1.name = "james";
console.log(cobj2); // { name: 'james', age: 18 } 被改变了
console.log(cobj3); //{ name: 'james', age: 18 }
