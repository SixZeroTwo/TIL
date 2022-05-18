var MinStack = function () {
  this.stack = []
};
var Node = function (val, min) {
  this.val = val
  this.min = min
}
/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  //放入节点，比较当前值与栈顶的最小值大小

  if (this.top() == undefined) {
    this.stack.push(new Node(val, val))
  }
  else {
    this.stack.push(new Node(val, Math.min(this.getMin(), val)))
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  if (this.stack.length) return this.stack[this.stack.length - 1].val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.stack[this.stack.length - 1].min
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
var obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-3)
obj.pop()
var param_3 = obj.top()
var param_4 = obj.getMin()
print('1')