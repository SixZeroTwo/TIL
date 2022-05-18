var maxScore = function (s) {
  const len = s.length
  const dp = new Array(len)
  let arr = s.split('')
  dp[0] = 0
  let temp = arr[0].charCodeAt() - arr[1].charCodeAt()
  let start = 'a'.charCodeAt() - 1
  dp[1] = arr[0] == arr[1] || Math.abs(temp) == 1 ? arr[0].charCodeAt() + arr[1].charCodeAt() - 2 * start : 0
  for (let i = 0; i < len; i++) {
    //往前两位比较，
  }

}


