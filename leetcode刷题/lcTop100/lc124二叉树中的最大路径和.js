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
var maxPathSum = function (root) {
  let max = -Infinity
  helper(root)
  return max
  function helper(node) {
    //后序遍历
    //终止条件，贡献值是0
    if (!node) return 0
    let left = helper(root.left)
    let right = helper(root.left)
    //如果是非根节点，返回其中一条分支的最大值，并记录可能出现的最大值
    if (node != root) {
      max = Math.max(max, left + node.val, right + node.val, left, right, node.val)
      return Math.max(left + node.val, right + node.val)
    }
    //如果是根节点，返回其中一条分支的最大值，并记录可能出现的最大值
    else {
      max = Math.max(max, left + node.val, right + node.val, left, right, node.val, node.val + left + right)
      return Math.max(left + node.val, right + node.val, node.val + left + right)
    }
  }
};