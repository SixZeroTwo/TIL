/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  /*
//转换成数组
s = s.split('')
//去掉多余空格
delSpaceNoNeed(s)
function delSpaceNoNeed(arr) {
  //快慢指针
  let l = arr.length-
  let fast = 0, slow = 0
  while (fast < l) {
    // 移除开始和重复空格
    if ((fast === 0 && arr[fast] == ' ') || (arr[fast] == ' ' && arr[fast - 1] == ' ')) {
      fast++
    }
    else {
      arr[slow++] = arr[fast++]
    }
  }
  //移除最后位置的空格
  arr.length = arr[slow - 1] == ' ' ? slow - 1 : slow
}

//反转整个字符串之后对每个单词进行反转
s.reverse()
reverseEveryWord(s)
function reverseEveryWord(arr) {
  let l = arr.length
  //双指针
  let left = 0
  let right = 0
  while (right < l) {
    if (right == l - 1 || arr[right + 1] == ' ') {
      reverseSingleWord(left, right)
      left = right + 2
      right = left
    }
    else {
      right++
    }
  }
  function reverseSingleWord(left, right) {
    while (left < right) {
      swap(left++, right--)
      function swap(L, R) {
        let temp = arr[L]
        arr[L] = arr[R]
        arr[R] = temp
      }
    }
  }
}

return s.join('')
*/
  let arr = s.split(' ')
  //去除arr中的空格元素和空元素
  let new_arr = []
  arr.forEach(value => {
    if (value !== ' ' && value !== '') new_arr.push(value)
  })
  let res = ''
  for (let i = new_arr.length - 1; i >= 0; i--) {
    res += new_arr[i] + ' '
  }
  //去除最后的空格
  return res.slice(0, res.length - 1)
};

reverseWords("  hello world  ")