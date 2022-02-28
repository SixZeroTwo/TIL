/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (k, prices) {

  //动态规划解法：
  //dp[i][j]表示第i天的j状态下能够得到的最大利润
  //每一天都有2k+1个状态：不操作状态，第一次买入的状态，第一次卖出的状态，第二次买入的状态，第二次卖出的状态...
  //其中每一状态的递推公式如下：
  //无操作状态：利润为0
  //第一次买入状态：该状态要么是当天进行了第一次买入，要么是延续了上一天的第一次买入状态，因此取上一天的买入状态利润和当天第一次买入利润的最大值 Math.max(dp[i-1][1],-prices[i])
  //第一次卖出状态：该状态要么是当天进行了第一次卖出（利润为当天的股价加上上一天第一次买入状态的最大利润），要么是延续了上一天的第一次卖出状态：Math.max(dp[i-1][2],prices[i]+dp[i-1][1])
  //第二次买入状态：该状态要么是当天进行了第二次买入，要么是延续了上一天的第二次买入状态：Math.max(dp[i-1][3],dp[i-1][2]-prices[i])
  //第二次卖出状态：该状态要么是当天进行了第一次卖出（利润为当天的股价加上上一天第一次买入状态的最大利润），要么是延续了上一天的第一次卖出状态：Math.max(dp[i-1][2],prices[i]+dp[i-1][1])
  //第j次买入状态：dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j-1] - prices[i])
  //第j次卖出状态：dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j-1] + prices[i])
  //dp初始化
  let dp = Array(prices.length).fill(Array(2 * k + 1).fill(0))
  for (let j = 1; j <= 2 * k; j += 2) {
    dp[0][j] = -prices[0]
  }
  //遍历
  for (let i = 1; i < prices.length; i++) {
    for (let j = 1; j <= 2 * k; j++) {
      //奇数列
      if (j % 2) dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] - prices[i])
      //偶数列
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1] + prices[i])
    }
  }
  let res = [0]
  for (let j = 2; j <= 2 * k; j += 2) {
    res.push(dp[prices.length - 1][j])
  }
  return Math.max(...res)
};
maxProfit(2, [1, 2, 3, 4, 5])