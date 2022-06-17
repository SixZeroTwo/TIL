/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null
  //方法一：哈希表，时间复杂度O(A+B+2C)，空间复杂度O(A+B+C)
  //方法二：双指针，两个指针从各自起点开始都走完A+B+C的长度，必会相遇在交点
  let A = headA
  let B = headB
  let flag = 0
  while (A != B) {
    if (!A.next) {
      if (!flag) flag = 1
      else {
        return null
      }
    }
    A = A.next == null ? headB : A.next
    B = B.next == null ? headA : B.next
  }
  return A
};

