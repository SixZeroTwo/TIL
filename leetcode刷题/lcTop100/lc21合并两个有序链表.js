/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let dummyHead = { next: null }
  let head = dummyHead
  let l1 = list1
  let l2 = list2
  //
  while (l1 || l2) {
    l1Val = l1 ? l1.val : Infinity
    l2Val = l2 ? l2.val : Infinity
    if (l1Val <= l2Val) {
      head.next = l1
      l1 = l1.next
    }
    else {
      head.next = l2
      l2 = l2.next
    }
    head = head.next
  }
  return dummyHead.next
};