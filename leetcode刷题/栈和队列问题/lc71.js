/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  //将path按照 '/'分割
  let pathStr = path.split('/')
  let l = pathStr.length
  let stack = []
  //遍历pathStr，进行压栈或出栈操作
  pathStr.forEach(str => {
    //情况1，str为''或'.'，代表两个连续'/'或本级目录
    if (str === '' || str === '.') {
    }
    else if (str === '..') {
      if (stack.length >= 2) {
        stack.pop()
        stack.pop()
      }
    }
    else {
      stack.push('/')
      stack.push(str)
    }
  })
  //判断特殊情况
  if (stack.length === 0) {
    stack.push('/')
  }
  //将stack转为str
  let res = stack.join('')
  return res
};