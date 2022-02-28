/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    const findPOrQ = function (root) {
        //终止条件
        if (!root) {
            return null
        }
        if (root.val === p || root.val === q) {
            return root.val
        }
        //访问左右子树
        let l = findPOrQ(root.left)
        let r = findPOrQ(root.right)
        //如果该节点是公共父亲节点则返回该节点值，否则返回l||r
        if (l !== null && r !== null) {
            return root.val
        }
        else {
            return l || r
        }
    }
    return findPOrQ(root)
};
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
function buildTree(list) {
    let nodes = []
    list.forEach(val => nodes.push(new TreeNode(val)))
    l = nodes.length
    for (let i = 0; i < l; i++) {
        nodes[i].left = nodes[2 * i + 1] ? nodes[2 * i + 1] : null
        nodes[i].right = nodes[2 * i + 2] ? nodes[2 * i + 2] : null
    }
    return nodes
}
let tree = buildTree([3, 5, 1, 6, 2, 0, 8, null, null, 7, 4])
console.log(lowestCommonAncestor(tree[0], 2, 8));