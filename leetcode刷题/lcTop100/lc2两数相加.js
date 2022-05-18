var addTwoNumbers = function (l1, l2) {
  //进位
  let upper = 0
  //返回的链表
  let dummyHead = { next: null }
  let head = dummyHead
  //循环直到两个链表都访问完成并且进位为空
  while (l1 || l2 || upper == 0) {
    //新建一个节点
    let node = new ListNode()
    //当前节点赋值
    l1Val = l1 ? l1.val : 0
    l2Val = l2 ? l2.val : 0
    let curVal = (l1Val + l2Val + upper)
    node.val = curVal % 10
    //将当前节点加入到返回的链表中，并更新head
    head.next = node
    head = node
    //更新upper
    upper = curVal >= 10 ? 1 : 0
    //进到下一个
    l1 = l1 ? l1.next : l1
    l2 = l2 ? l2.next : l2
  }
  return dummyHead.next
};