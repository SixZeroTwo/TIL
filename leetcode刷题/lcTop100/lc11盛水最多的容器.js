/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //双指针结合贪心算法，更新最大面积
  let r = height.length - 1
  let l = 0
  let max = 0
  while (r > l) {
    let cur = Math.min(height[l], height[r]) * (r - l)
    max = cur > max ? cur : max
    if (height[l] <= height[r]) {
      l++
    }
    else {
      r--
    }
  }
  return max
};