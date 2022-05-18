/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  //终止条件
  if (!root) return undefined
  //本层逻辑
  let left = lowestCommonAncestor(root.left, p, q)
  let right = lowestCommonAncestor(root.right, p, q)
  //判断左和右
  if (left && right) return root
  else if (left || right) {
    if (root == p || root == q) {
      return root
    }
    else return left || right
  }
  else {
    return root == p || root == q ? root : undefined
  }
};