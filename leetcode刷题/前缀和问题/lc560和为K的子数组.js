/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  let count = 0
  let map = Object.create(null)//创建一个没有原型的对象，记录前缀和以及对应的出现次数
  map[0] = 1//初始的前缀和为0
  let pre = 0//当前的前缀和
  //遍历数组
  for (let i = 0; i < nums.length; i++) {
    pre += nums[i]
    if (map[pre - k]) {
      count += map[pre - k]
    }
    map[pre] = map[pre] ? map[pre] + 1 : 1
  }
  return count
};