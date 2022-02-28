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
 * @return {boolean}
 */
//递归写法一
/* const searchBST = function (root, lower, upper) {
    if (!root) {
        return true
    }
    if (root.val <= lower || root.val >= upper) {
        return false
    }
    //左子树比根小，右子树比根大，保证了大小关系
    return searchBST(root.left, lower, root.val) && searchBST(root.right, root.val, upper)
}
var isValidBST = function (root) {
    //递归入口
    return searchBST(root, -Infinity, Infinity)
}; */

//写错了的递归中序遍历版本
const inorder = function (root) {
    //当root为空时return true
    if (!root) {
        return true
    }
    //访问左子树，若左子树大小关系不对则返回false
    if (!inorder(root.left)) {
        return false
    }
    //比较与之前节点的大小关系

    if (prev && root.val <= prev.val) {
        return false
    }
    prev = root
    //访问右子树
    if (!inorder(root.right)) {
        return false
    }
    return true
}
let prev = null
//中序遍历
var isValidBST = function (root) {

    //利用递归实现中序遍历，在函数中比较当前节点和之前节点的大小关系（应该为升序），需要传root，prev节点
    return inorder(root)
}
function TreeNode(val) {
    this.val = val
    this.left = null
    this.right = null
}
let a = new TreeNode(0)
//let b = new TreeNode(1)
/* let c = new TreeNode(4)
let d = new TreeNode(3)
let e = new TreeNode(6) */



console.log(isValidBST(a));