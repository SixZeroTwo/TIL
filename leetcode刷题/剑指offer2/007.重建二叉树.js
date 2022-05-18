/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!preorder.length) return null
  let head = new TreeNode(preorder[0])
  let mid = inorder.indexOf(preorder[0])
  //左子树的节点数量为mid
  //右子树的节点数量为inorder.length-1-mid
  head.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid))
  head.right = buildTree(preorder.slice(mid + 1, preorder.length), inorder.slice(mid + 1, inorder.length))
  return head
};