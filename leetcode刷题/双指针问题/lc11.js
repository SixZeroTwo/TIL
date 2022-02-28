/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  //定义双指针
  let l = 0
  let r = height.length - 1
  let resArea = 0
  while (l !== r) {
    let area = Math.min(height[l], height[r]) * (r - l)
    if (area > resArea) {
      resArea = area
    }
    if (height[l] <= height[r]) {
      l++
    }
    else {
      r--
    }
  }
  return resArea
};