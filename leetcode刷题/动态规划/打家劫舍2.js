/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //因为不能连续偷窃，可以将结果分为不考虑头和不考虑尾两种情况，转化成两个打家劫舍1的问题，取最大值
  let res1 = rob1(nums.slice(1, nums.length))
  let res2 = rob1(nums.slice(0, nums.length - 1))
  return Math.max(res1, res2)
};
var rob1 = function (nums) {
  const len = nums.length;
  // dp数组初始化
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  // 从下标2开始遍历
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[len - 1];
};