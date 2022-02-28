/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dp = Array(s.length + 1).fill(false)
  dp[0] = true
  //遍历
  for (let j = 1; j < s.length + 1; j++) {
    for (let i = 0; i < wordDict.length; i++) {
      if (j >= wordDict[i].length) {
        let str2bCompared = s.slice(j - wordDict[i].length, j)
        if (str2bCompared == wordDict[i] && dp[j - wordDict[i].length]) {
          dp[j] = true
          break
        }
      }
    }
  }
  return dp[s.length]
};

wordBreak(
  "leetcode",
  ["leet", "code"])