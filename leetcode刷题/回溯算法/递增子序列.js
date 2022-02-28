/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//思路：去重逻辑稍微有差别，我们还是要检测是否有同一层的相同元素,不用used数组，用对象找当前层的i之前有没有相同数字
var findSubsequences = function (nums) {
  let res = []

  back(0, [])
  //回溯函数
  function back(startIndex, subS, set) {
    //终止条件
    if (startIndex > nums.length) {
      return
    }
    if (subS.length > 1) {
      res.push([...subS])
    }
    //剩余子串
    let uset = {};
    for (let i = startIndex; i < nums.length; i++) {
      //剪枝逻辑
      if (uset[nums[i]] == true) {
        continue
      }
      if (!subS.length) {

        let a = subS.slice()
        a.push(nums[i])
        uset[nums[i]] = true
        back(i + 1, a)
      }
      if (subS[subS.length - 1] <= nums[i]) {

        let a = subS.slice()
        a.push(nums[i])
        uset[nums[i]] = true
        back(i + 1, a,)
      }

    }
  }
  return res
};

console.log(findSubsequences([4, 6, 7, 7]));