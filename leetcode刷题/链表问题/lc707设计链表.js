var MyLinkedList = function () {
  this.dummyHead = { next: null }
  this.tail = null
  this.length = 0
};

var Node = function (val, next) {
  this.val = val != undefined ? val : undefined
  this.next = next ? next : null
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let count = 0
  let cur = this.dummyHead.next
  while (count <= index && cur) {
    if (count == index) return cur.val
    cur = cur.next
    count++
  }
  return -1
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  let node = new Node(val)
  node.next = this.dummyHead.next
  this.dummyHead.next = node
  //如果是空链表状态下加一个头节点，则需要改变tail
  if (!this.tail) this.tail = node
  this.length++
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let node = new Node(val)
  //空链表状态下加入
  if (!this.tail) this.addAtHead(val)
  //非空状态下加入
  else {
    this.tail.next = node
    this.length++
  }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index <= 0) this.addAtHead(val)
  else if (index == this.length) this.addAtTail(val)
  else if (index > 0 && index < this.length) {
    let node = new Node(val)
    let count = 0
    let head = this.dummyHead.next
    let prev = this.dummyHead
    while (count <= index && head) {
      if (count == index) {
        //插入head之前
        prev.next = node
        node.next = head
        //length++
        this.length++
        return
      }
      //更新count和prev和head
      count++
      prev = head
      head = head.next
    }
  }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (this.length > 0 && index >= 0 && index < this.length) {
    let count = 0
    let head = this.dummyHead.next
    let prev = this.dummyHead
    while (count <= index && head) {
      if (count == index) {
        //删除head
        prev.next = head.next
        //如果当前count为尾
        if (count == this.length - 1)
          this.tail = prev == this.dummyHead ? null : prev
        //length--
        this.length--
        return
      }
      //更新count和prev和head
      count++
      prev = head
      head = head.next
    }
  }

};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */