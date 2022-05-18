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
 * @return {number[][]}
 */

/* var levelOrder = function(root) {
    let result = []
    const DFS = function(root,level){
        if(!root){
            return
        }
        let list = []
        
        if(!result[level]){
            result[level]=[]
        }
        result[level].push(root.val)
        level++
        //递归
        DFS(root.left,level)
        DFS(root.right,level)
    }
    DFS(root,0)
    return result
}; */


//迭代法
var levelOrder = function (root) {
  if (!root) return []
  let result = []
  let queue = [root]
  while (queue.length) {
    let l = queue.length
    let temp = []
    for (let i = 0; i < l; i++) {
      let node = queue.shift()
      temp.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(temp)
  }
  return result
};