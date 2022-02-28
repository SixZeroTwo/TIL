/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
  //贪心解法，局部最优（删除上坡和下坡中间的值，相等的情况也要删除）
  let res = nums.length
  //构造差值数组
  let diff = []
  for (let i = 1; i < nums.length; i++) {
    diff.push(nums[i] - nums[i - 1])
  }
  let preDiff = 0
  for (let i = 0; i < diff.length; i++) {
    //判断是否要将res-1
    if ((preDiff >= 0 && diff[i] < 0) || (preDiff <= 0 && diff[i] > 0)) {
      preDiff = diff[i]
    }
    else {
      res--
    }
  }
  return res
};