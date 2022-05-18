/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  let res = 0
  //每比较一位，往右移
  let a = x % 2
  let b = y % 2
  while (x || y) {
    if (a != b) res++
    x >>= 1
    y >>= 1
    a = x % 2
    b = y % 2
  }
  return res
};
console.log(hammingDistance(1, 4))