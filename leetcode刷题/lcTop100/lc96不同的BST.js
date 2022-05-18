/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  //初始化
  let dp = [1, 1]
  if (n <= 1) return dp[n]
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1]
    }
  }
  return dp[n]
};