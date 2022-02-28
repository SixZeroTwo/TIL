/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  let res = []
  candidates.sort()
  let used = []
  candidates.forEach(() => {
    used.push(0)
  })
  helper([], target, 0, used)
  function helper(path, target, startIndex, used) {
    //终止条件
    if (startIndex > candidates.length) {
      return
    }

    if (target <= 0) {
      if (target == 0) {
        res.push([...path])
      }
      return
    }
    for (let i = startIndex; i < candidates.length; i++) {
      //剪枝操作
      if (candidates[i] == candidates[i - 1] && used[i - 1] == 0) {
        continue
      }
      let a = path.slice()
      a.push(candidates[i])
      let b = used.slice()
      b[i] = 1
      helper(a, target - candidates[i], i + 1, b)
    }
  }
  return res
}
combinationSum2([10, 1, 2, 7, 6, 1, 5]
  , 8)