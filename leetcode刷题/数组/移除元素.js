/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  //暴力解法
  /*   let res = nums.length
    nums.forEach(value => {
      if (value == val) res--
    })
    //从头遍历nums
    for (let i = 0; i < res; i++) {
      if (nums[i] != val) continue
      let j = nums.length
      while (--j >= res) {
        if (nums[j] != val) {
          swap(i, j)
          break
        }
      }
    }
    return res
    function swap(index1, index2) {
      let temp = nums[index1]
      nums[index1] = nums[index2]
      nums[index2] = temp
    } */

  //双指针法
  /*   let res = nums.length
    nums.forEach(value => {
      if (value == val) res--
    })
  
    //第一个指针在左边新数组的长度区间内寻找，第二个指针在右边放目标值的区间内寻找
    let p1 = 0
    let p2 = nums.length - 1
    while (p1 < res && p2 >= res) {
      if (nums[p1] == val) {
        if (nums[p2] != val) swap(p1, p2)
        //更新p2
        else {
          while (nums[--p2] == val) { }
          swap(p1, p2)
        }
      }
      p1++
    }
    function swap(index1, index2) {
      let temp = nums[index1]
      nums[index1] = nums[index2]
      nums[index2] = temp
    }
    return res */
  //时间复杂度：O(n)
  //空间复杂度：O(1)

};
//这个双指针法思想更优，把所有不等于目标值的元素往前放
var removeElement = (nums, val) => {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[k++] = nums[i]
    }
  }
  return k;
};