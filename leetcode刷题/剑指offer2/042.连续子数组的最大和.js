/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const len = nums.length
  const dp = new Array(len).fill(0)
  let max = nums[0]
  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i])
    //记录最大值
    max = Math.max(max, dp[i])
  }
  return max
};