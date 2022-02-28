
/**
* @param {number[]} nums1见你   
* @param {number[]} nums2
* @return {number[]}
*/
/* var intersect = function (nums1, nums2) {
  //查找表+-uyhj777777777777777777777777777777777777777777777777777777777777=
  let map1 = new Map()
  let map2 = new Map()
  let res = []
  //将nums1和nums2映射成表，key值为元素值，value为出现次数
  for (let i of nums1) {
    let count = map1.get(i)
    if (!count) {
      map1.set(i, 1)
    }
    else {
      map1.set(i, count + 1)
    }
  }
  for (let i of nums2) {
    let count = map2.get(i)
    if (!count) {
      map2.set(i, 1)
    }
    else {
      map2.set(i, count + 1)
    }
  }
  //遍历map1
  for (let key of map1.keys()) {
    let count1 = map1.get(key)
    let count2 = map2.get(key)
    if (count2) {
      let count = Math.min(count1, count2)
      for (let i = 0; i < count; i++) {
        res.push(key)
      }
    }
  }
  return res
};
 */
//当数组排好序时，用双指针法更优
//当nums1的数组长度小得多时，优先从小数组里面开始遍历
var intersect = function (nums1, nums2) {
  function visit(nums1, nums2) {
    let res = []
    for (let ind1 = 0, ind2 = 0; ind1 < nums1L && ind2 < nums2L;) {
      //如果小于nums2的最小值或大于nums2的最大值，跳过或跳出
      if (nums1[ind1] < min2) {
        continue
      }
      if (nums1[ind1] > max2) {
        break
      }
      //遍历第二个数组
      if (nums1[ind1] === nums2[ind2]) {
        res.push(nums1[ind1])
        ind1++
        ind2++

      }
      else if (nums1[ind1] > nums2[ind2]) {
        ind2++
      }
      else {
        ind1++
      }
    }
    return res
  }
  //两个数组的长度
  let nums1L = nums1.length
  let nums2L = nums2.length
  //取两个数组的最大最小值
  let min1 = nums1[0]
  let max1 = nums1[nums1L - 1]
  let min2 = nums2[0]
  let max2 = nums2[nums2L - 1]
  //当两个数组完全不重合时
  if (max1 < min2 || max2 < min1) {
    return []
  }
  //遍历较小的数组
  if (nums1L <= nums2L) {
    return visit(nums1, nums2)
  }
  else {
    return visit(nums2, nums1)
  }
}

console.log(intersect([1, 2, 2, 4, 5], [1, 2, 3, 4, 5, 6, 7]));