/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  //这是一个想得巨复杂还只通过部分案例的方法
  /*   //分别对两个二叉树BFS序列化之后，再合并两个字符串，反序列化为二叉树
    let arr1 = serielization(root1).split('')
    let arr2 = serielization(root2).split('')
    //合并两个字符串
    const len1 = arr1.length
    const len2 = arr2.length
    const maxLen = Math.max(len1, len2)
    const minLen = Math.min(len1, len2)
  
    let arr3 = []
    for (let i = 0; i < minLen; i++) {
      if (arr1[i] == '#' && arr2[i] == '#') arr3.push('#')
      else {
        let val1 = arr1[i] == '#' ? 0 : arr1[i]
        let val2 = arr2[i] == '#' ? 0 : arr2[i]
        arr3.push(+val1 + +val2)
      }
    }
    for (let i = minLen; i < maxLen; i++) {
      arr3.push(arr1[i] || arr2[i])
    }
    //将arr3反序列化为二叉树

    return deserialize(arr3)
  };
  function serielization(root) {
    let res = ''
    let queue = [root]
    while (queue.length) {
      let len = queue.length
      for (let i = 0; i < len; i++) {
        let node = queue.shift()
        if (!node) res += '#'
        else {
          res += node.val
          queue.push(node.left)
          queue.push(node.right)
        }
      }
    }

  var deserialize = function (arr) {
  let queue = [new TreeNode(arr[0])]
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
    return res */

  //DFS
  //终止条件,root1和root2都为null
  if (!root1 && !root2) return
  //本层逻辑
  const val1 = root1 ? root1.val : 0
  const val2 = root2 ? root2.val : 0
  let node = TreeNode(val1 + val2)
  node.left = mergeTrees(root1 ? root1.left : null, root2 ? root2.left : null)
  node.right = mergeTrees(root1 ? root1.right : null, root2 ? root2.right : null)
  return node
}