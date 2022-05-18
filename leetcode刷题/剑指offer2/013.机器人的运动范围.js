
/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function (m, n, k) {
  //dfs，从左上角开始，只需要计算向下和向右即可
  //首先新建一个m n大小的矩阵，被探索过的格子不能被再次探索
  let map = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let res = 0
  const dfs = function (x, y) {
    //判断位置的合法性
    if (x < 0 || x >= m || y < 0 || y >= n || map[x][y]) return
    //将当前置1
    map[x][y] = 1
    //判断当前是否满足位和<=k
    let sum = 0
    let [a, b] = [x, y]
    while (a != 0 || b != 0) {
      sum += a % 10 + b % 10
      a = Math.floor(a / 10)
      b = Math.floor(b / 10)
    }
    if (sum <= k) {
      res++
      //dfs
      dfs(x + 1, y)
      dfs(x, y + 1)
    }
  }
  dfs(0, 0)
  return res
};