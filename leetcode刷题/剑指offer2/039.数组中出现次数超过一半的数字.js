/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let maj = nums[0]
  let count = 1
  for (let i = 1; i < nums.length; i++) {
    if (maj != nums[i]) {
      if (--count <= 0) {
        count = 1
        maj = nums[i]
      }
    }
    else count++
  }
  return maj
};

majorityElement([3, 3, 4])