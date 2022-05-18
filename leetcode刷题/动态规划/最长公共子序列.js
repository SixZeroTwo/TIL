/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  //dp[i][j]代表text1的索引为i-1的字符、text2的索引为j-1的字符拥有的最长公共子序列
  //构造dp数组，dp[i][j]代表nums1索引为i-1、nums2索引为j-1时的最大重复子串长度
  const [m, n] = [text1.length, text2.length]
  let dp = Array.from(Array(m + 1), () => Array(n + 1).fill(0))
  //遍历
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {

      if (text1[i - 1] == text2[j - 1]) dp[i][j] = Math.max(dp[i - 1][j - 1] + 1, dp[i - 1][j], dp[i][j - 1])
      else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  return dp[m][n]
};
longestCommonSubsequence("abcba"
  , "abcbcba")