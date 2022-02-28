/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  //双指针，ps是慢指针，pt快指针
  let ps = 0
  let pt = 0
  let sL = s.length
  let tL = t.length
  //特殊情况
  if (sL === 0) {
    return true
  }
  //
  while (pt < tL) {
    if (s[ps] === t[pt]) {
      ps++
    }
    if (ps === sL) {
      return true
    }
    pt++
  }
  return false
};