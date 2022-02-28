/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  //按照起始位置从小打到大排序points，如果起始位置相同，则终止位置小的在前面
  points.sort((a, b) => {
    if (a[0] == b[0]) return a[1] - b[1]
    else return a[0] - b[0]
  })
  //一个记录当前的points的索引，另一个记录当前箭的数量
  let index = 0
  let arrow = 0
  //初始的公共区域，第一个气球的起始位置
  let commonArea = [-1, -1]
  while (index < points.length) {
    //当前气球区域内找到与上一个气球区域的公共交集，如果有，则将更新公共交集区域；如果没有arrow+1，公共交集区域为当前气球区域
    let tempArea = [points[index][0], points[index][1]]
    let commonStart = Math.max(commonArea[0], tempArea[0])
    let commonEnd = Math.min(commonArea[1], tempArea[1])
    if (commonStart > commonEnd) {
      arrow++
      commonArea = tempArea
    }
    else commonArea = [commonStart, commonEnd]
    index++
  }
  return arrow
};
findMinArrowShots([[10, 16], [2, 8], [1, 6], [7, 12]])