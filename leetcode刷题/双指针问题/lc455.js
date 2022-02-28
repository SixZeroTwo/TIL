/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  //排序两个数组，降序排列
  g.sort((a, b) => b - a)
  s.sort((a, b) => b - a)
  //使尺寸大的饼干尽量满足胃口大的孩子，指向饼干的指针为慢指针，匹配成功则右移
  let pg = 0
  let ps = 0
  let gL = g.length
  let sL = s.length
  while (pg < gL && ps < sL) {
    if (s[ps] >= g[pg]) {
      ps++
    }
    pg++
  }
  return ps
};