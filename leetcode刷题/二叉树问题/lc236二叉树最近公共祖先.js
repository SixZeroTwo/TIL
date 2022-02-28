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

  return findPorQ(root, p, q)
  function findPorQ(r, p, q) {
    //判断r是否为空
    if (!r) {
      return false
    }
    //终止条件，判断本身是不是为porq
    if (r.val === p || r.val === q) {
      return r
    }
    let left = findPorQ(r.left, p, q)
    let right = findPorQ(r.right, p, q)
    //判断是否左右子树都有返回节点，如果没有则返回有返回值的一边
    if (l && r) {
      return r
    }
    else {
      return left || right
    }
  }
};