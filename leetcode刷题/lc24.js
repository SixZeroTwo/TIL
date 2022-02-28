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
    let count = 1
    let newHead = head.next
    let cur = head
    let prev = null
    while (cur && cur.next) {
        let next = cur.next
        if (count === 1) {
            cur.next = next.next
            next.next = cur
            if (prev) {
                prev.next = next
            }
            count++
            prev = next
        }
        else {
            count = 1
            prev = cur
            cur = next
        }


    }
    return newHead
};
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let data = [1, 2, 3, 4]
let list = []
for (let i = 0; i < data.length; i++) {
    list.push(new ListNode(data[i]))
    if (i > 0) {
        list[i - 1].next = list[i]
    }
}
console.log(swapPairs(list[0]));