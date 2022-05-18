/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  /*   //额外空间解决
    const n = matrix.length
    const newMatrix = new Array(n).fill(0).map(() => new Array(n).fill(0))
    //res[n-j,i] = matrix[i,j]
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        newMatrix[j][n - 1 - i] = matrix[i][j]
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        matrix[i][j] = newMatrix[i][j]
      }
    } */

  //原地交换，两次交换
  const n = matrix.length
  //水平翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < Math.floor(n / 2); j++) {
      [matrix[i][n - 1 - j], matrix[i][j]] = [matrix[i][j], matrix[i][n - 1 - j]]
    }
  }
  //副对角线翻转
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
      [matrix[i][j], matrix[n - 1 - j][n - 1 - i]] = [matrix[n - 1 - j][n - 1 - i], matrix[i][j]]
    }
  }
};
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
rotate(matrix)
