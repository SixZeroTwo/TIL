/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //两次二分查找找出数字的左右边界
  let l = binarySearch_1(nums, 0, nums.length - 1)
  let r = binarySearch_2(nums, 0, nums.length - 1)
  //判断l和r是否满足条件
  if (nums[l] == target && nums[r] == target) return r - l + 1
  else return 0
  //找左边界
  function binarySearch_1(nums, left, right) {
    //终止条件
    if (left == right) return left
    //左闭右闭区间
    //往下取整
    let mid = Math.floor(left + (right - left) / 2)
    //判断
    if (target <= nums[mid]) {
      return binarySearch_1(nums, left, mid)
    }
    else {
      return binarySearch_1(nums, mid + 1, right)
    }
  }
  //找右边界
  function binarySearch_2(nums, left, right) {
    //终止条件
    if (left == right) return left
    //左闭右闭区间
    //往上取整
    let mid = Math.ceil(left + (right - left) / 2)
    //判断
    if (target >= nums[mid]) {
      return binarySearch_2(nums, mid, right)
    }
    else {
      return binarySearch_2(nums, left, mid - 1)
    }
  }
};

search([5, 7, 7, 8, 8, 10]
  , 8)