/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  let sL = s.length
  let tL = t.length
  //特殊情况
  if (sL < tL) {
    return ''
  }
  if (sL === tL && s === t) {
    return s
  }
  //用来记录子串索引位置的队列
  let queue = []
  //记录t中字母出现的次数和总长度
  let map = { count: tL }
  for (let char of t) {
    map[char] = char in map ? map[char] + 1 : 1
  }
  let minSub = {
    value: '',
    init: true
  }

  //遍历s
  for (let i = 0; i < sL; i++) {
    //压入直到窗口覆盖所有子串
    if (s[i] in map && map[s[i]] > 0) {
      queue.push(i)
      map.count--
      map[s[i]]--
    }
    //count为0时有新的子串内的字符，可以更新queue
    else if (map.count === 0 && s[i] in map) {
      queue.push(i)
      map.count--
      map[s[i]]--
      while (s[queue[0]] !== s[i]) {
        map[s[queue[0]]]++
        map.count++
        queue.shift()

      }
      map[s[queue[0]]]++
      map.count++
      queue.shift()
    }
    //是否更新minSub
    let windowSub = s.slice(queue[0], queue[queue.length - 1] + 1)
    if ((map.count === 0 && queue.length && windowSub.length < minSub.value.length) || (map.count === 0 && minSub.init === true)) {
      minSub.value = windowSub
    }
  }
  return minSub.value
};

console.log(minWindow("ab", "A"));