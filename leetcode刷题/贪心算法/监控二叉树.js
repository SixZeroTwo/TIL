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
var minCameraCover = function (root) {
  //特殊情况
  if (root.left == null && root.right == null) return 1
  let res = 0
  //后序遍历
  dfs(root)
  return res
  //如果当前节点不是叶子节点且子节点中都没有安装监控器，则本节点安装，且res++
  function dfs(root) {
    //终止条件
    if (!root) return
    dfs(root.left)
    dfs(root.right)
    //非叶子节点
    if (root.left || root.right) {
      //情况一，有左节点，有右节点，
      if (root.left && root.right) {
        if (root.left.val == 0 && root.right.val == 0) {
          root.val = 1
          res++
        }
      }
      //情况二，有左节点，没右节点
      else if (root.left && !root.right) {
        if (root.left.val == 0) {
          root.val = 1
          res++
        }
      }
      //情况三，有右节点，没左节点
      else if (!root.left && root.right) {
        if (root.right.val == 0) {
          root.val = 1
          res++
        }
      }
    }
  }
};