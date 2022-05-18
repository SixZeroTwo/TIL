/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  //dp[i][j]代表word1[i-1]转换成word[j-1]所需要的最少操作数
  const [m, n] = [word1.length, word2.length]
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  //初始化
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i
  }
  //遍历
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      //如果相同，不需要进行操作
      if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      }
      //如果不同，则需要进行word1删或word2删（增操作等同与增），或者替换（即，dp[i-1][j-1]+1）
      else {
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1)
      }
    }
  }
  return dp[m][n]
};