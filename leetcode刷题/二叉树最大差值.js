class Node {
  constructor() {
    this.numChild = null
    this.value = null
    this.sum = null
    this.child = null
  }
}

let sum = 0
function calculate_sum(root) {
  let ret = node_map[root].value
  for (let i = 0; i < node_map[root].numChild; i++) {
    let x = calculate_sum(node_map[root].child[i])
    ret += x
  }
  node_map[root].sum = ret
  return ret
}

