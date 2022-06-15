//思路：将数组一分为二，两个部分都变为有序，利用双指针将两个部分的数按大小依次放入新数组
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
    if (p1Val < p2Val) {
      res.push(p1Val)
      p1++
    }
    else {
      res.push(p2Val)
      p2++
    }
  }
  return res
}

a = [-1, 2, -4, 3, 1, 5, 0.4]
console.log(mergeSort(a));