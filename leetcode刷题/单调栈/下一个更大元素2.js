/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let len = nums.length
  let res = Array(len).fill(-1)
  //循环遍历该数组两次
  //单调递减栈
  let stack = [0]

  for (let i = 1; i < 2 * len; i++) {
    //如果递减则放入单调栈
    if (nums[i % len] < nums[stack[stack.length - 1]]) {
      stack.push(i % len)
    }
    //否则维护单调栈并对res数组进行赋值
    else {
      while (stack.length && nums[i % len] > nums[stack[stack.length - 1]]) {
        res[stack.pop()] = nums[i % len]
      }
      stack.push(i % len)
    }
  }
  return res
};