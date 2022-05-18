/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  //前缀表
  let res = 0
  const map = new Map
  map.set(0, 1)
  let sum = 0
  nums.forEach(value => {
    //更新前缀和
    sum += value
    //查表
    res += map.get(sum - k) || 0
    //放入
    map.set(sum, (map.get(sum) || 0) + 1)
  })
  return res
};