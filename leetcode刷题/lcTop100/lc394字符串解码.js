/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
  return visit(s)
  function visit(s) {
    //递归，终止条件为空字符串
    //if (s == '') return ''
    let res = ''
    //本层，每次找到数字，找它对应的括号范围，放入递归函数
    let i = 0
    while (i < s.length) {
      //字母
      if ('a' <= s[i] && s[i] <= 'z') {
        res += s[i++]
        //i++
      }
      //数字
      else if ('0' <= s[i] && s[i] <= '9') {
        //往后找到所有数字
        let num = ''
        while ('0' <= s[i] && s[i] <= '9') {
          num += s[i++]
          //i++
        }
        //变成数字
        num = parseInt(num)
        //找到括号
        let count = -1
        let l = i//此时左括号对应数字后面一位
        let r = null
        i++//往后看
        while (count != 0) {
          //遇到右括号则count++，遇到左括号则count--
          if (s[i] == ']') count++
          else if (s[i] == '[') count--
          i++
        }
        r = i - 1
        tempRes = visit(s.slice(l + 1, r))
        for (let j = 0; j < num; j++) {
          res += tempRes
        }
      }
    }
    return res
  }
};

console.log(decodeString("3[a2[c]]"))