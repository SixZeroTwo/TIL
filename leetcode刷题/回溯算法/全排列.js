/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = []
  back([])
  function back(path) {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.indexOf(nums[i]) != -1) {
        continue
      }
      let a = path.slice()
      a.push(nums[i])
      back(a)
    }
  }
  return res
};