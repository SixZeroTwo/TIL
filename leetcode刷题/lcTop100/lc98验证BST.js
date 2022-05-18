const isValidBST = function (root) {
  const WHITE = 0
  const GRAY = 1
  let stack = [[root, WHITE]]
  //迭代实现
  //颜色标记法
  let value = null
  while (stack.length) {
    let [node, color] = stack.pop()
    //当前节点为白，没有被访问过
    if (color == WHITE) {
      //中序
      if (node.right) stack.push([node.right, WHITE])
      stack.push([node, GRAY])
      if (node.left) stack.push([node.left, WHITE])
    }
    //当前节点为灰，已经访问过，做操作
    else {
      if (value != null && value >= node.val) return false
      else value = node.val
    }
  }
  return true
}