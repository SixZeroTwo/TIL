/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  //终止条件
  if (!preorder.length || !inorder.length) return null
  //找到当前根节点在inoreder中的位置
  let index = inorder.indexOf(preorder[0])
  //递归构建
  let node = new TreeNode(preorder[0])
  node.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
  node.right = buildTree(preorder.slice(index + 1, preorder.length), inorder.slice(index + 1, inorder.length))
  return node
};