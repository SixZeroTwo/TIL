/**
 * @param {string} s
 * @return {string[][]}
 */

//思路：利用递归解决，二叉树的同一层为'剩余子串'的从头开始连续的回文子串的所有可能，同一分支拼凑起来为整个字符串
// 终止条件：head >= s.length
// 递归参数：head -- 指向剩余子串头的指针 ; path -- 当前分支的回文字符串
// 单层逻辑：从当前剩余子串的头开始判断连续的子串是否为回文子串，如果是则进入下一层递归，头指针指向当前回文子串的下一位
var partition = function (s) {
  let res = []
  //转换成数组
  s = s.split('')
  back(0, [])
  //递归函数
  function back(head, path) {
    //终止条件
    if (head >= s.length) {
      res.push([...path])
    }
    for (let i = head + 1; i <= s.length; i++) {
      let str = s.slice(head, i)
      if (isReversal(str)) {
        let a = path.slice()
        a.push(str.join(''))
        back(i, a)
      }
    }
  }
  //辅助函数，判断是否为回文串
  function isReversal(arr) {
    let left = -1
    let right = arr.length
    while (++left < --right) {
      if (arr[left] != arr[right]) {
        return false
      }
    }
    return true
  }
  return res
};