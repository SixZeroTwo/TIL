/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  //算数栈
  let countStack = []
  //算数映射
  const map = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b,
  }
  //遍历tokens
  for (let token of tokens) {
    if (token === '+' || token === '-' || token === '*' || token === '/') {
      let b = parseInt(countStack.pop())
      let a = parseInt(countStack.pop())
      let res = map[token](a, b)
      countStack.push(parseInt(res))
    }
    else {
      countStack.push(token)
    }
  }
  return countStack[0]
};

evalRPN(["2", "1", "+", "3", "*"])