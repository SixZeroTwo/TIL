/**
 * @param {string} s
 * @return {string}
 */
//第一次
/* var reverseWords = function (s) {
  //转换成数组
  s = s.split('')
  //去掉多余空格
  delSpaceNoNeed(s)
  function delSpaceNoNeed(arr) {
    //快慢指针
    let l = arr.length
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
}; */
//第二次
var reverseWords = function (s) {

};
console.log(reverseWords("F R  I   E    N     D      S      "));