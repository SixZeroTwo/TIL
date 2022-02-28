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
//数组法，把节点压入数组，通过索引改变节点指向
var removeNthFromEnd = function (head, n) {
  //假的头结点
  let fakeHead = { next: head }
  let nodes = [fakeHead]
  let node = head
  while (node) {
    nodes.push(node)
    node = node.next
  }
  let l = nodes.length - 1
  //拿到倒数第n个节点和他的前级节点
  let target = nodes[l - n + 1]
  let prev = nodes[l - n]
  prev.next = target.next
  //如果删除的是头节点，则返回第二个节点
  if (l === n) {
    return head.next
  }
  //返回头节点
  return head
};