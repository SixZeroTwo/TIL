/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  //方法一
  //哈希表记录频次+两次遍历返回第一次命中的字符
  /*   let map = new Map
    for () { }
    for () { } */

  //方法二
  //哈希表记录是否重复出现+队列清空重复出现的队头
  if (!s.length) return ' '
  let map = new Map
  let queue = []
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], true)
      queue.push(s[i])
    }
    else {
      map.set(s[i], false)
      while (queue.length && !map.get(queue[0])) queue.shift()
    }
  }
  return queue.length ? queue[0] : ' '
};