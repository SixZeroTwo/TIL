/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  //按照右边界排序
  intervals.sort((a, b) => {
    return a[0] - b[0]
  })
  let res = []
  let temp = [intervals[0][0], intervals[0][1]]
  if (intervals.length == 1) return [temp]
  //遍历intervals，start = Math.min(intervals[i][0],start)
  //判断当前元素的右边界是否大于end
  for (let i = 1; i < intervals.length; i++) {
    //如果当前元素的左边界大于end，则将temp压入res，且更新tmep
    if (intervals[i][0] > temp[1]) {
      res.push([...temp])
      temp[0] = intervals[i][0]
      temp[1] = intervals[i][1]
    }
    else {
      //更新temp
      temp[0] = Math.min(intervals[i][0], temp[0])
      temp[1] = Math.max(intervals[i][1], temp[1])
    }

    if (i == intervals.length - 1) {
      //最后再push一次temp
      res.push([...temp])
    }
  }
  return res
}
merge([[1, 4], [0, 0]])