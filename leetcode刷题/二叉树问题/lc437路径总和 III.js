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
 * @return {number}
 */
var pathSum = function (root, targetSum) {
  //外层递归，从当前root节点向下遍历所有二叉树节点
  if (!root) {
    return 0
  }
  return DFS(root, 0) + pathSum(root.left, targetSum) + pathSum(root.right, targetSum)
  function DFS(root, sum) {
    let num = 0
    dfs(root, sum)
    function dfs(root, sum) {
      if (!root) {
        return
      }
      sum += root.val
      //当前缀和等于targetSum时
      //这里不能直接return 要继续往下判断，当路径起点不变时，是否向下还有符合要求的路径
      //比如，当前的路径虽然已经满足要求，但接下来的两个节点是1 和 -1，这样又会有新的符合要求的路径
      if (sum == targetSum) {
        num++
      }
      dfs(root.left, sum)
      dfs(root.right, sum)
    }
    return num
  }
};