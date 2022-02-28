/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let res = []
  //对p做映射
  let sL = s.length
  let pL = p.length
  let map = { count: pL }
  for (let char of p) {
    map[char] = char in map ? map[char] + 1 : 1
  }
  for (let i = 0; i < sL - pL + 1; i++) {
    console.log(i);
    let window = s.slice(i, i + pL)
    if (isAnagramOfp(window)) {
      res.push(i)
    }
  }
  function isAnagramOfp(window) {
    let copyMap = Object.assign({}, map)
    for (let char of window) {
      if (char in copyMap) {
        if (--copyMap[char] === 0) {
          delete copyMap[char]
        }
        copyMap.count--
      }
      else {
        return false
      }
    }
    if (copyMap.count === 0) {
      return true
    }
    return false
  }
  return res
};
console.log(findAnagrams("cbaebabacd", "abc"));