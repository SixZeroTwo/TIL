/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let p1 = a.length - 1
  let p2 = b.length - 1
  let res = ''
  let up = 0//进位
  while (p1 >= 0 || p2 >= 0 || up != 0) {
    let temp_a = 0
    let temp_b = 0
    if (p1 >= 0) {
      temp_a = +a[p1]
      p1--
    }
    if (p2 >= 0) {
      temp_b = +b[p2]
      p2--
    }
    //计算当前位
    let val = temp_a + temp_b + up
    let cur = Math.floor(val % 2)
    up = val >= 2 ? 1 : 0
    res = cur + res
  }
  return res
};

addBinary("1010", "1011")