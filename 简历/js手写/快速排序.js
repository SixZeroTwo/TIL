function quick_sort(arr, start, end) {
  //终止条件
  if (start == end) return
  //这里主元选的是最左边
  let left = start
  let right = end
  let pivot = arr[left]
  let empty = left
  //当左和右不重合时
  while (left != right) {
    //判断空位在哪，左空移右
    if (empty == left) {
      //将右指针的数与主元比较，如果交换了，更新empty的指向，且l++
      if (arr[right] <= pivot) {
        arr[empty] = arr[right]
        empty = right
        left++
      }
      else right--
    }
    else {
      //将左指针的数与主元比较，如果交换了，更新empty指向，且r--
      if (arr[left] > pivot) {
        arr[empty] = arr[left]
        empty = left
        right--
      }
      else left++
    }
  }
  //left和right相遇，将pivot放到上面
  arr[left] = pivot
  //递归调用
  quick_sort(arr, start, left)
  quick_sort(arr, left + 1, end)
}

const quickSort = function (arr) {
  quick_sort(arr, 0, arr.length - 1)
  return arr
}

console.log(quickSort([19, 97, 9, 17, 1, 8]))


//二分查找（左闭右闭区间）
function bin(nums, target) {
  //定义左右区间
  let left = 0
  let right = nums.length - 1
  let mid = Math.floor(left + (right - left) / 2)
  while (left <= right) {
    if (nums[mid] == target) return mid
    else if (nums[mid] > target) right = mid
    else if (nums[mid] < target) left = mid + 1
  }
  return -1
}