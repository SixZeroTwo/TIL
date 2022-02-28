/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  //动态规划解法 On^2
  //dp数组代表当前索引下能取得的最大递增子序列长度
  let dp = Array(nums.length).fill(1)
  let res = 1
  //遍历
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1)
    }
    res = Math.max(res, dp[i])
  }
  return res
};
lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])