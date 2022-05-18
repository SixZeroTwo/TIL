/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let res = []
  const l = s.length
  const m = p.length
  for (let i = 0; i < l; i++) {
    if (isAnagrams(s.slice(i, i + m), p)) res.push(i)
  }
  return res
  //用异或会导致 aa^bb这样的用例通过，不能使用，还是用哈希表
  /*   function isAnagrams(a, b) {
      //用异或判断a和b是否为字母异位词
      let temp = 0
      for (let i = 0; i < a.length; i++) {
        temp ^= a[i].charCodeAt()
      }
      for (let i = 0; i < b.length; i++) {
        temp ^= b[i].charCodeAt()
      }
      return temp == 0 ? true : false
    } */

};