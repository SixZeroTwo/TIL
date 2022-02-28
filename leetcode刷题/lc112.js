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
 * @param {number} targetSum
 * @return {boolean}
 */
class Node {
    constructor(data) {
        this.val = data
        this.left = null
        this.right = null
    }
}
function buildTree(list) {
    let nodes = []
    list.forEach(val => nodes.push(new Node(val)))
    l = nodes.length
    for (let i = 0; i < l; i++) {
        nodes[i].left = nodes[2 * i + 1] ? nodes[2 * i + 1] : null
        nodes[i].right = nodes[2 * i + 2] ? nodes[2 * i + 2] : null
    }
    return nodes
}
const travel = function (root, targetSum) {
    //终止条件
    if (targetSum - root.val === 0 && !root.left && !root.right) {
        return true
    }
    //访问该节点的左节点
    if (root.left && travel(root.left, targetSum - root.val)) {
        return true
    }
    //右节点
    if (root.right && travel(root.right, targetSum - root.val)) {
        return true
    }
    return false
}
var hasPathSum = function (root, targetSum) {
    //前序遍历
    //判断首次进入是否为空
    if (root) {
        return travel(root, targetSum - root.val)
    }
    else {
        return false
    }
};
let list = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1]
let targetSum = 22
let nodes = buildTree(list)
console.log(hasPathSum(nodes[0], targetSum));