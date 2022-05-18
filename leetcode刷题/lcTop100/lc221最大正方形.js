/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const [m, n] = [matrix.length, matrix[0].length]
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0))
  let max = 0
  matrix = matrix.map(arr => arr.map(val => parseInt(val)))
  //遍历
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0) dp[i][j] = matrix[i][j]
      else dp[i][j] = matrix[i][j] == 1 ? 1 + parseInt(Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])) : 0
      max = Math.max(dp[i][j], max)
    }
  }
  return max * max
};
maximalSquare([["1", "1", "1", "1", "0"], ["1", "1", "1", "1", "0"], ["1", "1", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["0", "0", "1", "1", "1"]])