/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

var canFinish = function (numCourses, prerequisites) {
  //入度数组
  let inDeg = new Array(numCourses).fill(0)
  //邻接表
  let map = {}
  //从prerequisites构造入度数组和邻接表
  for (let i = 0; i < prerequisites.length; i++) {
    //入度
    inDeg[prerequisites[i][0]]++
    //对应的邻接表
    if (map[prerequisites[i][1]]) map[prerequisites[i][1]].push(prerequisites[i][0])
    else map[prerequisites[i][1]] = [prerequisites[i][0]]
  }
  //BFS or DFS
  //从入度为0的课程开始访问
  let queue = []
  for (let i = 0; i < numCourses; i++) {
    if (inDeg[i] == 0) queue.push(i)
  }
  while (queue.length) {
    let len = queue.length
    for (let i = 0; i < len; i++) {
      //依次减少依赖
      //DFS和BFS的差距就在于这句，决定是队列（shift）还是栈（pop）结构
      let temp = queue.shift()
      if (map[temp]) {
        let deps = map[temp]
        for (let j = 0; j < deps.length; j++) {
          //入度减1
          if (--inDeg[deps[j]] == 0) queue.push(deps[j])
        }
      }

    }
  }
  return inDeg.reduce((prev, cur) => prev += cur == 0 ? 1 : 0, 0) == numCourses

};