function testWeightBagProblem(weight, value, size) {
  //初始化dp数组
  let dp = Array(weight.length).fill().map(() => Array(size + 1).fill(0))
  //物品0的初始化
  for (let i = 1; i < size + 1; i++) {
    if (weight[0] <= i) {
      dp[0][i] = value[0]
    }
  }
  //遍历dp
  for (let i = 1; i < weight.length; i++) {
    for (let j = 1; j < size + 1; j++) {
      if (j < weight[i]) {
        dp[i][j] = dp[i - 1][j]
      }
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i])
      }
    }
  }
  return dp[weight.length - 1][size]
}
function test() {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}
test();