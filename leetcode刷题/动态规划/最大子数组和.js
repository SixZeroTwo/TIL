/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

  //dp解法,dp[i]代表索引为i的位置下的连续子数组最大和
  let len = nums.length
  let maxSum = nums[0]
  let dp = Array(len).fill(0)
  dp[0] = nums[0]
  for (let i = 1; i < len; i++) {
    //当前索引下的连续子数组最大和要么是从当前位置开始计数，要么是接着上一个位置开始计数，取最大值作为最大和
    dp[i] = Math.max(nums[i], dp[i - 1] + nums[i])
    maxSum = dp[i] > maxSum ? dp[i] : maxSum
  }
  return maxSum
};