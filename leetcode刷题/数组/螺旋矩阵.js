/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  //生成二维矩阵
  let arr = Array.from(Array(n), () => Array(n).fill(0))
  //计数
  let count = 1
  let count2 = 1
  let n_square = n * n
  let i = 0
  let j = 0
  //将n方个值赋给棋盘
  while (count <= n_square) {
    let parseCount = parseInt(count2 / 4)
    let switchCount = count2 % 4
    switch (switchCount) {
      case (1):
        for (j; j < n - parseCount; j++) {
          arr[i][j] = count++
        }
        //修正
        j--
        i++
        break
      case (2):
        for (; i < n - parseCount; i++) {
          arr[i][j] = count++
        }
        i--
        j--
        break
      case (3):
        for (; j >= 0 + parseCount; j--) { arr[i][j] = count++ }
        j++
        i--
        break
      case (0):
        for (; i >= 0 + parseCount; i--) { arr[i][j] = count++ }
        i++
        j++
        break
    }
    count2++
  }
  return arr
};

generateMatrix(3)