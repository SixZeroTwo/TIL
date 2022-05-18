/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  //判断两个单词是否为字母异位词

  function isAnagrams(a, b) {
    let aL = a.length
    let bL = b.length
    if (aL != bL) return false
    let map = {}
    //建立map
    for (let i = 0; i < aL; i++) {
      map[a[i]] = map[a[i]] == undefined ? 1 : map[i]++
    }
    //确认是否为字母异位词
    for (let i = 0; i < bL; i++) {
      //map[i]不存在或者为负值则返回false
      if (map[b[i]] == undefined) return false
      map[b[i]] -= 1
      if (map[b[i]] < 0) return false
    }
    return true
  }
  let res = []
  //建立映射，查询字符是否被用过
  let strMap = new Array(strs.length).fill(0)
  for (let i = 0; i < strs.length; i++) {
    //判断当前是否被用过
    if (strMap[i]) continue
    strMap[i] = 1
    let angrams = [strs[i]]
    //比较之后的是否为异位词
    for (let j = i + 1; j < strs.length; j++) {
      if (isAnagrams(strs[i], strs[j])) {
        strMap[j] = 1
        angrams.push(strs[j])
      }
    }
    //放入结果数组
    res.push(angrams)
  }
  return res
};


console.log(isAnagrams('cba', 'abc'))