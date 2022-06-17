/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //查找规则：如果nums[mid]==mid，则缺失的数的大小在[mid+1,right]
  //如果nums[mid]>mid，则缺失的数的范围在[left,mid]
  //特列
  /* if (nums.length == 1 && nums[0] == 0) return 1
  if (nums.length == 1 && nums[0] == 1) return 0 */
  let left = 0
  let right = nums.length - 1
  let mid = null
  while (left <= right) {
    if (left == mid && nums[left] != left) break
    mid = left + Math.floor((right - left) / 2)
    if (nums[mid] == mid) left = mid + 1
    else if (nums[mid] > mid) right = mid
  }
  return left
};

missingNumber([0])