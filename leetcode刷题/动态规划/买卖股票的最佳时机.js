/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //初始化dp数组,dp[i][0]代表第i天持有股票能得到的最大利润，dp[i][1]代表第i天不持有股票能得到的最大利润
  let dp = Array(prices.length).fill([0, 0])
  dp[0] = [-prices[0], 0]
  //从前往后遍历，递推公式为dp[i][0]=Math.max(dp[i-1][0],-prices[i]) dp[i][1]=Math.max(prices[i]+dp[i-1][0],dp[i-1][0])
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], -prices[i])
    dp[i][1] = Math.max(prices[i] + dp[i - 1][0], dp[i - 1][1])
  }
  return dp[prices.length - 1][1]
};
maxProfit(
  [7, 1, 5, 3, 6, 4])