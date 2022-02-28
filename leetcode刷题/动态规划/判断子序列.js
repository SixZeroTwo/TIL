/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  /*   //双指针，ps是慢指针，pt快指针
    let ps = 0
    let pt = 0
    let sL = s.length
    let tL = t.length
    //特殊情况
    if(sL===0){
        return true
  }
    //
    while(pt<tL){
        if(s[ps]===t[pt]){
            ps++
        } 
        if(ps===sL){
        return true
        }
        pt++
    }
    return false */
  //动态规划解法
  let sL = s.length
  let tL = t.length
  //dp[i][j]表示索引为i-1,j时s是否是t的子序列，这里dp[i][0]全置为false,dp[0][j]全置为true
  let dp = Array.from(Array(sL + 1), () => Array(tL + 1).fill(false))
  //初始化
  for (let j = 0; j <= tL; j++) {
    dp[0][j] = true
  }
  //遍历
  for (let i = 1; i <= sL; i++) {
    for (let j = 1; j <= tL; j++) {
      if (s[i - 1] == t[j - 1]) dp[i][j] = dp[i - 1][j - 1]
      else dp[i][j] = dp[i][j - 1]
    }
  }
  return dp[sL][tL]
};

isSubsequence("abc"
  , "ahbgdc")