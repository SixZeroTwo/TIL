/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  let isMinus = n < 0 ? true : false
  n = Math.abs(n)
  if (n == 0) {
    return 1
  }
  if (n == 1) {
    return x
  }
  let res = null
  if (n % 2) {
    res = x * myPow(x, n - 1)

  }
  else {
    res = myPow(x, (n) / 2)

  }
  return isMinus ? 1 / (res * res) : res * res
}
console.log(myPow(8.95371, -1));