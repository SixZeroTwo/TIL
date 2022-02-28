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
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  //找待删除的节点，如果有则返回该节点，没有则返回null
  let delNode = findDelNode(root)
  //删除节点
  //如果delNode没有子节点
  if (delNode.left == null && delNode.right == null) {
    //如果delNode是头节点
    if (delNode == root) {
      return null
    }
    else {

    }
  }
  //BFS
  function findDelNode(root) {
    let father = null
    let queue = [root]
    while (queue.length) {
      let node = queue.shift()
      if (node.val === key) {
        return [node]
      }
      let children = [root.left, root.right]
      for (let i = 0; i < children.length; i++) {
        if (children[i]) {
          queue.push(children[i])
        }
      }
    }
    return null
  }
};