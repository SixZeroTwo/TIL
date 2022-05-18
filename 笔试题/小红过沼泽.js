//处理输入
let [m, n] = readline().split(' ')
let map = []
while (line = readline()) {
  map.push(line.split(' '))
}

//初始化dp[]
let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
dp[0][0] = 0
//初始化第一行
for (let i = 1; i < n; i++) {
  if (map[0][i] == map[0][i - 1]) dp[0][i] = dp[0][i - 1] + 1
  else dp[0][i] = dp[0][i - 1] + 2
}
//初始化第一列
for (let i = 1; i < m; i++) {
  if (map[i][0] == map[i - 1][0]) dp[i][0] = dp[i - 1][0] + 1
  else dp[i][0] = dp[i - 1][0] + 2
}

//遍历
for (let i = 1; i < m; i++) {
  for (let j = 1; j < n; j++) {
    //首先计算左边和上边过来所需要的单位时间
    let left = dp[i][j - 1] + (map[i][j - 1] == map[i][j] ? 1 : 2)
    let up = dp[i - 1][j] + (map[i - 1][j] == map[i][j] ? 1 : 2)
    dp[i][j] = Math.min(left, up)
  }
}

//输出结果
print(dp[m - 1][n - 1])
function test(m, n, map) {
  //初始化dp[]
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(0))
  dp[0][0] = 0
  //初始化第一行
  for (let i = 1; i < n; i++) {
    if (map[0][i] == map[0][i - 1]) dp[0][i] = dp[0][i - 1] + 1
    else dp[0][i] = dp[0][i - 1] + 2
  }
  //初始化第一列
  for (let i = 1; i < m; i++) {
    if (map[i][0] == map[i - 1][0]) dp[i][0] = dp[i - 1][0] + 1
    else dp[i][0] = dp[i - 1][0] + 2
  }

  //遍历
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      //首先计算左边右边和上边过来所需要的单位时间
      let left = dp[i][j - 1] + (map[i][j - 1] == map[i][j] ? 1 : 2)

      let up = dp[i - 1][j] + (map[i - 1][j] == map[i][j] ? 1 : 2)
      dp[i][j] = Math.min(left, up)
    }
  }
  return dp[m - 1][n - 1]
}

test(3, 3, [[1, 0, 0], [1, 1, 1], [0, 0, 1]])