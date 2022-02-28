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
var sumOfLeftLeaves = function (root) {
  //傀儡根节点
  let fakeRoot = {}
  fakeRoot.left = root
  let sum = 0
  dfs(fakeRoot)
  function dfs(root) {
    //终止条件
    if (!root) {
      return
    }
    if (root.left && !root.left.left && !root.left.right) {
      sum += root.left.val
    }
    dfs(root.left)
    dfs(root.right)
  }
  return sum
};