/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  //双指针解法会超时
  //双指针解法：单独计算每一列的雨水容积，再总和：
  /*   //每一列雨水容积的计算：左边最高的列和右边最高的列的最小值-当前列的高度
    //for循环里面嵌套两个for循环，找到该列左边和右边的最高列，计算当前列的容积
    let sum = 0
    for (let i = 0; i < height.length; i++) {
      //第一列和最后一列接不到雨水
      if (i == 0 || i == height.length - 1) continue
      //计算该列左边的最高列
      let leftH = 0, rightH = 0
      for (let l = i - 1; i >= 0; l--) {
        leftH = height[l] > leftH ? height[l] : leftH
      }
      for (let r = i + 1; i < height.length; r++) {
        rightH = height[r] > rightH ? height[r] : rightH
      }
      //计算当前列的雨水容积
      sum += Math.min(leftH, rightH) - height[i]
    }
    return sum */

  //动态规划
  //定义两个dp数组，一个记录下标为i的列左边的最高列，一个记录右边的最高列
  let dp_l = [0]
  let dp_r = [0]
  //dp_l的公式是dp_l[i]=Math.max(dp_l[i-1],height[i-1])
  for (let i = 1; i < height.length; i++) {
    dp_l.push(Math.max(dp_l[i - 1], height[i - 1]))
  }
  //dp_r的公式是dp_r[i]=Math.max(dp_r[i+1],height[i+1])
  for (let i = height.length - 2; i >= 0; i--) {
    dp_r.unshift(Math.max(dp_r[0], height[i + 1]))
  }

  //计算和
  let sum = 0
  for (let i = 1; i < height.length - 1; i++) {
    let gap = Math.min(dp_l[i], dp_r[i]) - height[i]
    sum += gap > 0 ? gap : 0
  }
  return sum
};

trap(
  [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])