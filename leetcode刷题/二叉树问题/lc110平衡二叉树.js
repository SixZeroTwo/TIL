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
 * @return {boolean}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
var isBalanced = function (root) {
  let res = true
  visit(root)
  function visit(root) {
    //终止条件
    if (!root) {
      return 0
    }
    let lDep = visit(root.left)
    let rDep = visit(root.right)
    if (Math.abs(lDep - rDep) > 1) {
      res = false
    }
    return Math.max(lDep, rDep) + 1
  }
  return res
};

let a1 = new TreeNode(3)
let a2 = new TreeNode(9)
let a3 = new TreeNode(20)
let a4 = new TreeNode(15)
let a5 = new TreeNode(7)
a1.left = a2
a1.right = a3
a3.left = a4
a3.right = a5
isBalanced(a1)