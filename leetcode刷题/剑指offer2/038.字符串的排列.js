/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let arr = s.split('')
  let res = []
  let visited = new Array(arr.length).fill(0)
  dfs('', visited)
  return res
  function dfs(path, visited) {
    //访问完毕
    if (path.length == arr.length) {
      if (!res.includes(path)) res.push(path)
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue
      visited[i] = 1
      dfs(path + arr[i], visited)
      visited[i] = 0
    }
  }
};