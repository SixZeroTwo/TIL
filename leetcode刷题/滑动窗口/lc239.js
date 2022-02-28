/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  //滑动窗口的左右边界
  let l = 0
  let r = k - 1
  let numsLen = nums.length
  let res = []
  for (; r < numsLen; l++, r++) {
    //找滑动窗口的最大值
    res.push(Math.max(nums.slice(l, r + 1)))
  }
  function findMax(nums, l, r) {
    let max = -Infinity
    for (let i = l; i <= r; i++) {
      if (nums[i] > max) {
        max = nums[i]
      }
    }
    return max
  }
  return res
};
//单调队列解法
var maxSlidingWindow = function (nums, k) {
  //单调递减队列（存放下标，方便判断和取值）
  let queue = []
  let res = []
  let l = nums.length
  for (let i = 0; i < l; i++) {
    //单调队列的操作
    while (queue.length && nums[queue[queue.length - 1]] < nums[i]) {
      queue.pop()
    }
    queue.push(i)
    //判断单调队列队首元素是否应该弹出
    if (queue[0] < i - k + 1) {
      queue.shift()
    }
    //当i为k时开始取最大值放入答案数组
    if (i >= k - 1) {
      res.push(nums[queue[0]])
    }
  }
  return res
};
maxSlidingWindow([7, 2, 4], 2)
