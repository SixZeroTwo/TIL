/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  //定义行和列
  let line = coins.length
  let col = amount + 1
  //dp数组初始化
  let dp = Array(col).fill(0)
  //第一个元素
  dp[0] = 1;
  //遍历
  //先遍历物品，再遍历背包容量，得到的是组合数
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[amount]
};

change(5, [1, 2, 5])