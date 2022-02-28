/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix.length
  let n = matrix[0].length
  //访问情况
  let markMap = []
  for (let i = 0; i < m; i++) {
    markMap.push(Array(n).fill(0))
  }

  let row = 0
  let col = 0
  //迭代
  while (row < m && row >= 0 && col < n && col >= 0) {
    markMap[row][col] = 1
    if (matrix[row][col] === target) {
      return true
    }
    else if (matrix[row][col] > target) {
      if (markMap[row - 1] !== undefined && markMap[row - 1][col] !== 1) {
        row--
      }
      else {
        col--
      }
    }
    else if (matrix[row][col] < target) {
      if (markMap[row][col + 1] !== undefined && markMap[row][col + 1] !== 1) {
        col++
      }
      else {
        row++
      }
    }
  }
  return false
};

console.log(searchMatrix([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5))