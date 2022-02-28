//以下是没有申清题意的解法，并不需要反链表，按顺序进行进位即可
/* var addTwoNumbers = function (l1, l2) {
    const reverse = function (node, prev) {
        //递归终止，当node.next为空
        if (!node) {
            return prev
        }
        let newl = reverse(node.next, node)
        node.next = prev
        return newl
    }
    //反转l1和l2
    let newL1 = reverse(l1, null)
    let newL2 = reverse(l2, null)
    //一起遍历
    let node1 = newL1
    let node2 = newL2

    let prev = null
    let up = 0//进位
    let res = null
    while (node1 !== null || node2 !== null) {
        let node = new ListNode()
        if (prev) {
            prev.next = node
        }
        else {
            res = node  
        }

        if (node1 && node2) {
            let count = node1.val + node2.val
            node.val = count % 10 + up
            up = count >= 10 ? 1 : 0
        }
        else {
            let count = up + (node1 ? node1.val : 0 || node2 ? node2.val : 0)
            node.val = count % 10
            up = count >= 10 ? 1 : 0
        }
        prev = node

        node1 = node1 ? node1.next : null
        node2 = node2 ? node2.next : null
    }
    return res
}; */
var addTwoNumbers = function (l1, l2) {
  let addOne = 0 // 进位
  let sum = new ListNode('0')//空节点
  let head = sum
  while (addOne || l1 || l2) {
    let val1 = l1 !== null ? l1.val : 0
    let val2 = l2 !== null ? l2.val : 0
    let r1 = val1 + val2 + addOne
    addOne = r1 >= 10 ? 1 : 0
    sum.next = new ListNode(r1 % 10)
    sum = sum.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return head.next//返回实际的首节点
};
