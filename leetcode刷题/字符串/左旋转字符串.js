/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  let len = s.length
  //思路：整体反转+两个部分局部反转
  //转换成数组，整体反转
  s = s.split('')
  s.reverse()
  //局部反转
  swap(len - n, len - 1)
  swap(0, len - n - 1)
  function swap(l, r) {
    while (l < r) {
      let temp = s[l]
      s[l++] = s[r]
      s[r--] = temp
    }
  }
  return s.join('')
};

reverseLeftWords('abcdefg', 2)