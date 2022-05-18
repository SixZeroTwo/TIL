/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  //单调递减队列，存放下标，只维护当前窗口的最大值
  let dequeue = []
  let res = []
  for (let i = 0; i < nums.length; i++) {
    //先放入当前值
    while (nums[dequeue[dequeue.length - 1]] <= nums[i]) dequeue.pop()
    dequeue.push(i)
    //再判断队首需不需要弹出
    if (dequeue[0] < i - k + 1) dequeue.shift()
    //当下标>=k-1时开始放入当前最大值
    if (i >= k - 1) res.push(nums[dequeue[0]])
  }
  return res
};