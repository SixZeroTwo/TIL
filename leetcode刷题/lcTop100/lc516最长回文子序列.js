/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  /*   //暴力解法
    let res = 0
    for (let i = 0; i < s.length; i++) {
      for (let j = s.length; j > i; j--) {
        if (isReverse(s.slice(i, j))) res++
      }
    }
    return res
  };
  function isReverse(s) {
    if (s == s.split('').reverse().join('')) return true
    return false */


  //dp解法，如果s[i]==s[j]且s[i+1,j-1]是回文子串，则s[i,j]一定也是回文子串
  //在j+1>i的范围中递推
  //初始化dp
  /*   function isReverse(s) {
      if (s == s.split('').reverse().join('')) return true
      return false
    } */
  const l = s.length
  let dp = new Array(l).fill(0).map(() => new Array(l).fill(0))
  //初始化对角线和对角线上面的斜线

  for (let i = 0; i < l; i++) {
    dp[i][i] = 1
  }
  //遍历
  for (let i = l - 2; i >= 0; i--) {
    for (let j = i + 1; j < l; j++) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2
      }
      else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[0][l - 1] > 1 ? dp[0][l - 1] : 1
}

longestPalindromeSubseq("abcabcabcabc")