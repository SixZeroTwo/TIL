/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  //因为可以选择从0或者1台阶开始选择作为开始台阶，按照最小花费的思想，dp[0]和dp[1]初始为0
  //当i=2时, dp[2]=min(cost[0],cost[1])
  //当i>2时，dp[i]的表达式都是 dp[i]=min(dp[i-2]+cost[i-2],dp[i-1]+cost[i-1])

  //dp初始化
  dp = [0, 0, Math.min(cost[0], cost[1])]
  for (let i = 3; i <= cost.length; i++) {
    dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1])
  }
  return dp[dp.length - 1]
};