/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //第一种dp解法
  /*   // 数组长度
    const len = nums.length;
    // dp数组初始化 
    const dp = [nums[0], Math.max(nums[0], nums[1])];
    // 从下标2开始遍历
    for (let i = 2; i < len; i++) {
      dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1]; */

  //第二种dp解法，二维数组，每个房子有偷或者不偷两种状态
  let dp = new Array(nums.length).fill(0).map(() => new Array(2).fill(0))
  dp[0][1] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1])
    dp[i][1] = dp[i - 1][0] + nums[i]
  }
  return Math.max(dp[nums.length - 1][0], dp[nums.length - 1][1])
};

rob([1, 2, 3, 1])