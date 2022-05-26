
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  /*   //递归检查
    if (!A && !B) return true
    if ((A && !B) || (!A && B)) return false
    if (A && B) {
      if (A.val == B.val) {
        //检查A和B以及它们的后代是否满足
        return isSubStructure(A.left, B.left) && isSubStructure(A.right, B.right)
      }
      else {
        return isSubStructure(A.left, B) || isSubStructure(A.right, B)
      }
  
    } */
  if (!B) return false
  let stack = [A]
  while (stack.length) {
    let node = stack.pop()
    if (node.val == B.val && compare(node, B)) return true
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return false
};
function compare(A, B) {
  if (!A && !B) return true
  if (A && !B) return true
  if (!A && B) return false
  if (A.val == B.val) {
    //检查A和B以及它们的后代是否满足
    return compare(A.left, B.left) && compare(A.right, B.right)
  }
  else {
    return false
  }

}

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)
let a4 = new TreeNode(4)
let b1 = new TreeNode(3)
a1.left = a2
a1.right = a3
a2.left = a4
isSubStructure(a1, b1)