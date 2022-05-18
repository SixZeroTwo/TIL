/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  let s = []
  //构造完全平方数数组
  for (let i = 1; i <= n; i++) {
    if (isSquareNum(i)) {
      s.push(i)
    }
  }
  //dp数组
  let dp = Array(n + 1).fill(Infinity)
  dp[0] = 0
  //遍历

  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j <= n; j++) {
      if (j >= s[i]) {
        if (dp[j - s[i]] != Infinity)
          dp[j] = Math.min(dp[j], dp[j - s[i]] + 1)
      }
    }
  }
  return dp[n]
};
function isSquareNum(num) {
  return Math.sqrt(num) % 1 == 0
}