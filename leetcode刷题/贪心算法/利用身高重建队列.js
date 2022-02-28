/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  let res = []
  //首先满足按照身高从大到小排，保证之后插入的时候前面都是比当前位置更高的人，
  people.sort((a, b) => b[0] - a[0])
  //之后依次插到k的位置
  for (let i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i])
  }
  return res
};
reconstructQueue([[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]])