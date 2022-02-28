/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
  let dp = [-prices[0], 0]
  for (let i = 1; i < prices.length; i++) {
    let temp = dp.slice()
    dp[0] = Math.max(temp[0], temp[1] - prices[i])
    dp[1] = Math.max(dp[1], dp[0] + prices[i] - fee)
  }
  return Math.max(dp[1])
};