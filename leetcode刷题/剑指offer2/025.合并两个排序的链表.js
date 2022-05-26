/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  //递归
  if (!l1 && !l2) return null
  else if (!l1 && l2) return l2
  else if (l1 && !l2) return l1
  //比较l1与l2值的大小
  let head = l1
  if (l2.val < l1.val) {
    head = l2
    l2 = l2.next
  }
  else {
    l1 = l1.next
  }
  head.next = mergeTwoLists(l1, l2)
  return head
};
