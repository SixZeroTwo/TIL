let [a, b, x, y] = readline().split(' ')
let res = Infinity
dfs(a, b, 0)
print(res)
//递归
function dfs(AHP, BHP, times) {
  //终止条件
  if (AHP <= 0 && BHP <= 0) {
    res = Math.min(times, res)
  }
  //dfs
  if (AHP > 0 && BHP > 0) {
    dfs(AHP - a, BHP, times + 1)
    dfs(AHP, BHP - a, times + 1)
    dfs(AHP - b, BHP - b, times + 1)
  }
  else if (AHP > 0 && BHP <= 0) {
    if (b > a) dfs(AHP - b, BHP, times + 1)
    else dfs(AHP - a, BHP, times + 1)
  }
  else if (BHP > 0 && AHP <= 0) {
    if (b > a) dfs(AHP, BHP - b, times + 1)
    else dfs(AHP, BHP - a, times + 1)
  }
}
