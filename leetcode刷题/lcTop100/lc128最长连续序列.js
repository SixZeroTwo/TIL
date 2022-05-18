/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  //特殊情况
  if (!nums.length) return 0
  //哈希表
  let hashMap = {}
  nums.forEach(val => hashMap[val] = 1)
  //遍历nums
  let maxL = 1
  for (let i = 0; i < nums.length; i++) {
    let len = 1
    let val = nums[i]
    //去重
    if (hashMap[val - 1]) continue
    //计数
    while (hashMap[val + 1] == 1) {
      val++
      len++
    }
    maxL = Math.max(len, maxL)
  }
  return maxL
};
longestConsecutive([100, 4, 200, 1, 3, 2])