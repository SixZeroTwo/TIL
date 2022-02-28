/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  l = nums.length
  //双指针，p1遍历数组，p2指向非零元素
  let p1 = 0
  let p2 = 0
  while (p1 < l) {
    //移动p2到下一个非0元素
    while (nums[p2] === 0) {
      p2++
    }
    //p2边界判断，p2>=l时所有非零元素已经放置完成
    if (p2 >= l) {
      nums[p1] = 0
      p1++
    }
    else {
      if (p1 !== p2) {
        swap(p1, p2)
      }
      //交换完成,各自+1
      p1++
      p2++
    }

  }
  function swap(i, j) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
};