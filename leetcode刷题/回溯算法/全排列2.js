/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = []
  nums.sort()
  used = []
  nums.forEach(() => used.push(0))
  back([], used)
  function back(path, used) {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      //剪枝操作
      //同一层去重
      if (nums[i - 1] == nums[i] && used[i - 1] == 0) {
        continue
      }
      //同一树枝去重
      if (used[i] == 1) {
        continue
      }
      let a = path.slice()
      a.push(nums[i])
      let b = [...used]
      b[i] = 1
      back(a, b)
    }
  }
  return res
};