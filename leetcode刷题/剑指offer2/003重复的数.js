/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  //原地哈希
  const l = nums.length
  for (let i = 0; i < l; i++) {
    while (nums[i] != i) {
      let temp = nums[i]
      if (nums[temp] == temp) return temp
      swap(i, temp)
    }
  }
  function swap(a, b) {
    [nums[a], nums[b]] = [nums[b], nums[a]]
  }
};

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));