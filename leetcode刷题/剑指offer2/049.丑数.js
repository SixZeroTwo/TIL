/**
 * @param {number} n
 * @return {number}
 */
const { MinPriorityQueue } = require('@datastructures-js/priority-queue')
var nthUglyNumber = function (n) {
  /*   //递归加剪枝
    //错误解法
    const set = new Set
    function visit(num, set) {
      //终止条件
      if (set.size == n || set.has(num)) return
      //本层
      set.add(num)
      visit(num * 2, set)
      visit(num * 3, set)
      visit(num * 5, set)
    }
    visit(1, set)
    return Array.from(set).sort((a, b) => a - b)[n - 1] */
  /*   //BFS加剪枝
    const set = new Set
    let queue = [1]
    while (true) {
      for (let i = 0, len = queue.length; i < len; i++) {
        //检查该值是否在set中出现过
        let cur = queue.shift()
        if (set.has(cur)) continue
        set.add(cur)
        if (!set.has(cur * 2)) queue.push(cur * 2)
        if (!set.has(cur * 3)) queue.push(cur * 3)
        if (!set.has(cur * 5)) queue.push(cur * 5)
        if (set.size >= n) {
          return Array.from(set).sort((a, b) => a - b)[n - 1]
        }
      }
    } */
  let a = [0, 1, -1, 3, 9, -6, 4]
  let pq = MinPriorityQueue.fromArray(a)
  console.log(pq)
};
console.log(nthUglyNumber(10));
