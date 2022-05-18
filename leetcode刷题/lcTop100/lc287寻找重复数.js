/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  //错误解法：没有考虑重复的数出现两次以上的情况
  /*   //将nums分半累加，小的那一部分的累加量是 num-1-n，分奇偶
    let n = nums.length - 1
    let sum = n % 2 ? -Math.ceil(n / 2) : 0
    for (let num of nums) {
      //如果是小半区的数
      if (num <= Math.floor(n / 2)) sum += num - 1 - n
      else sum += num
    }
    return sum < 0 ? sum + n + 1 : sum */
};