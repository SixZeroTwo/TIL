/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //特殊情况
  if (!s.length) return 0
  //记录以及出现过的字符的位置
  const map = new Map
  let res = 1
  map.set(s[0], 0)
  //左右指针，指向子字符串的开始和结束位置，长度为right - left
  let left = 0
  let right = 1
  for (let i = 1; i < s.length; i++) {
    //判断是否出现过
    if (map.has(s[i]) && map.get(s[i]) + 1 > left) {
      left = map.get(s[i]) + 1
    }
    map.set(s[i], i)
    //更新长度
    right++
    res = Math.max(right - left, res)
  }
  return res
};

lengthOfLongestSubstring("abba")