/**
 * Initialize your data structure here.
 */
//每个节点数组的第一位表示该位是否为结束位，1表示是结束位
var Trie = function () {
  this.trie = {}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  //将word拆分，从头开始查看
  let wordArr = word.split('')
  let trie = this.trie
  for (let i = 0; i < wordArr.length; i++) {
    let char = wordArr[i]
    //如果不存在char则放入
    if (trie[char] == undefined) trie[char] = i == wordArr.length - 1 ? [1, {}] : [0, {}]
    else {
      if (i == wordArr.length - 1) trie[char][0] = 1
    }
    //更新trie
    trie = trie[char]
  }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  //将word拆分，从头开始查询
  //将word拆分，从头开始查看
  let wordArr = word.split('')
  let trie = this.trie
  for (let i = 0; i < wordArr.length; i++) {
    let char = wordArr[i]
    //如果不存在char或者当char是最后一位且没有结束标志则直接返回false
    if (trie[char] == undefined || (i == wordArr.length - 1 && trie[char][0] != 1)) return false
    //更新trie
    trie = trie[char]
  }
  return true
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  //将word拆分，从头开始查看
  let wordArr = prefix.split('')
  let trie = this.trie
  for (let i = 0; i < wordArr.length; i++) {
    let char = wordArr[i]
    //如果不存在char则直接返回false
    if (trie[char] == undefined) return false
    //更新trie
    trie = trie[char]
  }
  return true
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */