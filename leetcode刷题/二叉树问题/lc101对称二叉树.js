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
  if (!root) return true
  let helper = (left, right) => {
    if (!left && !right) {
      return true
    }
    if (!left || !right) {
      return false
    }
    if (left.val === right.val) {
      return helper(left.left, right.right) && helper(left.right, right.left)
    } else {
      return false
    }
  }
  return helper(root, root)
};


function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(2)
let a4 = new TreeNode(3)
let a5 = new TreeNode(3)
let a6 = new TreeNode(3)
let a7 = new TreeNode(3)
let a8 = new TreeNode(5)
let a9 = new TreeNode(5)
a1.left = a2
a1.right = a3
a2.left = a4
a2.right = a5
a3.left = a6
a3.right = a7
a4.left = a8
a7.right = a9
let res = isSymmetric(a1)
console.log(res);

//迭代实现
var isSymmetric = function (root) {
  let queue = [root, root]
  while (queue.length) {
    let left = queue.shift()
    let right = queue.shift()
    //比较left和right
    if ((!left && right) || (left && !right) || (left && right && left.val !== right.val)) {
      return false
    }
    if (left && right) {
      queue.push(left.left)
      queue.push(right.right)
      queue.push(left.right)
      queue.push(right.left)
    }
  }
  return true
};