/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  let dummyHead = { next: head }
  //第一遍扫描，得到节点总个数
  let sum = 0
  let node = head
  while (node) {
    node = node.next
    sum++
  }
  //正数第sum-n+1个
  let x = sum - n + 1
  const fn = function (cur, prev, N) {
    //删除之后终止
    if (N == x) {
      prev.next = cur.next
      cur.next = null
      return
    }
    //更新，删除后不影响
    prev = cur
    cur = cur.next
    fn(cur, prev, N + 1)
  }
  fn(head, dummyHead, 1)
  return dummyHead.next

};

//双指针解法
var removeNthFromEnd = function (head, n) {
  let dummyHead = { next: head }
  //快指针
  let fast = head
  let slow = head
  let prev = dummyHead
  //快指针开始走n-1步
  while (n-- > 0) {
    //更新fast
    fast = fast.next
  }
  while (n == 0 && !fast) {
    //如果fast是尾，此时删除slow并返回头节点
    if (!fast.next) {
      prev.next = slow.next
      slow.next = null
      return dummyHead.next
    }
    //否则slow和fast同时移动，记录slow的前一个节点prev
    fast = fast.next
    prev = slow
    slow = slow.next
  }
};
