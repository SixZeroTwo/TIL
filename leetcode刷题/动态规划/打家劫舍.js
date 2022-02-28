/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  //这个解法考虑到了前三个元素，不够简单，只要考虑前两个元素就够了
  /*   
    if (nums.length ==1) {
    return nums[0]
  }
    if (nums.length ==1) {
    return Math.max( nums[0],nums[1])
  }
    let dp = []
    dp = [0, nums[0], nums[1]]
    for (let i = 3; i <= nums.length; i++) {
      dp.push(Math.max(dp[i - 2], dp[i - 3]) + nums[i - 1])
    }
    return Math.max(dp[dp.length - 1], dp[dp.length - 2]) */
  // 数组长度
  const len = nums.length;
  // dp数组初始化
  const dp = [nums[0], Math.max(nums[0], nums[1])];
  // 从下标2开始遍历
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }
  return dp[len - 1];
};