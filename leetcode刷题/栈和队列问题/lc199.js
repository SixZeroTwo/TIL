/**
 * Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (!root) {
    return []
  }
  //BFS
  let queue = [root]
  let stack = []
  while (queue.length) {
    let tail = queue[queue.length - 1]
    stack.push(tail.val)
    let len = queue.length
    for (let i = 0; i < len; i++) {
      let head = queue.shift()
      if (head.left) {
        queue.push(head.left)
      }
      if (head.right) {
        queue.push(head.right)
      }
    }

  }
  //读取栈
  return stack
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

let a1 = new TreeNode(1)
let a2 = new TreeNode(2)
let a3 = new TreeNode(3)
let a4 = new TreeNode(4)
let a5 = new TreeNode(5)
a1.left = a2
a1.right = a3
a2.right = a5
a3.right = a4
console.log(rightSideView(a1));