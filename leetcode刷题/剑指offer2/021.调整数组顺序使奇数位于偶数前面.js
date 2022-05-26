/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  //额外空间O(N)的解法
  /*   let res = []
    nums.forEach(num => {
      if (num % 2) res.unshift(num)
      else res.push(num)
    })
    return res */

  //原地解法
  const len = nums.length
  for (let i = 0, j = len - 1; i < j; i++) {
    //当前数如果为偶数，与后面的奇数进行交换
    if (!(nums[i] % 2)) {
      while (!(nums[j] % 2) && j >= 0) j--
      if (i < j) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
  }
  return nums
};