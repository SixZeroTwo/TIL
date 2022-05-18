/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function (matrix) {
  //错误的想法
  /*   //两个dp数组，分别代表以i，j为右下角的矩形的宽、高
    const [m, n] = [matrix.length, matrix[0].length]
    const wid = new Array(m).fill(0).map(() => new Array(n).fill(0))
    const height = new Array(m).fill(0).map(() => new Array(n).fill(0))
    //初始化
    //wid的第一列
    for (let i = 0; i < m; i++) {
      if (matrix[i][0] == 1) wid[i][0] = 1
    }
    //wid的第一行
    for (let i = 1; i < n; i++) {
      if (matrix[0][i] == 1) wid[0][i] = wid[0][i - 1] + 1
      else wid[0][i] = 0
    }
    //height的第一行
    for (let i = 0; i < n; i++) {
      if (matrix[0][i] == 1) height[0][i] = 1
    }
    //wid的第一列
    for (let i = 1; i < m; i++) {
      if (matrix[i][0] == 1) height[i][0] = height[i - 1][0] + 1
      else height[i][0] = 0
    }
  
    //遍历wid和height，如果matrix[i][j]为1，新宽度（最小值为1） = min（左宽，上宽-1）+1；新高度（最小值为1） = min（左高-1，上高）+1
    let res = 0
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        if (matrix[i][j] == 1) {
          wid[i][j] = Math.max(1, Math.min(wid[i - 1][j], wid[i][j - 1] - 1) + 1)
          height[i][j] = Math.max(1, Math.min(height[i - 1][j] - 1, height[i][j - 1]) + 1)
          res = Math.max(res, wid[i][j] * height[i][j])
        }
      }
    }
    return res */
};
maximalRectangle([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]])