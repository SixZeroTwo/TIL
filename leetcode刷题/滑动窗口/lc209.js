/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  //定义窗口左右指针
  let l = r = 0
  let sum = 0
  let numsL = nums.length
  let minL = numsL + 1
  while (r < numsL) {
    sum += nums[r]
    r++
    //判断sum和target大小关系
    while (sum >= target) {
      if (r - l < minL) {
        minL = r - l
      }
      sum -= nums[l]
      l++
    }

  }
  return minL == numsL + 1 ? 0 : minL
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));