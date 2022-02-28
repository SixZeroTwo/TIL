/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  const sum = function (arr) {
    return arr.reduce((prev, cur) => {
      return prev + cur
    }, 0)
  }
  const back = function (path, startIndex) {
    let pathSum = sum(path)
    if (pathSum > n) {
      return
    }
    if (path.length == k) {
      if (pathSum === n) {
        res.push([...path])
      }
      return
    }
    //控制横向
    for (let i = startIndex; i <= (n - k + 1 > 9 ? 9 : n - k + 1); i++) {
      let a = path.slice()
      a.push(i)
      back(a, i + 1)
    }
  }
  let res = []
  back([], 1)
  return res
};

console.log(combinationSum3(2, 6));