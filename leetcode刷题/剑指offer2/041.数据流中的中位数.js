/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.container = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.container.push(num)
  this.container.sort((a, b) => a - b)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.container.length % 2) {
    return this.container[Math.floor(this.container.length / 2)]
  }
  else {
    return (this.container[Math.floor(this.container.length / 2)] + this.container[Math.ceil(this.container.length / 2)]) / 2
  }
};


/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */