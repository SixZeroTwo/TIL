/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function (n) {
  //特殊情况
  if (n == 2) return 1
  if (n == 3) return 2
  if (n == 4) return 4
  //建立一个dp数组：n+1长度
  let dp = new Array(n + 1).fill(0)
  //初始化
  for (let i = 1; i <= 4; i++) {
    dp[i] = i
  }
  //遍历
  for (let i = 5; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      //dp[i] =  Math.max(dp[i], dp[j] * dp[i - j])
      try {
        if (BigInt(dp[i]) < BigInt(dp[j]) * BigInt(dp[i - j])) dp[i] = BigInt(dp[j]) * BigInt(dp[i - j])
      }
      catch (e) {
        console.log(e)
      }
    }
  }
  //如果dp[n]越界了，需要考虑大数求余的问题
  return Number(dp[n] % BigInt(1000000007))

};
console.log(cuttingRope(120));
