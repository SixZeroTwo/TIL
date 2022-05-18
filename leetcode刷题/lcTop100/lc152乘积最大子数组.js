/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  //动态规划，max[i]代表下标i所具有的最大连续乘积
  //min[i]代表下标i所具有的最小连续乘积
  let len = nums.length
  let max = new Array(len).fill(-Infinity)
  let min = new Array(len).fill(Infinity)
  max[0] = nums[0]
  min[0] = nums[0]
  res = max[0]
  for (let i = 1; i < len; i++) {
    max[i] = Math.max(nums[i], nums[i] * max[i - 1], nums[i] * min[i - 1])
    min[i] = Math.min(nums[i], nums[i] * max[i - 1], nums[i] * min[i - 1])
    res = Math.max(res, max[i])
  }
  return res
};
maxProduct([-3, -1, -1])