/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  //方法一：快排+索引
  nums.sort((a, b) => b - a)
  return nums[k - 1]
  //方法二：k次堆排序+索引
  heapSort(nums)
  return nums[n - 2 - k]
};