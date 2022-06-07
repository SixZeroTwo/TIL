/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  return compare(root, root)
  function compare(A, B) {
    if (!A && !B) return true
    if (!A || !B) return false
    if (A.val == B.val) return compare(A.left, B.right) && compare(A.right, B.left)
    else return false
  }
};