/**
 * @param {number} n
 * @return {boolean}
 */
/*  「快乐数」 定义为：

 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
 如果这个过程 结果为 1，那么这个数就是快乐数。 */
var isHappy = function (n) {
  let set = new Set
  set.add(n)
  var fn = function (x) {
    //将x按每一位处理
    let arr = x.toString().split('')
    let sum = arr.reduce((prev, cur) => prev += Math.pow(parseInt(cur), 2), 0)
    //如果当前sum为1
    if (sum == 1) return true
    //判断是否当前的sum在之前出现过，有则返回false，无则加入set并返回fn(sum)
    if (set.has(sum)) return false
    else {
      set.add(sum)
      return fn(sum)
    }
  }
  return fn(n)
};

isHappy(19)