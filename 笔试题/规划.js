
function main(V, P, S) {
  const VL = V.length
  //四维dp
  let dp = new Array(VL).fill(0).map(() => new Array(S[0]).fill(0).map(() => new Array(S[1]).fill(0).map(() => new Array(S[2]).fill(0))))
  //初始化
  let res = 0
  if (P[0][0] <= S[0] && P[0][1] <= S[1] && P[0][2] <= S[2]) {
    for (let j = P[0][0]; j < S[0]; j++) {
      for (let k = P[0][1]; k < S[1]; k++) {
        for (let l = P[0][2]; l < S[2]; l++) {
          dp[0][j][k][l] = V[0]
        }
      }
    }
    res = V[0]
  }

  for (let i = 0; i < VL; i++) {
    for (let j = P[i][0]; j < S[0]; j++) {
      for (let k = P[i][1]; k < S[1]; k++) {
        for (let l = P[i][2]; l < S[2]; l++) {
          if (i > 0) {
            dp[i][j][k][l] = Math.max(dp[i - 1][j][k][l], dp[i - 1][j - P[i][0]][k - P[i][1]][l - P[i][2]] + V[i])
            res = Math.max(res, dp[i][j][k][l])
          }
        }
      }
    }
  }
  return res
}
const V = [10000, 8000, 7000]
const P = [[150, 150, 150], [80, 80, 80], [90, 90, 90]]
S = [200, 200, 200]
console.log(main(V, P, S))

