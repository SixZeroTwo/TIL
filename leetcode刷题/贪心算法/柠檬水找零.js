/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  //当前手上金额
  let money = {
    '5': 0,
    '10': 0,
    '20': 0,
  }
  for (let i = 0; i < bills.length; i++) {
    //对应的金额+1
    money[bills[i]]++
    //找零

    if (bills[i] == 10) {
      //只能找一张5的，如果没有返回false
      if (--money[5] < 0) {
        return false
      }
    }
    if (bills[i] == 20) {
      //因为5元面额的用处大一些，优先找10+5,如果不行再找5+5+5，如果不行则返回false
      if (money[5] > 0 && money[10] > 0) {
        money[5]--
        money[10]--
      }
      else if (money[5] >= 3 && money[10] < 1) {
        money[5] -= 3
      }
      else {
        return false
      }
    }
  }
  return true
};