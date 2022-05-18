/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  //DFS
  /*   const [m, n] = [grid.length, grid[0].length]
    let res = 0
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (grid[i][j] == '1') {
          res++
          dfs(i, j)
        }
      }
    }
    function dfs(r, c) {
      //终止条件
      if (grid[r][c] == '0') return
      //当前值置0
      grid[r][c] = '0'
      //上下左右
      if (r > 0) dfs(r - 1, c)
      if (r < m - 1) dfs(r + 1, c)
      if (c > 0) dfs(r, c - 1)
      if (c < n - 1) dfs(r, c + 1)
    }
    return res */

  //BFS
  const [m, n] = [grid.length, grid[0].length]
  let res = 0
  let queue = []
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == '1') {
        res++
        queue.push([i, j])
        while (queue.length) {
          let len = queue.length
          for (let k = 0; k < len; k++) {
            let [r, c] = queue.pop()
            grid[r][c] = '0'
            if (r > 0 && grid[r - 1][c] == '1') queue.push([r - 1, c])
            if (r < m - 1 && grid[r + 1][c] == '1') queue.push([r + 1, c])
            if (c > 0 && grid[r][c - 1] == '1') queue.push([r, c - 1])
            if (c < n - 1 && grid[r][c + 1] == '1') queue.push([r, c + 1])
          }
        }
      }
    }
  }
  return res
};