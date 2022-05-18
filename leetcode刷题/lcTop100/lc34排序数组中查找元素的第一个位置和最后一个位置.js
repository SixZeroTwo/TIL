/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  //暴力解法
  /*   let res = [-1, -1]
    let i = 0
    let start = null
    while (i < nums.length) {
      //如果找到了:头或者尾
      if (nums[i] == target && start == null) {
        start = i
        res[0] = i
      }
      if (start != null && nums[i] == target && (nums[i + 1] != target || i == nums.length - 1)) {
        res[1] = i
      }
      i++
    }
    return res */

  //二分解法
  res = [-1, -1]

  function binarySearch(nums, target, mode) {
    let start = nums.length
    let end = -1
    let l = 0
    let r = nums.length - 1
    let m = null
    if (mode == 'left')
      while (l <= r) {
        m = l + Math.floor((r - l) / 2)
        if (target <= nums[m]) {
          if (nums[m] == target && m < start) start = m
          r = m
        }
        else {
          l = m + 1
        }
      }
    else if (mode == 'right') {
      while (l <= r) {
        m = l + Math.ceil((r - l) / 2)
        if (target >= nums[m]) {
          if (nums[m] == target && m > end) end = m
          l = m
        }
        else {
          r = m - 1
        }
      }
    }
    return mode == 'left' ? start : end
  }
  let l = binarySearch(nums, target, 'left')
  let r = binarySearch(nums, target, 'right ')
  return l == nums.length && r == -1 ? [-1, -1] : [l, r]
};