/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  /*   // 暴力解法，时间复杂度O(m*n)
    let len1 = nums1.length
    let len2 = nums2.length
    let res = Array(len1).fill(-1)
    // 取出nums1的数对nums2的数做比较
    for (let i = 0; i < len1; i++) {
      let max = null
      let j = 0
      while (j < len2) {
        if (max != null && nums2[j] > nums1[i]) {
          res[i] = nums2[j]
          break
        }
        if (nums2[j] == nums1[i]) {
          max = nums1[i]
        }
        j++
      }
    }
    return res
   */
  //单调栈解法，时间复杂度为O(n)
  let res = Array(nums1.length).fill(-1)
  //首先建立nums2的下一个更大元素的值的映射
  let map = new Map()
  //单调递减栈
  let stack = [0]
  for (let i = 0; i < nums2.length; i++) {

    while (stack.length && nums2[i] > nums2[stack[stack.length - 1]]) {
      //
      let id = stack.pop()
      map.set(nums2[id], nums2[i])
    }


    stack.push(i)

  }
  //对nums1的每个元素，找到nums2对应的元素的下一个最大元素的值的映射
  for (let j = 0; j < nums1.length; j++) {
    if (map.has(nums1[j])) {
      res[j] = map.get(nums1[j])
    }

  }
  return res
};

nextGreaterElement([4, 1, 2]
  , [1, 3, 4, 2])