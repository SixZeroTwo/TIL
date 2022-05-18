function findMinPath(m, n, x, y, endx, endy, lakeNum, lakeP) {
  //新建map
  let map = new Array(m).fill(0).map(() => new Array(n).fill(0))
  //开始时对湖标记为2，终点标记为3
  for (let i = 0; i < lakeNum; i++) {
    map[lakeP[i][0]][lakeP[i][1]] = 2
  }
  map[endx][endy] = 3
  //返回的变量为最短路径长度pathLen和数目pathNum
  let pathNum = 0
  let min = Infinity
  //从起点开始dfs遍历
  dfs(map, x, y, 0)
  function dfs(map, x, y, path) {
    //终止条件
    if (x >= m || x < 0 || y >= n || y < 0) return
    if (map[x][y] == 2) return
    if (map[x][y] == 3) {
      if (min == path) pathNum++
      else if (min > path) {
        min = path
        pathNum = 1
      }
      return
    }
    //本层dfs，上下左右
    map[x][y] = 2
    dfs(map, x - 1, y, path + 1)
    dfs(map, x + 1, y, path + 1)
    dfs(map, x, y - 1, path + 1)
    dfs(map, x, y + 1, path + 1)
    map[x][y] = 0
  }
  return [pathNum, min]
}

console.log(findMinPath(5, 5, 0, 1, 3, 3, 1, [[2, 2]]))