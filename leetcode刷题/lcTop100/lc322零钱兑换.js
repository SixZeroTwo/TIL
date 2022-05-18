/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = Array(amount + 1).fill(Infinity)
  dp[0] = 0
  for (let j = 0; j < amount + 1; j++) {
    for (let i = 0; i < coins.length; i++) {

      if (j - coins[i] >= 0 && dp[j - coins[i]] != Infinity) dp[j] = Math.min(dp[j], dp[j - coins[i]] + 1)
    }
  }
  return dp[amount] == Infinity ? -1 : dp[amount]
};