(function () {
  // 1.想使用flag
  if (moduleA.flag) {
    console.log("小明是天才");
  }

  moduleA.sum(40, 50);
  // 2.使用sum函数
})();

//模块导入

// var aa = require("./aaa");
// var flag = aaa.flag;
// var sum = aaa.sum;
// var { flag, sum } = require("./aaa");

// sum(20, 30);
