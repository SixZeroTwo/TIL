/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxStr = ''
  let maxL = 0
  //通过寻找maxStr之中有无当前字符，来决定如何更新maxStr并记录maxL
  for (let i = 0; i < s.length; i++) {
    //如果当前字符在maxStr中有记录
    let index = maxStr.indexOf(s[i])
    if (index != -1) {
      //从index对应s的索引的后一位开始拷贝s
      maxStr = maxStr.slice(index + 1) + s[i]
    }
    else {
      //更新maxL
      maxStr += s[i]
      maxL = maxStr.length > maxL ? maxStr.length : maxL
    }

  }
  return maxL
}

lengthOfLongestSubstring("abcabcbb")