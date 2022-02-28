/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  //按照右边界从小到大排序
  intervals.sort((a, b) => {
    return a[1] - b[1]
  })
  let res = 0
  //记录最小右区间
  let right = -Infinity
  for (let i = 0; i < intervals.length; i++) {
    //如果当前区间的左边界>=最小右边界，则更新最小右边界，否则将该区间被移除，res+1
    if (intervals[i][0] >= right) right = intervals[i][1]
    else res++
  }
  return res

};

eraseOverlapIntervals([[-52, 31], [-73, -26], [82, 97], [-65, -11], [-62, -49], [95, 99], [58, 95], [-31, 49], [66, 98], [-63, 2], [30, 47], [-40, -26]])