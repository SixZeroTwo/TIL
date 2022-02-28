/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
//第一次
/* var reverseStr = function (s, k) {

  let l = s.length
  s = s.split('')
  for (let i = 0; i < l; i += 2 * k) {
    //这部分交换数组中的k个元素
    let left = i
    let right = s[left + k - 1] == undefined ? l - 1 : left + k - 1
    while (left < right) {
      [s[left], s[right]] = [s[right], s[left]]
      left++
      right--
    }
  }
} */
//第二次
var reverseStr = function (s, k) {
  //首先将s变为数组
  let arr = s.split('')
  let i = 0
  while (i < arr.length) {
    let l = i
    let r = i + k > arr.length ? arr.length - 1 : i + k - 1
    while (l < r) {
      let temp = arr[l]
      arr[l] = arr[r]
      arr[r] = temp
      l++
      r--
    }
    i += 2 * k
  }
  return arr.join('')
}


let s = "abcd", k = 2
reverseStr(s, k)
console.log(s);