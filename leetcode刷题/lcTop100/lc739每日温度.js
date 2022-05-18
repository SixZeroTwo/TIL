/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  //维护单调递减栈，放入的是下标
  let stack = []
  //答案数组
  const len = temperatures.length
  let answer = new Array(len).fill(0)
  //遍历temperatures数组
  for (let i = 0; i < len; i++) {
    //如果为空则放入，不为空则比较，直到满足单调递减，放入。
    while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      let index = stack.pop()
      answer[index] = i - index
    }
    stack.push(i)
  }

  return answer
};

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])