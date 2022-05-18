// 'aab'  , 'aaab'
function test(s) {

  //重排字符串，保证两两相邻字符不相同，失败输出null
  //处理字符串
  let arr = s.split('')
  const m = arr.length
  //双指针法
  let p1 = 0
  let p2 = 1
  let p3 = p2 + 1
  //当两个指针指向值相同，则p2往后一位交换直到p1和p2不同
  while (p2 < m) {
    while (arr[p1] == arr[p2] && p3 < m) {
      swap(p2, p3++)
    }
    //当p3越界且p1和p2相等，返回null
    if (p3 >= m && arr[p1] == arr[p2]) return null
    p1++
    p2++
    p3 = p2 + 1
  }
  return arr.join('')
  function swap(l, r) {
    let temp = arr[l]
    arr[l] = arr[r]
    arr[r] = temp
  }
}

console.log(test('abcdeaaa'))