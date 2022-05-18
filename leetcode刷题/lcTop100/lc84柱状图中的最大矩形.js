/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  //错误解法，贪心
  /*  //从最左边开始走,r-l+1确定当前矩形区域宽度，min确定当前区域高度
   let l = 0
   let r = 0
   let min = heights[0]
   let max = 0
   for (; r < heights.length; r++) {
     //更新min
     min = heights[r] < min ? heights[r] : min
     //当前区域的面积
     let area = min * (r - l + 1)
     if (area <= heights[r]) {
       area = heights[r]
       l = r
       min = heights[r]
     }
     //更新最大面积
     max = area > max ? area : max
   }
   return max */

  //暴力解法，固定高度，求最长底边
  /*   let maxArea = 0
    for (let i = 0; i < heights.length; i++) {
      //往左右两边找，直到碰到比当前高度低的
      let l, r = i
      let height = heights[i]
      //左
      while (l > 0 && nums[l - 1] >= height) l--
      //右
      while (r < heights.length - 1 && nums[r + 1] >= height) r++
      //计算面积
      maxArea = Math.max(height * (r - l + 1), maxArea)
    }
    return maxArea */

  //优化：单调栈解法
  //思路：重点在于：定高度，确定最大宽。
  //建立从左到右递增的单调栈，正因为是单调栈，因此如果碰到比栈顶元素更大的元素，推入栈内，此时仍无法确定栈内元素的定高度下的最大面积。
  //但如果遇到了比栈顶元素小的数，此时可以一个个将栈顶元素为高度的矩形面积确定。直到栈顶元素小与当前元素，此时栈又变成了单调栈。
  //单调栈的优化解法：在数组最前和最后放入高度为0的柱子，栈内放入的是索引
  heights.push(0)
  heights.unshift(0)
  let maxArea = 0
  let stack = [0]
  //依次放入索引
  for (let i = 1; i < heights.length; i++) {
    //判断与栈顶元素的大小关系
    while (heights[i] < heights[stack[stack.length - 1]]) {
      //弹出元素
      let index = stack.pop()
      //确认弹出元素的高度下的最大面积 
      maxArea = Math.max(maxArea, heights[index] * (i - stack[stack.length - 1] - 1))

    }
    //放入当前元素 
    stack.push(i)
  }
  return maxArea
};
largestRectangleArea([1])