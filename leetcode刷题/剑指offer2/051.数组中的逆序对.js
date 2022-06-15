/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function (nums) {
  if (!nums.length) return 0
  let count = 0
  mergeSort(nums)
  return count
  //思路：归并排序时，在右指针移动时统计左边数组比它大的数的数量
  function mergeSort(arr) {
    //终止条件
    if (arr.length == 1) return arr
    let left = 0
    let right = arr.length - 1
    //二分递归
    let mid = left + Math.floor((right - left) / 2)
    let leftArr = mergeSort(arr.slice(left, mid + 1))
    let rightArr = mergeSort(arr.slice(mid + 1, right + 1))
    //对两部分重新组合
    const res = []
    let p1 = 0, p2 = 0
    while (p1 < leftArr.length || p2 < rightArr.length) {
      const p1Val = leftArr[p1] == undefined ? Infinity : leftArr[p1]
      const p2Val = rightArr[p2] == undefined ? Infinity : rightArr[p2]
      if (p1Val <= p2Val) {
        res.push(p1Val)
        p1++
      }
      //在这里改变代码
      else {
        count += (leftArr.length - p1)
        res.push(p2Val)
        p2++
      }
    }
    return res
  }
};


