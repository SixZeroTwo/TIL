/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  let root = new ListNode()//傀儡节点
  root.next = head
  //左，右，左前，右前节点
  let listPrev = null
  let listNext = null
  let listR = null
  let listL = null
  let count = 0
  let prev = null
  let cur = root
  let next = null
  //进入遍历
  while (count <= right) {
    next = cur.next
    //拿到待翻转部分的左、右、左前、右后
    if (count === left - 1) {
      listPrev = cur
    }
    if (count === left) {
      listL = cur
    }
    if (count === right) {
      listR = cur
      listNext = next
    }
    //待反转的部分链表     
    if (count >= left + 1 && count <= right) {
      cur.next = prev
    }
    prev = cur
    cur = next
    count++
  }
  //处理反转部分的头尾
  listL.next = listNext
  listPrev.next = listR
  //返回傀儡节点的next
  return root.next
};