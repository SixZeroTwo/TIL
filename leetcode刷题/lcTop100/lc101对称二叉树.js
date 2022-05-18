//迭代实现，层序遍历
var isSymmetric = function (root) {
  let queue = [root]
  while (queue.length) {
    let l = queue.length
    for (let i = 0; i < l / 2; i++) {
      let left = queue[i]
      let right = queue[l - 1 - i]
      //首先检查本层的对称性
      if (left.val != right.val) return false
      if ((left.left && !right.right) || (left.right && !right.left) || (!left.left && right.right) || (!left.right && right.left)) return false
    }
    //之后再传入下一层
    for (let i = 0; i < l; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return true
};

//递归实现，每个递归子函数检查相对应的两个节点是否对称
var isSymmetric = function (root) {
  function helper(a, b) {
    //结束条件
    if (!a && !b) return true
    if (!a || !b) return false

    //本层判断
    if (a.val != b.val) return false
    //下一层
    return helper(a.left, b.right) && helper(a.right, b.left)

  }
  return helper(root, root)
}