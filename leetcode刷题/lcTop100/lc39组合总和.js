/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  //第一次做的
  /*   let res = []
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
    return res */

  //第二次做的
  let res = []
  helper([], 0, 0)
  function helper(path, sum, index) {
    //终止条件
    if (sum >= target) {
      if (sum == target) res.push([...path])
      return
    }
    //本层逻辑
    for (let i = index; i < candidates.length; i++) {
      let newPath = path.slice()
      newPath.push(candidates[i])
      helper(newPath, sum + candidates[i], i)
    }
  }
  return res
}