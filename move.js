function move(input) {
  let xyz = input.split('/n')[0]
  let operate = input.split('/n')[1]
  xyz = xyz.split(' ')
  //初始位置是xyz
  let map = {
    E: () => { xyz[0] += 1 },
    W: () => { xyz[0] -= 1 },
    N: () => { xyz[1] += 1 },
    S: () => { xyz[1] -= 1 },
    U: () => { xyz[2] += 1 },
    D: () => { xyz[2] -= 1 },
  }
  //获取operate的每个字符，对xyz做出对应变化
  operate.split('').forEach(op => {
    map[op]()
  });
  return xyz.join(' ')
}

console.log(move('0 0 0', 'EWESNDUS'));