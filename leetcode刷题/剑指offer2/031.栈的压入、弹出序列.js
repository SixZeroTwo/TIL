/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let p1 = 0
  let p2 = 0
  let stack = []
  const PUSHED_L = pushed.length
  const POPED_L = popped.length
  while (p1 < PUSHED_L || p2 < POPED_L) {
    if (!stack.length || stack[stack.length - 1] != popped[p2]) {
      if (p1 >= PUSHED_L) return false
      stack.push(pushed[p1++])
    }
    if (stack[stack.length - 1] == popped[p2]) {
      stack.pop()
      p2++
    }
  }
  return true
};