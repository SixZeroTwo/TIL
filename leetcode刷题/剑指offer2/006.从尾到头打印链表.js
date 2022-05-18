/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  let res = []
  const dfs = function (head) {
    if (!head) return
    dfs(head.next)
    res.push(head.val)
  }
  dfs(head)
  return res
};