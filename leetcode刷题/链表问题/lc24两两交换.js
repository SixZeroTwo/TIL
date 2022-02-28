/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let dummyHead = { next: head }
  fn(dummyHead, head)
  return dummyHead.next
};
//递归子函数，对每两个节点做操作

const fn = function (prev, cur) {
  //终止条件
  if (!cur || !cur.next) return
  //两个节点全在的时候
  prev.next = cur.next
  let nextCur = cur.next.next
  cur.next.next = cur
  cur.next = nextCur
  fn(cur, nextCur)
}