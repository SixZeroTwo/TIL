/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  //递归写法
  /*   let res = []
    function order(root) {
      if (!root) return
      order(root.left)
      res.push(root.val)
      order(root.right)
    }
    order(root)
    return res */
  //迭代写法（颜色标记法）
  //白色代表没访问过
  //灰色代表已经访问过了
  if (!root) return []
  const WHITE = 0
  const GRAY = 1
  let stack = [[root, WHITE]]
  let res = []
  while (stack.length) {
    //拿出当前要处理的元素
    [node, color] = stack.pop()
    if (color == WHITE) {
      //按照顺序放入栈，当前节点标记灰色
      if (node.right) stack.push([node.right, WHITE])
      stack.push([node, GRAY])
      if (node.left) stack.push([node.left, WHITE])
    }
    else {
      res.push(node.val)
    }
  }
  return res
};