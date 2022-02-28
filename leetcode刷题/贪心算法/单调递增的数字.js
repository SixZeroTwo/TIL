/**
 * @param {number} n
 * @return {number}
 */
var monotoneIncreasingDigits = function (n) {
  //特殊情况
  if (n < 10) return n
  //将n先变成字符串，再变为数组进行操作
  let num = String(n).split('')
  num = num.map(value => Number(value))
  //从后往前寻找
  let changeFlag = false
  for (let i = num.length - 1; i > 0; i--) {
    if (num[i - 1] <= num[i]) continue
    else {
      //需要借位
      changeFlag = true
      //如果当前位置的前一位不为0，改动当前位为9以及前一位--即可
      if (num[i - 1] != 0) {
        num[i] = 9
        num[i - 1]--
      }
      //这一段想多了，如果前一位为0.则前一位必<=当前位，也就不需要借位了
      //如果当前位置的前一位为0，则需要考虑连锁反应，往前找直到借位不为0
      /*       else {
              let j = i
              do {
                num[j] = 9
              }
              while (num[j - 1] == 0 && j > 0) {
                num[j - 1] = 9
                j--
              }
            } */
      //此外还需要将该位之后的数全置为9
      let k = i
      while (++k < num.length) {
        num[k] = 9
      }
    }
  }
  if (changeFlag) return Number(num.join(''))
  else return n
};

monotoneIncreasingDigits(100)