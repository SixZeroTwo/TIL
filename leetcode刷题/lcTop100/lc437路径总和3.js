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
  //DFS解法
  /*   return DFS(root)
    //递归函数
    function DFS(root) {
      //终止条件
      if (!root) return 0
      let count = 0
      dfs(root, targetSum)
      function dfs(root, sum) {
        //终止条件
        if (!root) return
        //计算节点是否满足路径
        let cur = sum - root.val
        if (cur == 0) count++
        dfs(root.left, cur)
        dfs(root.right, cur)
      }
      //左右子节点为开始节点时满足条件的路径数量
      return DFS(root.left) + DFS(root.right) + count
    } */

  //前缀和解法，一次先序遍历即可得到答案

  let prefix = new Map()
  prefix.set(0, 1)//前缀和为0的数量为1
  return DFS(root, prefix, 0)
  //DFS返回根节点到当前节点的满足条件的路径数量
  function DFS(root, prefix, sum) {
    //终止条件

    if (root == null) {
      return 0
    }
    sum += root.val
    let find = sum - targetSum
    let res = prefix.get(find) || 0//前缀和表中满足条件的前缀数量

    prefix.set(sum, (prefix.get(sum) || 0) + 1)
    let left = DFS(root.left, prefix, sum)
    let right = DFS(root.right, prefix, sum)
    //回溯
    prefix.set(sum, prefix.get(sum) - 1)
    return res + left + right
  }
};