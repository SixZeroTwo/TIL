/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  //利用map的有序性实现队列的性质
  this.map = new Map()
  this.capacity = capacity
  this.size = 0
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    let temp = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, temp)
    return temp
  }
  else return -1
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function (key, value) {

  if (this.map.has(key)) {
    this.map.delete(key)
    this.map.set(key, value)
  }
  else {
    if (this.size < this.capacity) {
      this.size++
      this.map.set(key, value)
    }
    else {
      this.map.delete(this.map.keys().next().value)
      this.map.set(key, value)
    }
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/