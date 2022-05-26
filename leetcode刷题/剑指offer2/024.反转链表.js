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
var reverseList = function (head) {
  /*   let prev = null
    while (head) {
      let next = head.next
      head.next = prev
      prev = head
      head = next
    }
    return prev */
  //递归法
  function help(prev, head) {
    if (!head) return prev
    let next = head.next
    head.next = prev
    return help(head, next)
  }
  return help(null, head)
};