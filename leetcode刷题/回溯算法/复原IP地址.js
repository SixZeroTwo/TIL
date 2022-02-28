/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12) {
    return []
  }
  let res = []

  back(0, '')
  //递归函数
  function back(head, path) {
    //终止条件
    if (head >= s.length) {
      //去掉开头的 .
      let a = path.slice(1)
      //判断是否满足条件
      if (a.split('.').length == 4) {
        res.push(a)
      }
      return
    }
    for (let i = head + 1; i <= s.length && i <= head + 3; i++) {
      let str = s.slice(head, i)
      if (isPartOfIP(str)) {
        back(i, path + '.' + str)
      }
    }
  }
  //辅助函数，判断字符串是否为ip地址段
  function isPartOfIP(str) {
    //如果长度>1并且第一个数为0
    if (str.length > 1 && str[0] == '0') {
      return false
    }
    if (Number(str) <= 255 && Number(str) >= 0) {
      return true
    }
    return false
  }
  return res
};