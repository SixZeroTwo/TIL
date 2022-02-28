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

var reverseList = function (head) {
  /*   
  //迭代法
    //空数组情况
    if (!head) return head
    let prev = null
    let cur = head
    let res = null
    while (cur) {
      let next = cur.next
      //如果下一个为空，说明当前cur为新的头节点
      if (!next) res = cur
      cur.next = prev
      //更新cur和prev
      prev = cur
      cur = next
    }
    return res
     */

  //递归法
  if (!head) return head
  return fn(null, head)

};
const fn = function (prev, cur) {
  //本层递归
  let next = cur.next
  cur.next = prev
  //判断分支
  if (!next) return cur
  else return fn(cur, next)
}