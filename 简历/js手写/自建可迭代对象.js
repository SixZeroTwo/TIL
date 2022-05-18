let range = {
  from: 1,
  to: 5
};

// 我们希望 for..of 这样运行：
// for(let num of range) ... num=1,2,3,4,5
range[Symbol.iterator] = function () {
  //返回迭代器对象 iterator object
  return {
    current: this.from,
    end: this.to,
    //当使用for of遍历range对象时会调用next()方法
    next() {
      //
      if (this.current <= this.end)
        return {
          done: false,
          value: this.current++
        }
      else {
        return {
          done: true,
        }
      }
    }
  }
}

for (let num of range) {
  console.log(num);//输出1 2 3 4 5
}