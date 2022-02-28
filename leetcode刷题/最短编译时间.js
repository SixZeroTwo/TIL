function shortestTime(input) {
  //定义每个模块的数据结构
  function Mod() {
    this.dep = []
    this.timeCost = null
    this.visited = false
  }
  //用来存储每个模块的情况
  let map = {}
  //数据的输入
  let inputArr = input.split('\n')
  //处理输入
  for (let i = 1; i < inputArr.length; i++) {
    let modInfo = inputArr[i].split(',')
    let modNode = new Mod()
    modNode.timeCost = Number(modInfo[1])
    modNode.dep = modInfo.slice(2)
    map[modInfo[0]] = modNode
  }
  //BFS
  let sumTime = 0
  let root = map[inputArr[0].split(',')[0]]
  if (visitMod(root) === -1) {
    return -1
  }

  function visitMod(node) {
    let queue = [node]
    sumTime += node.timeCost
    while (queue.length != 0) {
      let item = queue.shift();
      item.visited = true
      let deps = item.dep;
      let levelMax = 0
      for (var i = 0; i < deps.length; i++) {
        //遇到没有定义的依赖直接返回-1
        if (!(deps[i] in map)) {
          return -1
        }
        //遇到访问过的依赖直接返回-1
        if (map[deps[i]].visited === true) {
          return -1
        }
        if (map[deps[i]].visited === false) {
          queue.push(map[deps[i]]);
          if (levelMax < map[deps[i]].timeCost) {
            levelMax = map[deps[i]].timeCost
          }
        }
      }
      sumTime += levelMax
    }
  }
  return sumTime
}

let input = `module3
module1,10
module2,5
module3,10,module1,module2`
console.log(shortestTime(input))