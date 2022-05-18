/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  //原地修改
  const n = nums.length
  for (let num of nums) {
    let index = (num - 1) % n
    nums[index] += n
  }
  let res = []
  for (let i = 0; i < n; i++) {
    if (nums[i] <= n) res.push(i + 1)
  }
  return res
};