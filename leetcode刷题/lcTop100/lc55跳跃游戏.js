/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  //更新最大的跳跃下标
  let end = 0
  let start = 0

  while (start <= end) {
    if (end < start + nums[start]) end = start + nums[start]
    start++
  }
  return end >= nums.length - 1 ? true : false
};