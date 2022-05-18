var reconstructQueue = function (people) {
  let queue = []
  //首先按身高由大到小排列，如果身高相同，则按第二项升序排列
  people.sort((a, b) => {
    if (a[0] != b[0]) return b[0] - a[0]
    else return a[1] - b[1]
  })
  //按照第二项从前往后放入新数组
  for (let i = 0; i < people.length; i++) {
    queue.splice(people[i][1], 0, people[i])
  }
  return queue
};