/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
// Definition for a Node.
function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
};

/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function (root) {
  if (!root) return root
  let nodes = []
  inorder(root)
  const len = nodes.length
  for (let i = nodes.length; i < 2 * len; i++) {
    nodes[i % len].left = nodes[(i - 1) % len]
    nodes[i % len].right = nodes[(i + 1) % len]
  }
  return nodes[0]
  function inorder(root) {
    if (!root) return
    inorder(root.left)
    nodes.push(root)
    inorder(root.right)
  }
};

let a1 = new Node(4)
let a2 = new Node(2)
let a3 = new Node(5)
let a4 = new Node(1)
let a5 = new Node(3)
a1.left = a2
a1.right = a3
a2.left = a4
a2.right = a5

treeToDoublyList(a1)