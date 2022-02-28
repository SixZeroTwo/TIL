/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = []
  helper([], target, 0)
  function helper(path, target, startIndex) {
    //终止条件
    if (target <= 0) {
      if (target == 0) {
        res.push([...path])
      }
      return
    }
    for (let i = startIndex; i < candidates.length; i++) {
      let a = path.slice()
      a.push(candidates[i])
      helper(a, target - candidates[i], i)
    }
  }
  return res
}

console.log(combinationSum([2, 3, 6, 7]
  , 7));