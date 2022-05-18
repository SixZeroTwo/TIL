/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}7
 */
var findTargetSumWays = function (nums, target) {
  const sum = nums.reduce((prev, cur) => prev + cur, 0)
  const x = sum + target
  //特殊情况判断
  if (x % 2 || Math.abs(sum) < target) return 0
  //初始化
  let dp = new Array(x / 2 + 1).fill(0)
  //遍历
  dp[0] = 1//得到总和为0有一种方法
  for (let i = 0; i < nums.length; i++) {
    for (let j = dp.length - 1; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[dp.length - 1]
};