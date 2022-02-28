var isPalindrome = function (s) {
  s = s.toLowerCase()
  //双指针法
  let p1 = 0
  let p2 = s.length - 1
  //两个都是小写字母或数字
  if (isLowerCaseOrNumber(s[p1] || isLowerCaseOrNumber(s[p2]))) {
    if (s[p1] !== s[p2]) {
      return false
    }
    else {
      p1++
      p2--
      continue
    }
  }
  //两个中有一个不为小写或数字
  if (!isLowerCaseOrNumber(s[p1])) {
    p1++
  }
  if (!isLowerCaseOrNumber(s[p2])) {
    p2--
  }

  function isLowerCaseOrNumber(char) {
    return (char <= 'z' && char >= 'a') || (char <= '9' && char >= '0')
  }
  return true
}
