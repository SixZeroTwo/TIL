/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxStr = ''
  let maxL = 0
  //开始遍历
  for (let i = 0; i < s.length; i++) {
    let CurrentCharIndexInMaxStr = maxStr.indexOf(s[i])
    //没有碰到重复字符
    if (CurrentCharIndexInMaxStr == -1) {
      maxStr += s[i]
    }
    //碰到重复字符
    else {
      //更新maxL
      if (maxStr.length > maxL) {
        maxL = maxStr.length
      }
      //从已重复字符串的后一位开始截取
      maxStr = maxStr.slice(CurrentCharIndexInMaxStr + 1, maxStr.length) + s[i]
    }
  }
  //一直没碰到重复字符或最后没碰到重复字符串的情况，更新maxL
  if (maxStr.length > maxL) {
    maxL = maxStr.length
  }
  return maxL
}
console.log(lengthOfLongestSubstring("dvdf"));