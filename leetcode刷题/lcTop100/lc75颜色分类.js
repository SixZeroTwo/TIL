/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  //思路1：快排
  //思路2：遍历两遍，把0放左边，2放右边
  //思路3：双指针遍历一遍
  let n = nums.length;
  // p0确保前面位置的元素都是0
  let p0 = 0,
    // p2确保后面位置的元素都是2
    p2 = n - 1;
  // 为什么退出的时候是<=p2，因为p2指针后面的元素都是2了，但并不是p2指向的这个位置也是2，所以是<=
  /* 举例来说 [2,0,1] ，经过一次交换变成了[1,0,2]，这时p2指向0元素，如果就此就退出循环，那就还是无序的*/
  for (let i = 0; i <= p2; i++) {
    // 把前面的2全部都交换到后面去
    while (i <= p2 && nums[i] == 2) {
      [nums[i], nums[p2]] = [nums[p2], nums[i]];
      p2--;
    }
    // p0记住前面有多少个0，并确保p0前面的元素都是0
    if (nums[i] == 0) {
      [nums[i], nums[p0]] = [nums[p0], nums[i]];
      p0++;
    }
  }
};

