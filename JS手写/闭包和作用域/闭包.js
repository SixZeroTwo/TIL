function makeCounter() {
  let count = 0;

  return function () {
    return count++;
  };
}

let counter = makeCounter();
let counter2 = makeCounter();

alert(counter()); // 0
alert(counter()); // 1

alert(counter2()); // 0
alert(counter2()); // 1

//编写一个像 sum(a)(b) = a+b 这样工作的 sum 函数。
function sum(a) {
  return function (b) {
    return a + b
  }
}
console.log(sum(1)(2));