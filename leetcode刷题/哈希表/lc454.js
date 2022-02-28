/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
  //建立两个哈希表，key：value对应的是两个数组元素的和：出现的次数
  let hashMap_1 = new Map()
  let hashMap_2 = new Map()

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (hashMap_1.has(nums1[i] + nums2[j]))
        hashMap_1.set(nums1[i] + nums2[j], hashMap_1.get(nums1[i] + nums2[j]) + 1)
      else
        hashMap_1.set(nums1[i] + nums2[j], 1)
    }
  }
  for (let i = 0; i < nums3.length; i++) {
    for (let j = 0; j < nums4.length; j++) {
      if (hashMap_2.has(nums3[i] + nums4[j]))
        hashMap_2.set(nums3[i] + nums4[j], hashMap_2.get(nums3[i] + nums4[j]) + 1)
      else
        hashMap_2.set(nums3[i] + nums4[j], 1)
    }
  }
  //遍历hashMap1，寻找hashMap2中对应的值
  let res = 0
  for (let key of hashMap_1.keys()) {
    if (hashMap_2.has(-key)) res += hashMap_1.get(key) * hashMap_2.get(-key)
  }
  return res
};