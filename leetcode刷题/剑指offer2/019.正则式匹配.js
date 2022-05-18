/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  let sL = s.length
  let pL = p.length
  //s为模板字符串，p为正则字符串
  //初始化一个sL,PL+1的二维数组
  const arr = new Array(pL + 1).fill(0).map(() => new Array(sL).fill(0))
};