/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  const m = prices.length
  //0，1，2表示三种状态：持有，不持有（当天没卖），不持有（当天卖了）
  let dp = new Array(m).fill(0).map(() => new Array(3).fill(0))
  //初始化第一天
  dp[0][0] = -prices[0]
  for (let i = 1; i < m; i++) {
    //当天持有的状态可以从：前一天持有，前一天不持有（当天没卖）推出
    //当天不持有（当天没卖的状态）可以从前一天的两种不持有状态推出
    //当天不持有（当天卖了）可以从前一天持有推出
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][2])
    dp[i][2] = dp[i - 1][0] + prices[i]
  }
  return Math.max(dp[m - 1][1], dp[m - 1][2])
};