/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  //O(NlogN)解法
  /*   let res = []
    for (let i = 0; i <= n; i++) {
      let temp = i
      let tempRes = 0
      while (temp >= 1) {
        if (temp % 2) tempRes++
        temp = Math.floor(temp / 2)
      }
      res.push(tempRes)
    }
    return res */
  //O(N)解法，动态规划
  //当i为偶数，1的数量与i/2相同
  //当i为奇数，1的数量=dp[floor(i/2)]+1
  let res = [0]
  let dp = new Array(n + 1)
  dp[0] = 0
  for (let i = 1; i <= n; i++) {
    if (i % 2) dp[i] = dp[Math.floor(i / 2)] + 1
    else dp[i] = dp[i / 2]
    res.push(dp[i])
  }
  return res
};

countBits(2)