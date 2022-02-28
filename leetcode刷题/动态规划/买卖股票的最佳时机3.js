/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  //错误解法：没有考虑到取连续趋势下的最大两次买卖并不一定是总体能取到的最大两次买卖
  /*   if (prices.length == 1) return 0
    let profits = [0]
    let tempProfit = 0
    for (let i = 0; i < prices.length; i++) {
      //当后一天的price小于当前的price，判断是否将tempProfit压入到profits数组，并置0
      if (prices[i + 1] < prices[i] || !prices[i + 1]) {
        profits.push(tempProfit)
        tempProfit = 0
      }
      //否则tempProfit+=prices[i+1]-prices[i]
      else {
        tempProfit += prices[i + 1] - prices[i]
      }
    }
    if (profits.length < 2) {
      return profits[0]
    }
    profits.sort((a, b) => b - a)
    return profits[0] + profits[1] */

  //动态规划解法：
  //dp[i][j]表示第i天的j状态下能够得到的最大利润
  //每一天都有五个状态：不操作状态，第一次买入的状态，第一次卖出的状态，第二次买入的状态，第二次卖出的状态
  //其中每一状态的递推公式如下：
  //无操作状态：利润为0
  //第一次买入状态：该状态要么是当天进行了第一次买入，要么是延续了上一天的第一次买入状态，因此取上一天的买入状态利润和当天第一次买入利润的最大值 Math.max(dp[i-1][1],-prices[i])
  //第一次卖出状态：该状态要么是当天进行了第一次卖出（利润为当天的股价加上上一天第一次买入状态的最大利润），要么是延续了上一天的第一次卖出状态：Math.max(dp[i-1][2],prices[i]+dp[i-1][1])
  //第二次买入状态：该状态要么是当天进行了第二次买入，要么是延续了上一天的第二次买入状态：Math.max(dp[i-1][3],dp[i-1][2]-prices[i])
  //第二次卖出状态：该状态要么是当天进行了第一次卖出（利润为当天的股价加上上一天第一次买入状态的最大利润），要么是延续了上一天的第一次卖出状态：Math.max(dp[i-1][2],prices[i]+dp[i-1][1])

  //dp初始化
  let dp = Array(prices.length).fill([0, 0, 0, 0, 0])
  dp[0][1] = -prices[0]
  dp[0][3] = -prices[0]
  //遍历
  for (let i = 1; i < prices.length; i++) {
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
    dp[i][2] = Math.max(dp[i - 1][2], prices[i] + dp[i - 1][1])
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i])
    dp[i][4] = Math.max(dp[i - 1][4], prices[i] + dp[i - 1][3])
  }
  return Math.max(dp[prices.length - 1][0], dp[prices.length - 1][2], dp[prices.length - 1][4])
};