//第一题，普通的层序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue.shift()
      res.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return res
};

//第二题，每一层的输出放在一个数组内
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  let res = []
  while (queue.length) {
    let temp = []
    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue.shift()
      temp.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    res.push(temp)
  }
  return res
};

//第三题，Z字型打印
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return []
  let queue = [root]
  let res = []
  let count = 0
  while (queue.length) {
    let temp = []
    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue.shift()
      temp.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    if (count++ % 2) res.push(temp.reverse())
    else res.push(temp)
  }
  return res
};