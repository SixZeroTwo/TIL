/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let l = nums.length
  let p1 = 0
  let p2 = 0
  while (p2 !== l) {
    if (nums[p2] !== nums[p1]) {
      p1++
      nums[p1] = nums[p2]
    }
    p2++
  }
  return p1 + 1
};