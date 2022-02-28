/**
 * @param {number} n
 * @return {number}
 */
/*  F(0) = 0，F(1) = 1
 F(n) = F(n - 1) + F(n - 2)，其中 n > 1 */
var fib = function (n) {
  if (n < 2) {
    return n
  }
  //初始化dp
  dp = [0, 1]
  //从前往后循环，得到dp(n)=dp(n-1)+dp(n-2)
  for (let i = 2; i <= n; i++) {
    let temp = dp[1]
    dp[1] = dp[1] + dp[0]
    dp[0] = temp
  }
  return dp[1]
};