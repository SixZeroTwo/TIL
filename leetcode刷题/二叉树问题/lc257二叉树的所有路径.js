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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  let res = []
  dfs(root, '')
  function dfs(root, str) {
    if (!root) {
      res.push(str.slice(1))
    }
    dfs(root.left, str + '->' + root.val)
    dfs(root.right, str + '->' + root.val)
  }
  return res
};