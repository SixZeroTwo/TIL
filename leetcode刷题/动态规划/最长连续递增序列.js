/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  //动态规划解法
  let len = nums.length
  let dp = Array(len).fill(1)
  for (let i = 1; i < len; i++) {
    if (nums[i - 1] < nums[i])
      dp[i] += dp[i - 1]
  }
  return Math.max(...dp)
};