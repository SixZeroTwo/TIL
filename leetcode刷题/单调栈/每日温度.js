/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  //初始化返回的数组
  let len = temperatures.length
  let res = Array(len).fill(0)
  //递减的单调栈
  let stack = [temperatures[0]]
  let index = [0]
  //从前往后遍历
  for (let i = 1; i < len; i++) {
    if (temperatures[i] <= temperatures[i - 1]) {
      stack.push(temperatures[i])
      index.push(i)
    }
    else {
      //维护单调栈，将pop出去的元素对应的位置置相应的数赋值

      while (temperatures[i] > stack[stack.length - 1]) {
        stack.pop()
        let id = index.pop()
        res[id] = i - id
      }
      //推入当前元素
      stack.push(temperatures[i])
      index.push(i)
    }
  }
  return res
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])