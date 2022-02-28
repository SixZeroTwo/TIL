/* 我们可以将问题简化为两堆石块的重量之差即为最后一块石头的重量。
由于背包问题是定背包容量，求最大价值。
套到这题，我们将背包容量定为 Math.ceil(sum / 2)，价值数组和重量数组都是石头的重量。
通过动态规划，可以求出石块重量之和上限为 Math.ceil(sum / 2)下的最大石块重量之和。
这样我们就可以求出两堆石块其中的一堆石块的重量之和x，通过sum - x求得另外一堆石块的重量y，abs(x - y)即为最后的答案。 */

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeightII = function (stones) {
  //求出sum
  let sum = stones.reduce((prev, cur) => prev + cur, 0)
  //dp初始化
  let col = Math.ceil(sum / 2) + 1
  let dp = Array(col).fill(0)
  for (let i = 0; i < col; i++) {
    if (i > stones[0]) {
      dp[i] = stones[0]
    }
  }
  for (let i = 1; i < stones.length; i++) {
    for (let j = col - 1; j >= stones[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i])
    }
  }
  return Math.abs(2 * dp[col - 1] - sum)
};