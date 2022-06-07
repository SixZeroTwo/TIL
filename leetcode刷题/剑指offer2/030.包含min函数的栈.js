/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.minS = []
  this.S = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.S.push(x)
  if (this.minS.length) this.minS.push(Math.min(this.min(), x))
  else this.minS.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.minS.pop()
  return this.S.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.S[this.S.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.min = function () {
  return this.minS[this.minS.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */