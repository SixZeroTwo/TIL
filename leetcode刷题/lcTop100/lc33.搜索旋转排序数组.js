/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //暴力解法
  /*     for(let i = 0;i<nums.length;i++){
        if(nums[i]==target)return i
    }
    return -1 */
  //二分法
  //二分之后，一遍一定是有序的，另一边不一定有序，有序的一边用如果target在有序的区间内则用二分法查找，否则则到无序的一边继续二分
  //如何判断数组有序？第一个数一定<最后一个数
  //特殊情况
  let n = nums.length
  if (!n) return -1
  if (n == 1) return nums[0] == target ? 0 : -1
  let l = 0, r = n - 1, m = l + Math.floor((r - l) / 2)
  //左闭右闭区间
  while (l <= r) {
    m = l + Math.floor((r - l) / 2)
    if (nums[m] == target) return m
    //如果左边有序
    if (nums[l] <= nums[m]) {
      //如果target也在左边区间范围内，二分查找
      if (target <= nums[m] && target >= nums[l]) r = m
      else l = m + 1
    }
    //如果右边有序且target在右边，在右边二分查找
    if (nums[m] <= nums[r]) {
      if (target <= nums[r] && target >= nums[m]) l = m + 1
      else r = m
    }
  }
  return -1
};