/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  //定义窗口左右指针
  let l = r = 0
  let sum = 0
  let len = nums.length
  let minL = nums.length + 1
  while (r < len && l <= r) {
    sum += nums[r++]
    //判断sum和target大小关系
    while (sum >= target) {
      if (r - l < minL) {
        minL = r - l
      }
      sum -= nums[l++]
    }

  }
  return minL == len + 1 ? 0 : minL
};