/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function (n) {
  //特殊处理
  if (n == 2) {
    return 1
  }
  if (n == 3) {
    return 2
  }
  if (n == 4) {
    return 4
  }
  //dp[i]代表i可以返回的最大整数拆分乘积(0,1,2,3除外)
  //初始化为dp=[0,1,2,3,4]
  let dp = [0, 1, 2, 3, 4]
  for (let i = 5; i <= n; i++) {
    let chosen = []
    for (let j = 2; j <= Math.floor(i / 2); j++) {
      chosen.push(dp[j] * dp[i - j])
      dp[i] = Math.max(...chosen)
    }
  }
  return dp[n]
};

integerBreak(10)