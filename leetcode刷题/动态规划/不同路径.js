/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
Array.zeros = function (m, n) {
  let res = []
  for (let i = 0; i < m; i++) {
    res.push([])
    for (let j = 0; j < n; j++) {
      res[i].push(0)
    }
  }
  return res
}
var uniquePaths = function (m, n) {
  dp = Array.zeros(m, n)
  //初始化
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1
  }
  for (let i = 1; i < n; i++) {
    dp[0][i] = 1
  }

  //先右后左，先上后下地遍历
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }
  return dp[m - 1][n - 1]
};