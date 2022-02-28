/* let a = readInt()//终点
let b = readInt()//携带能量上限
let f = readInt()//充电坐标
let k = readInt()//行动k次 */
function lastChargeTimes(a, b, f, k) {
  //特殊情况，开始就无法到达f
  if (b < f) {
    return -1
  }
  //开始
  let countK = 0
  let energy = b
  let chargeTimes = 0//充电次数

  //移动过程
  while (countK < k) {
    //从0往f走
    energy -= f
    //判断是否能量已经负值
    if (energy < 0) {
      return -1
    }
    //判断是否要补充能量
    if ((k - countK > 1 && energy < 2 * (a - f)) || (k - countK == 1 && energy < (a - f))) {
      energy = b
      chargeTimes++
    }

    //从f往a
    energy -= (a - f)
    //判断是否能量已经负值
    if (energy < 0) {
      return -1
    }
    if (++countK == k) {
      break
    }
    //a往f
    energy -= (a - f)
    //判断是否能量已经负值
    if (energy < 0) {
      return -1
    }
    //判断是否要补充能量
    if ((k - countK > 1 && energy < 2 * f) || (k - countK == 1 && energy < f)) {
      energy = b
      chargeTimes++
    }

    //从f往0走
    energy -= f
    //判断是否能量已经负值
    if (energy < 0) {
      return -1
    }
    if (++countK == k) {
      break
    }
  }
  return chargeTimes
}

console.log(lastChargeTimes(6, 10, 2, 4));