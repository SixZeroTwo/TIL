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
var convertBST = function (root) {
  function dfs(root, sum) {
    //终止条件
    if (!root) return sum
    //右中左
    let right = dfs(root.right, sum)
    root.val += right
    let left = dfs(root.left, root.val)
    return left
  }
  dfs(root, 0)
  return root
};