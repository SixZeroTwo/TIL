/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  let res = null
  let used = []
  tickets.forEach(() => used.push(0))
  back(['JFK'], used)
  function back(path, used) {
    //终止条件
    if (path.length == tickets.length + 1) {
      if (res == null) {
        res = path
      }
      if (compareFn(res, path)) {
        res = path
      }
      return
    }
    let from = path[path.length - 1]
    for (let i = 0; i < tickets.length; i++) {
      if (used[i] == 1) continue
      if (from == tickets[i][0]) {
        let a = path.slice()
        let b = path.slice()
        a.push(tickets[i][1])
        b[i] = 1
        back(a, b)
      }
    }
  }
  function compareFn(A, B) {
    for (let i = 0; i < A.length; i++) {
      if (B[i] < A[i]) return 1
    }
    return 0
  }
  return res
};
console.log(findItinerary([["JFK", "SFO"], ["JFK", "ATL"], ["SFO", "ATL"], ["ATL", "JFK"], ["ATL", "SFO"]]));