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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  //终止条件
  if (!root) return root
  //交换左右孩子
  let left = invertTree(root.right)
  let right = invertTree(root.left)
  root.left = right
  root.right = left
  return root
};