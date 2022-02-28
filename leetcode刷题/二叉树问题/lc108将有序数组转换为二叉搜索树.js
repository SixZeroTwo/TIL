/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}
var sortedArrayToBST = function (nums) {
  let len = nums.length
  return travel(0, len - 1)
  //终止条件
  function travel(left, right) {
    if (left > right) {
      return null
    }
    let mid = Math.floor(left + (right - left) / 2)
    let root = new TreeNode(nums[mid])
    root.left = travel(left, mid - 1)
    root.right = travel(mid + 1, right)
    //定义返回值为本轮迭代的数组的中间节点
    return root
  }
};
let nums = [-10, -3, 0, 5, 9]
let head = sortedArrayToBST(nums)
console.log(head);