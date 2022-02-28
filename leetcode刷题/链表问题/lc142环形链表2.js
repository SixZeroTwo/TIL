/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let set = new Set
  //遍历，直到遍历结束或者访问到相同节点
  while (head) {
    if (set.has(head)) return head
    else set.add(head)
    head = head.next
  }
  return null
};