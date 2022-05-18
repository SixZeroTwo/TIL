/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var divide = function (a, b) {
  const MAX = Math.pow(2, 31)
  //特殊情况
  if (b == 0 || Math.abs(a) < Math.abs(b)) return 0
  //二分查找
  /*   let count = 0
    let res = 0
    for (; count <= Math.abs(a); res++) {
      count += Math.abs(b)
    }
    res = res - 1 */
  let left = 1
  let right = Math.abs(a)
  while (left <= right) {

  }
  //符号判断
  if ((a > 0 && b < 0) || (a < 0 && b > 0)) res = -res
  //越界判断
  if (res >= -MAX && res <= MAX - 1) return res
  else return MAX - 1
};
divide(-2147483648,
  -1)