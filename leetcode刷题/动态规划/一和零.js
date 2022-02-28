/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {
  //该背包的重量有了两个维度m和n，数组中每个数的价值都是1
  //因此递推公式为 dp[i][j]=Math.max(dp[i-nums_0[ind],j-nums_1[ind]]+1,dp[i][j])
  //获得每个数的0和1的个数
  let nums_0 = []
  let nums_1 = []
  strs.forEach(str => {
    let num0 = 0
    let num1 = 0
    for (let c of str) {
      if (c === '0') {
        num0++;
      } else {
        num1++;
      }
    }
    nums_0.push(num0)
    nums_1.push(num1)
  })

  //初始化
  let dp = Array(m + 1).fill(Array(n + 1).fill(0))
  for (let ind = 0; ind < strs.length; ind++) {
    for (let i = m; i >= nums_0[ind]; i--) {
      for (let j = n; j >= nums_1[ind]; j--) {
        dp[i][j] = Math.max(dp[i - nums_0[ind]][j - nums_1[ind]] + 1, dp[i][j])
      }
    }
  }
  return dp[m][n]
};

let strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3
findMaxForm(strs, m, n)