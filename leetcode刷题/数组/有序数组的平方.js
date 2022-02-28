/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  //暴力解法，先排序再映射
  //return nums.sort((a, b) => Math.abs(a) - Math.abs(b)).map(value => Math.pow(value, 2))


  //双指针解法
  //因为原数组是递增的，平方后的最大值出现在数组两端，因此两个指针分别指向头尾，比较大的那个逆序放入新数组
  let n = nums.length;
  let res = new Array(n).fill(0);
  let i = 0, j = n - 1, k = n - 1;
  while (i <= j) {
    let left = nums[i] * nums[i],
      right = nums[j] * nums[j];
    if (left < right) {
      res[k--] = right;
      j--;
    } else {
      res[k--] = left;
      i++;
    }
  }
  return res;
};