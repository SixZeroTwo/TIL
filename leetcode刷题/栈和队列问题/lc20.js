/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //建立映射
  const map = new Map()
  map.set(')', '(')
  map.set(']', '[')
  map.set('}', '{')
  //建立栈
  let stack = []
  //遍历s
  for (let i of s) {
    if (map.get(i) === stack[stack.length - 1] && stack.length > 0) {
      stack.pop()
    }
    else {
      stack.push(i)
    }
  }
  if (stack.length === 0) {
    return true
  }
  return false
};

