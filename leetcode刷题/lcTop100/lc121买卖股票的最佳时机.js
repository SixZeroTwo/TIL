/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //动态规划数组，dp[i][j]表示第i天持有(j=1)或不持有(j=0)状态下能获得的最大利润
  let l = prices.length
  let dp = new Array(l).fill(0).map(() => new Array(2).fill(0))
  //初始化
  dp[0][1] = -prices[0]
  for (let i = 1; i < l; i++) {
    dp[i][0] = Math.max(prices[i] + dp[i - 1][1], dp[i - 1][0])
    dp[i][1] = Math.max(-prices[i], dp[i - 1][1])
  }
  return dp[l - 1][0]
};