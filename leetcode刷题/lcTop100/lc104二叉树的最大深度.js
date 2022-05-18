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
 * @return {number}
 */
var maxDepth = function (root) {
  //特殊情况
  if (!root) return 0
  //层序遍历，每一层深度+1
  let depth = 0
  let queue = [root]
  while (queue.length) {
    let l = queue.length
    depth++
    //当层放入下一层
    for (let i = 0; i < l; i++) {
      let node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return depth
};