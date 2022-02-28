/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  //构造dp数组，dp[i][j]代表nums1索引为i-1、nums2索引为j-1时的最大重复子串长度
  let dp = Array(nums1.length + 1).fill(Array(nums2.length + 1).fill(0))
  //遍历
  let maxL = 0
  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums1.length; j++) {
      if (nums1[i - 1] == nums2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1
        maxL = dp[i][j] > maxL ? dp[i][j] : maxL
      }
    }
  }
  return maxL
};