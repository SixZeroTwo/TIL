/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  //BFS序列化
  let queue = [root]
  let res = []
  while (queue.length) {
    for (let i = 0, len = queue.length; i < len; i++) {
      let node = queue.shift()
      if (node) {
        res.push(node.val)
        queue.push(node.left)
        queue.push(node.right)
      }
      else {
        res.push('X')
      }
    }
  }
  return res.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  let arr = data.split(',')
  let queue = [new TreeNode(data[0])]
  let head = queue[0]
  let p = 1
  while (p < arr.length) {
    //取出queue中的真实节点
    let node = queue.shift()
    let lNode = arr[p]
    let rNode = arr[p + 1]
    //判断左和右
    if (lNode != 'X') {
      node.left = new TreeNode(lNode)
      queue.push(node.left)
    }
    if (rNode != 'X') {
      node.right = new TreeNode(rNode)
      queue.push(node.right)
    }
    //指针+2
    p += 2
  }
  return head
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */