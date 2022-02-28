function testWeightBagProblem(weight, value, size) {
  //滚动数组的解法就是继承上一行的值
  //初始化dp数组
  let dp = Array(size + 1).fill(0)
  //物品0的初始化
  for (let i = 1; i < size + 1; i++) {
    if (weight[0] <= i) {
      dp[i] = value[0]
    }
  }
  //遍历dp
  for (let i = 1; i < weight.length; i++) {
    for (let j = 1; j < size + 1; j++) {
      if (j < weight[i]) {
        continue
      }
      dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
    }
  }
  return dp[size]
}
function test() {
  console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
}
test();