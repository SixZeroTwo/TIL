function main(M, N, deps) {
  //构造入度数组
  let inDeg = new Array(M).fill(0)
  //邻接表
  let map = {}
  //构造入度数组和邻接表
  for (let i = 0; i < deps.length; i++) {
    //入度
    inDeg[deps[i][0]]++
    //对应的邻接表
    if (map[deps[i][1]]) map[deps[i][1]].push(deps[i][0])
    else map[deps[i][1]] = [deps[i][0]]
  }
  //DFS

}

function dfs(path, end) {

}