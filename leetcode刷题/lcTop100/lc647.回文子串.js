/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
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
  function isReverse(s) {
    if (s == s.split('').reverse().join('')) return true
    return false
  }
  const l = s.length
  let dp = new Array(l).fill(0).map(() => new Array(l).fill(0))
  //初始化对角线和对角线上面的斜线
  let count = 0
  for (let i = 0; i < l; i++) {
    dp[i][i] = 1
    if (i < l - 1 && isReverse(s.slice(i, i + 2))) {
      dp[i][i + 1] = 1
    }
  }
  //遍历
  for (let i = l - 3; i >= 0; i--) {
    for (let j = i + 2; j < l; j++) {
      if (s[i] == s[j]) {
        dp[i][j] = dp[i + 1][j - 1]
      }
    }
  }
  dp.forEach(val => val.forEach(v => { if (v) count++ }))
  return count
}

console.log(countSubstrings("aaaaa")) 