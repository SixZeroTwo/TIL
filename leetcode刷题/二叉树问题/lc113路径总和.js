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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function (root, targetSum) {
  let res = []
  dfs(root, [], 0)
  //dfs
  function dfs(root, path, sum) {
    //终止条件
    if (!root) {
      return
    }
    path.push(root.val)
    //判断前缀和是否为目标sum（叶子节点时）
    if ((sum += root.val) == targetSum && !root.left && !root.right) {
      res.push(path)
    }
    dfs(root.left, [...path], sum)
    dfs(root.right, [...path], sum)
  }
  return res
};