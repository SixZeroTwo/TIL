/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  //首先求出sum
  let sum = nums.reduce((prev, cur) => prev + cur, 0)
  //如果sum为奇数，返回false
  if (sum % 2) return false
  //dp数组定义：行代表数组中下标为i的数，列代表背包容量，最大为sum/2
  let dp = Array(sum / 2 + 1).fill(0)
  //dp初始化
  for (let i = 1; i < sum / 2 + 1; i++) {
    if (nums[0] <= i) {
      dp[i] = nums[0]
    }
  }
  //dp遍历，一定要倒序遍历，因为0-1背包一个物品只能拿一次
  for (let i = 1; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {

      dp[j] = Math.max(dp[j - nums[i]] + nums[i], dp[j])

    }
  }
  if (dp[dp.length - 1] != sum / 2) {
    return false
  }
  return true

};

console.log(canPartition([1, 2, 5]));