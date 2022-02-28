/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  //初始化   
  let dp = Array(target + 1).fill(0)
  dp[0] = 1
  //求排列个数，先遍历背包容量，再遍历物品
  for (let j = 0; j <= target; j++) {
    for (let i = 0; i < nums.length; i++) {
      if (j >= nums[i]) dp[j] += dp[j - nums[i]]
    }
  }
};