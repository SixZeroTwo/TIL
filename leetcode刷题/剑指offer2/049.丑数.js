/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  //递归加剪枝
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
  return Array.from(set).sort((a, b) => a - b)[n - 1]
};

nthUglyNumber(10)