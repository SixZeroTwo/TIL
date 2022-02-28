/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  //定义dummyHead
  let dummyHead = { next: head }
  //while循环
  let prev = dummyHead
  let cur = head
  while (cur) {
    if (cur.val == val) {
      prev.next = cur.next
      cur = cur.next
    }
    else {
      prev = cur
      cur = cur.next
    }

  }
  return dummyHead.next
};