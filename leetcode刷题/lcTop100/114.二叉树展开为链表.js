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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  //特殊情况
  if (!root) return null
  //迭代进行先序遍历
  let prev = null
  let stack = [root]
  while (stack.length) {
    if (prev) {
      prev.left = null
      prev.right = stack[stack.length - 1]
    }
    prev = stack.pop()
    //先右后左
    if (prev.right) stack.push(prev.right)
    if (prev.left) stack.push(prev.left)
  }
  return root
};