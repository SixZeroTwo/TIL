/**
 * @param {number[][]} obstacleGrid
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
var uniquePathsWithObstacles = function (obstacleGrid) {
  //获取宽和高
  let n = obstacleGrid[0].length
  let m = obstacleGrid.length
  //初始化dp数组，第一行和第一列遇到障碍物之前为置为1
  dp = Array.zeros(m, n)
  //初始化
  for (let i = 0; i < m; i++) {
    if (obstacleGrid[i][0] == 1) {
      break
    }
    dp[i][0] = 1
  }
  for (let i = 0; i < n; i++) {
    if (obstacleGrid[0][i] == 1) {
      break
    }
    dp[0][i] = 1
  }

  //dp推导
  //先右后左，先上后下地遍历
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] == 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[m - 1][n - 1]
};