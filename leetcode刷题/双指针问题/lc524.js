/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
  let target = ''
  //循环dictionary的每个字符
  let sL = s.length
  for (let char of dictionary) {
    //char的长度
    let charL = char.length
    //双指针
    let pSlow = 0
    let pFast = 0
    //快指针
    while (pFast < sL) {
      if (char[pSlow] === s[pFast]) {
        pSlow++
      }
      if (pSlow === charL) {
        //字符串匹配完成
        if (char.length > target.length ||
          (char.length === target.length &&
            char < target)) {
          target = char
        }
      }
      pFast++
    }
  }
  return target
};

let a = "abpcplea"
let b = ["ale", "apple", "monkey", "plea", 'abc']
findLongestWord(a, b)
let c = b.sort((a, b) => {
  if (a.length < b.length || (a.length === b.length && a > b)) {
    return 1
  }
  return -1
})
console.log(c)