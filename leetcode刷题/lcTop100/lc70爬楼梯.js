/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  //递归会超时
  /*   back(0)
    function back(sum){
        if(sum>=n){
            if(sum==n){
            res++
            }
            return 
        }
        //两个分支
        back(sum+1)
        back(sum+2)
    } */
  //常规的递推解法
  /*      if (n <= 2) {
        return n
      }
      //dp代表到第i层可能的走法，dp[i]=dp[i-1]+dp[i-2]
      let dp = [1, 2]
      for (i = 3; i <= n; i++) {
        dp[2] = dp[1] + dp[0]
        dp[0] = dp[1]
        dp[1] = dp[2]
      }
      return dp[2]  */

  //完全背包解法
  //初始化   
  let dp = Array(n + 1).fill(0)
  dp[0] = 1
  //求排列个数，先遍历背包容量，再遍历物品
  for (let j = 0; j <= n; j++) {
    for (let i = 1; i <= 2; i++) {
      if (j >= i) dp[j] += dp[j - i]
    }
  }
  return dp[n]
};