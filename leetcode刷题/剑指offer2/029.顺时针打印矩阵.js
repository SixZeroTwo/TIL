/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  //特殊情况
  if (!matrix.length) return []
  let count = 0
  let res = []
  const I = matrix.length
  const J = matrix[0].length
  let countStack = []
  while (res.length < I * J) {
    if (countStack.length && countStack[countStack.length - 1] == count) break
    let status = count % 4
    let round = Math.floor(count / 4)
    if (status == 0) {
      for (let j = round; j < J - round; j++) {
        res.push(matrix[round][j])
      }
    }
    if (status == 1) {
      for (let i = round + 1; i < I - round; i++) {
        res.push(matrix[i][J - 1 - round])
      }
    }
    if (status == 2) {
      for (let j = J - 2 - round; j >= round; j--) {
        res.push(matrix[I - 1 - round][j])
      }
    }
    if (status == 3) {
      for (let i = I - 2 - round; i > round; i--) {
        res.push(matrix[i][round])
      }
    }
    count++
  }
  return res
};
spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])