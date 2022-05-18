/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  //方法一：链表的值变成数组，再进行回文判断
  //方法二：利用递归的回溯特性，在回来的阶段进行比较
  /*   let H = head
    let res = true
    visit(head)
    function visit(head) {
      if (!head) return
      visit(head.next)
      //本层要做的
      if (!res) return
      if (head.val == H.val) H = H.next
      else res = false
    }
    return res */
  //方法三：快慢指针：
};