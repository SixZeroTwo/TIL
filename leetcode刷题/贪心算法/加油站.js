/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  //暴力解法
  /*   let len = gas.length
    for (let i = 0; i < len; i++) {
      let breakFlag = 0
      //初始油位
      let oil = 0
      //起点索引
      let start = i
      //从当前位置开始走
      count = 0
      for (let ind = start; count < len; count++, ind++) {
        oil += gas[ind % len] - cost[ind % len]
        if (oil < 0) {
          breakFlag = 1
          break
        }
      }
      if (breakFlag) continue
      else return i
    }
    return -1 */

  //贪心解法
  let len = gas.length
  let curSum = 0
  let totalSum = 0
  let start = 0
  for (let i = 0; i < len; i++) {
    //剩余油量
    curSum += gas[i] - cost[i]
    totalSum += gas[i] - cost[i]
    //如果当前的curSum<0，则这个地方不适合作为起点
    if (curSum < 0) {
      curSum = 0
      start = i + 1
      continue
    }
  }
  if (totalSum < 0) return -1
  return start
};