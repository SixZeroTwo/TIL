/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //遍历所有元素
  let maxP = 0//记录当前能到达的最大位置
  let i = 0
  let len = nums.length
  while (i < len) {
    //判断最大位置能不能到当前位置
    if (maxP < i) return false
    else {
      let temp = i + nums[i]
      maxP = temp > maxP ? temp : maxP
      i++
    }
  }
  return true
};