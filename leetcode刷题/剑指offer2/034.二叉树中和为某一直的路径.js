

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
var pathSum = function (root, target) {
  let res = []
  function dfs(root, target, path) {
    //终止条件
    if (!root) return
    let curT = target - root.val
    path.push(root.val)
    if (curT == 0 && !root.left && !root.right) res.push([...path])
    pathSum(root.left, curT, path)
    pathSum(root.right, curT, path)
    path.pop()
  }
  dfs(root, target, [])
  return res
};


let treeHead = buildTree([5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1])
console.log(pathSum(treeHead));