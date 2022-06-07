
// Definition for a Node.
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
};


/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  //如果被访问过
  if (map.has(head)) return map.get(head)
  let newHead = new Node(head.val)
  //将深拷贝放入map中，破除循环引用
  map.set(head, newHead)
  newHead.next = copyRandomList(head.next)
  newHead.random = copyRandomList(head.random)
  //返回对该节点的深拷贝
  return newHead
};
var map = new Map

let a1 = new Node(7)
let a2 = new Node(13)
let a3 = new Node(11)
let a4 = new Node(10)
let a5 = new Node(1)
a1.next = a2
a1.random = null
a2.next = a3
a2.random = a1
a3.next = a4
a3.random = null
a4.next = a5
a4.random = a3
a5.random = a1

let ans = copyRandomList(a1)
console.log(ans); 