/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  //动态规划解法是从双指针解法的基础上衍生过来的，分别计算每个柱子能接水的容量再进行总和
  //定义两个dp数组leftMaxH和rightMaxH，分别代表为索引为i时左/右两边的最高柱子高度
  //leftMaxH的地推公式为：leftMaxH[i]=max(leftMaxH[i-1],height[i])
  //rightMaxH的地推公式为：rightMaxH[i]=max(rightMaxH[i+1],height[i])
  //初始化
  let len = height.length
  let leftMaxH = Array(len).fill(0)
  let rightMaxH = Array(len).fill(0)
  leftMaxH[0] = height[0]
  rightMaxH[len - 1] = height[len - 1]
  //遍历
  for (let i = 1; i < len; i++) {
    leftMaxH[i] = Math.max(leftMaxH[i - 1], height[i])
  }
  for (let i = len - 2; i >= 0; i--) {
    rightMaxH[i] = Math.max(rightMaxH[i + 1], height[i])
  }
  //计算总和，头尾的不用算
  let sum = 0
  for (let i = 1; i < len - 1; i++) {
    sum += Math.min(leftMaxH[i], rightMaxH[i]) - height[i]
  }
  return sum
};