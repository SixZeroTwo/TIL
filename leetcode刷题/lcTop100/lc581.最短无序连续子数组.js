/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function (nums) {
  //把nums分成三段 A B C，A和C都是升序的，B是中间乱序的
  //定义max min记录之前/之后区间的最大/最小值
  let min = Infinity
  let max = -Infinity
  let begin = 0
  let end = 0//开始和结束的标志
  for (let i = 0; i < nums.length; i++) {
    //当nums[i]<max时，说明是前后是降序的，更新end，否则就更新维护最大值，这样保证更新的最后一个end就是B段的最后一个索引(nums[i]<max)
    if (nums[i] < max) end = i
    else max = nums[i]
    if (nums[nums.length - i - 1] > min) begin = nums.length - i - 1
    else min = nums[nums.length - i - 1]
  }
  return end - begin + 1
};
