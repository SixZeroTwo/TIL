/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  //定义两个dp数组，一个代表左边的乘积，一个代表右边的乘积
  let dp_1 = new Array(nums.length).fill(1)
  let dp_2 = new Array(nums.length).fill(1)

  for (let i = 1; i < nums.length; i++) {
    dp_1[i] = dp_1[i - 1] * nums[i - 1]
  }
  for (let i = nums.length - 2; i >= 0; i--) {
    dp_2[i] = dp_2[i + 1] * nums[i + 1]
  }
  return nums.map((value, index) => dp_1[index] * dp_2[index])
};
productExceptSelf([1, 2, 3, 4])