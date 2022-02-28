/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  //特殊情况
  if (needle.length == 0) {
    return 0
  }
  //构建前缀表
  let next = getNext(needle)
  function getNext(str) {
    //j -- 前缀的末尾，也代表了最长相同前后缀的长度
    //i -- 后缀的末尾
    //此时的前缀就是模板串
    //后缀就是字符串
    let j = 0
    let res = []
    res.push(0)
    for (let i = 1; i < str.length; i++) {
      //j指向第一位之后，如果匹配不上
      while (j > 0 && str[i] != str[j]) {
        j = res[j]
      }
      //如果匹配上了,j++,即最长相同前后缀的长度+1
      if (str[i] == str[j]) {
        j++
      }
      res.push(j)
    }
    return res
  }

  //匹配字符串
  let j = 0
  for (let i = 0; i < haystack.length; i++) {
    //匹配到前缀长度不为0时的字符
    while (j > 0 && needle[j] != haystack[i]) {
      j = next[j - 1]
    }
    //匹配成功则i和j都移动
    if (needle[j] == haystack[i]) {
      j++
    }
    //如果全部匹配（j的大小等于needle的长度），返回i+1-j
    if (j == needle.length) {
      return i + 1 - j
    }
  }
  return -1
};

console.log(strStr('hello', 'll'));