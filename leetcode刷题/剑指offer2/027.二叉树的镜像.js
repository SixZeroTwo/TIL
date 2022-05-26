/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
  //终止条件
  if (!root) return null
  let left = root.left
  let right = root.right
  root.left = mirrorTree(right)
  root.right = mirrorTree(left)
  return root
};