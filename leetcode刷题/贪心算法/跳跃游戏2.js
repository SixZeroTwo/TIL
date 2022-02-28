/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  /*   //dp解法
    let len = nums.length
    //dp[i]代表索引为i的位置到达的最小步数
    let dp = Array(len).fill(Infinity)
    dp[0] = 0
    for (let i = 0; i < len; i++) {
  
      for (let j = 0; j < i; j++) {
        if (j + nums[j] >= i) {
          dp[i] = dp[j] + 1 < dp[i] ? dp[j] + 1 : dp[i]
        }
      }
  
    }
    return dp[len - 1] */
  //特殊情况
  if (nums.length == 1) return 0
  //贪心算法
  //贪的是每一步要走到最大的覆盖范围
  let curMaxP = 0//当前步数能走到的最大范围
  let nextMaxP = 0//下一步数能走到的最大范围
  let step = 0
  if (curMaxP >= nums.length - 1) return step
  //遍历nums
  for (let i = 0; i < nums.length; i++) {
    //如果当前位置>curMaxP,步数+1，且curMaxP=nextMaxP
    if (i > curMaxP) {
      step++
      curMaxP = nextMaxP
    }
    //更新nextMaxP
    nextMaxP = Math.max(nextMaxP, nums[i] + i)
  }
  return step

};

jump([1, 1, 1, 1])