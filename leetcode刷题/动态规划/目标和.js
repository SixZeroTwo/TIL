/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  //递归解法
  /*   let res = 0
    visit(0, 0)
    function visit(i, sum) {
      //终止条件
      if (i == nums.length) {
        if (sum == target) {
          res++
        }
        return
      }
      visit(i + 1, sum + nums[i])
      visit(i + 1, sum - nums[i])
    }
    return res */

  //动规解法
  /*   这道题的思路和“最后一块石头的重量”的思路很像。不过递推公式有所区别，要求的是方法数而不是所谓的“最大价值”。
    将数组中的数分为两部分。设用来加的数的总和为x，则用来减掉的数的总和为sum - x。
    我们的目标是x - (sum - x) == target => x = (target + sum) / 2
  因此我们将背包容量定为x,dp代表定容量下能够填满的背包的方法数,递推公式为 dp[j]+=dp[j-nums[i]]，初始化nums[0]所在行且dp[0]=1 */
  //求出sum
  let sum = nums.reduce((prev, cur) => prev + cur, 0)
  if ((sum + target) % 2 == 1 || Math.abs(target) > sum) {
    return 0
  }

  let x = (sum + target) / 2
  //dp初始化
  let col = x + 1
  let dp = Array(col).fill(0)

  dp[0] = 1
  for (let i = 0; i < nums.length; i++) {
    for (let j = col - 1; j >= nums[i]; j--) {
      dp[j] += dp[j - nums[i]]
    }
  }
  return dp[dp.length - 1]
};