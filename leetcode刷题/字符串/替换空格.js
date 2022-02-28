/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  const Arr = Array.from(s)
  //计算字符串中的空格数
  let count = 0
  Arr.forEach(v => {
    if (v == ' ') {
      count++
    }
  })
  //原地操作，left指向原数组的尾部，right指向扩容后数组的尾部
  let left = Arr.length - 1
  let right = left + 2 * count
  while (left < right) {
    if (Arr[left] == ' ') {
      Arr[right--] = '0'
      Arr[right--] = '2'
      Arr[right--] = '%'
      left--
    }
    else {
      Arr[right--] = Arr[left--]
    }
  }
  return Arr.join('')
};