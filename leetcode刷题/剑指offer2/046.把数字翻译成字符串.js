/**
 * @param {number} num
 * @return {number}
 */
var translateNum = function (num) {
  /*   
  //递归法
    let res = 0
    let str = num.toString()
    visit(str)
    function visit(str) {
      //终止条件
      if (str.length == 0) {
        res++
        return
      }
  
      //两条分支
      if (str.length >= 1 && str[0] <= 25) {
        visit(str.slice(1))
      }
      if (str.length >= 2 && str.slice(0, 2) <= 25 && str.slice(0, 2)[0] != '0') {
        visit(str.slice(2))
      }
    }
    return res 
    */

  //动态规划法，同1步、2步爬楼梯一样的思路
  num = num.toString()
  const len = num.length

  let dp = new Array(len + 1).fill(1)
  for (let i = 2; i < len + 1; i++) {

    const num_2 = num.slice(i - 2, i)
    if (num_2 <= 25 && num_2[0] != '0') dp[i] = dp[i - 1] + dp[i - 2]
    else dp[i] = dp[i - 1]
  }
  return dp[len]
};

translateNum(25)