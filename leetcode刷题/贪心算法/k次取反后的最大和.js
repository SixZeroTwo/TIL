/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
  //排序数组（从小到大）
  nums.sort((a, b) => {
    return a - b
  })
  //记录负数个数
  let negNum = 0
  nums.forEach(value => {
    if (value < 0) negNum++
  })
  //如果k小与等于negNum
  if (k < negNum) {
    for (let i = 0; i < k; i++) {
      nums[i] = -nums[i]
    }
    return nums.reduce((prev, cur) => prev += cur, 0)
  }
  else {
    //对所有负数取反
    for (let i = 0; i < negNum; i++) {
      nums[i] = -nums[i]
    }
    if ((k - negNum) % 2 == 0) {
      return nums.reduce((prev, cur) => prev += cur, 0)
    }
    else {
      nums.sort((a, b) => {
        return a - b
      })
      nums[0] = -nums[0]
      return nums.reduce((prev, cur) => prev += cur, 0)
    }
  }
};

largestSumAfterKNegations([2, -3, -1, 5, -4]
  , 2)