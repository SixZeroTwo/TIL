/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let res = []
  //遍历s，标记每个字母最后出现位置的下标
  let map = {}
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = i
  }
  //利用两个指针start和end维护当前区间的起止位置
  let start = 0
  let end = 0
  let len = 0
  //再次遍历s，没遍历到一个字母，更新end = Math.max(end,map[s[i]])
  //如果当前i==end，则说明当前区间已经结束，将当前区间长度push到res数组，并更新len为0
  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, map[s[i]])
    len++
    if (i == end) {
      res.push(len)
      len = 0
    }
  }
  return res
};