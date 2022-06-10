/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  //动态规划法，从左上角玩右下角走
  const [m, n] = [grid.length, grid[0].length]
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = grid[i - 1][j - 1] + Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  return dp[m][n]
};