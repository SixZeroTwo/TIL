/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
/*   let res = []
  back([], 1)
  function back(stack, startIndex) {
    //终止条件，层数到底
    if (stack.length === k) {
      res.push([...stack])
      return
    }
    //循环
    for (let i = startIndex; i < n - k + stack.length + 1; i++) {
      let a = stack.slice()
      a.push[i]
      back(a, i + 1)
    }
  }
  return res */
let result = []
let path = []
var combine = function (n, k) {
  result = []
  combineHelper(n, k, 1)
  return result
};
const combineHelper = (n, k, startIndex) => {
  if (path.length === k) {
    result.push([...path])
    return
  }
  for (let i = startIndex; i <= n - (k - path.length) + 1; ++i) {
    path.push(i)
    combineHelper(n, k, i + 1)
    path.pop()
  }
}


console.log(combine(4, 2));

