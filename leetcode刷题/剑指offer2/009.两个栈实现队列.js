var CQueue = function () {
  this.pushStack = []
  this.shiftStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  //在pushstack中操作
  if (this.shiftStack.length) {
    for (let i = 0, len = this.shiftStack.length; i < len; i++) {
      this.pushStack.push(this.shiftStack.pop())
    }
  }
  this.pushStack.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  //在shiftStack中操作
  if (this.pushStack.length) {
    for (let i = 0, len = this.pushStack.length; i < len; i++) {
      this.shiftStack.push(this.pushStack.pop())
    }
  }
  if (!this.shiftStack.length) return -1
  return this.shiftStack.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */