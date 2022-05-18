/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function (s) {
  let res = new Set()
  let minDel = Infinity
  dfs('', 0, 0)
  return Array.from(res)
  function dfs(path, index, delet) {
    //终止条件
    if (index == s.length) {
      if (delet < minDel) {
        //判断合法性，如果是合法的，则新开创一个集合
        if (isLegal(path)) {
          res = new Set()
          res.add(path)
          minDel = delet
        }
      }
      else if (delet == minDel) {
        if (isLegal(path)) res.add(path)
      }
      return
    }
    //本层，如果是括号，加或者不加
    if (s[index] == '(' || s[index] == ')') {
      dfs(path, index + 1, delet + 1)
      dfs(path + s[index], index + 1, delet)
    }
    else dfs(path + s[index], index + 1, delet)
  }
  function isLegal(chars) {
    let stack = []
    for (let char of chars) {
      if (char == '(') stack.push(char)
      else if (char == ')') {
        if (stack[stack.length - 1] == '(') stack.pop()
        else return false
      }
    }
    return stack.length ? false : true
  }
};