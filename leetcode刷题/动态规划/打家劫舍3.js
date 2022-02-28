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
var rob = function (root) {
  //dp数组，第一个数为不偷当层节点所偷到的金钱，第二个数为偷当层节点所得到的金钱
  let dp = visit(root)
  //递归
  return Math.max(dp[0], dp[1])
  function visit(node) {
    //单层递归逻辑
    if (!node) {
      return [0, 0]
    }
    //后序遍历
    let [lv1, lv2] = visit(node.left)
    let [rv1, rv2] = visit(node.right)
    //不偷当层节点
    let val1 = Math.max(lv1, lv2) + Math.max(rv1, rv2)
    //偷当层节点
    let val2 = lv1 + rv1 + node.val
    //返回值
    return [val1, val2]
  }
};