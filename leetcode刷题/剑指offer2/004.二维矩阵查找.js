/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
  if (matrix.length == 0) return false
  //从矩阵右下角开始往回遍历
  const [n, m] = [matrix.length, matrix[0].length]
  let p1 = n - 1
  let p2 = m - 1
  while (p1 >= 0 && p2 >= 0) {
    if (target == matrix[p1][p2]) return true
    if (target > matrix[p1][p2]) {
      p1++
      p2++
      break
    }
    if (p1 > 0 && p2 > 0) {
      p1--
      p2--
    }
    if (p1 == 0 || p2 == 0) break
  }
  //特殊情况判断
  if (p1 >= n || p2 >= m) return false
  for (let i = p1; i >= 0; i--) {
    if (target == matrix[i][p2]) return true
  }
  for (let i = p2; i >= 0; i--) {
    if (target == matrix[p1][i]) return true
  }
  return false
};
console.log(findNumberIn2DArray([[1, 4], [2, 5]],
  2))
