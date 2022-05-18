//测试了一下归并排序
/* function GBsort(arr) {
  //终止条件
  if (arr.length == 1) return arr
  //将数组分为左右两块
  let mid = Math.floor((arr.length - 1) / 2)
  return merge(GBsort(arr.slice(0, mid + 1)), GBsort(arr.slice(mid + 1, arr.length)))
}

function merge(leftArr, rightArr) {
  let l = 0, r = 0
  let lL = leftArr.length, rL = rightArr.length
  let res = []
  while (l < lL || r < rL) {
    //比较左右指针
    //左右指针都存在
    if (l < lL && r < rL) {
      if (leftArr[l] <= rightArr[r]) {
        res.push(leftArr[l++])
      }
      else res.push(rightArr[r++])
    }
    //如果左指针已经走完
    else if (l == lL && r < rL) {
      while (r < rL) {
        res.push(rightArr[r++])
      }
    }
    else if (l < lL && r == rL) {
      while (l < lL) {
        res.push(leftArr[l++])
      }
    }
  }
  return res
} */

//console.log(GBsort([19, 97, 9, 17, 1, 8]))

//对链表进行归并排序


function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  //终止条件
  if (head.next == null) return head
  //快慢指针决定中间点,并将链表断开
  let slow = head, fast = head
  //考虑到链表长度的单双数情况
  while (fast.next && fast.next.next) {
    fast = fast.next.next
    slow = slow.next
  }
  let rightHead = slow.next
  slow.next = null
  return mergeList(sortList(head), sortList(rightHead))
};

function mergeList(lHead, rHead) {
  let head = lHead.val <= rHead.val ? lHead : rHead
  let prev = null
  while (lHead && rHead) {

    if (lHead.val <= rHead.val) {
      if (prev) prev.next = lHead
      prev = lHead
      lHead = lHead.next
    }
    else {
      if (prev) prev.next = rHead
      prev = rHead
      rHead = rHead.next
    }
  }
  if (!lHead && rHead) {
    prev.next = rHead
  }
  if (lHead && !rHead) {
    prev.next = lHead
  }
  return head
}
let a1 = new ListNode(4)
let a2 = new ListNode(2)
let a3 = new ListNode(1)
let a4 = new ListNode(3)
a1.next = a2
a2.next = a3
a3.next = a4
let b = sortList(a1)
print('111')