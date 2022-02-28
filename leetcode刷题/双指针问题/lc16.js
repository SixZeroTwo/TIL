/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//错误方法
/* var threeSumClosest = function (nums, target) {
  //排序
  nums.sort((a, b) => a - b)

  //左 中 右 指针
  let len = nums.length
  let l = 0
  let r = len - 1
  let m = Math.ceil(l + (r - l) / 2)
  let minSum = Infinity
  //迭代，直至l,m,r相邻
  while (true) {
    //作比较，移动指针
    let sum = nums[l] + nums[m] + nums[r]
    if (Math.abs(sum - target) < Math.abs(minSum - target)) {
      minSum = nums[l] + nums[m] + nums[r]
    }
    //sum小与目标值，左指针左移逼近或中指针左移逼近
    if (sum < target) {
      if (l + 1 != m) {
        l++
      }
      else {
        m++
      }
    }
    if (sum > target) {
      if (r - 1 != m) {
        r--
      }
      else {
        m--
      }
    }
    //终止条件
    if (l + 1 === m && m + 1 === r) {
      break
    }
  }
  return minSum
}; */

var threeSumClosest = function (nums, target) {
  //排序
  nums.sort((a, b) => a - b)
  //固定一个数
  let len = nums.length
  let closedSum = Infinity
  for (let a = 0; a < len - 2; a++) {
    //双指针      
    let l = a + 1
    let r = len - 1
    while (r > l) {
      let sum = nums[a] + nums[l] + nums[r]
      if (Math.abs(sum - target) < Math.abs(closedSum - target)) {
        closedSum = sum
      }
      if (sum === target) {
        return sum
      }
      else if (sum > target) {
        r--
      }
      else {
        l++
      }
    }
  }
  return closedSum
};

threeSumClosest([-1, 2, 1, -4], 1)