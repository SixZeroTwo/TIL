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
var diameterOfBinaryTree = function (root) {
  let res = 0
  function dfs(root) {
    //终止
    if (!root) return 0
    let ldep = dfs(root.left)
    let rdep = dfs(root.right)
    res = Math.max(res, ldep + rdep)
    //返回最大深度
    return Math.max(ldep, rdep) + 1
  }
  dfs(root)
  return res
};