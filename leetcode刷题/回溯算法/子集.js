/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = []
  back([], 0)
  function back(subS, startIndex) {
    //终止条件
    if (startIndex > nums.length) {
      return
    }
    res.push(subS)
    for (let i = startIndex; i < nums.length; i++) {
      let a = subS.slice()
      a.push(nums[i])
      back(a, i + 1)
    }
  }
  return res
};

console.log(subsets([1, 2, 3]));