/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let res = []
  //构造used数组
  let used = []
  nums.forEach(() => used.push(0))
  //排序nums
  nums.sort()
  back(0, [], used)
  //回溯函数
  function back(startIndex, subS, used) {
    //终止条件
    if (startIndex > nums.length) {
      return

    }
    res.push([...subS])
    for (let i = startIndex; i < nums.length; i++) {
      //剪枝
      if (nums[i] == nums[i - 1] && used[i - 1] == 0) {
        continue
      }
      let b = [...used]
      let a = subS.slice()
      a.push(nums[i])
      b[i] = 1
      back(i + 1, a, [...b])
    }
  }
  return res
};
subsetsWithDup([1, 2, 2])