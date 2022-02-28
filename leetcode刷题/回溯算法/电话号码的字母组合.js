/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length == 0) {
    return []
  }
  let res = []
  //数字到字母的哈希表
  const map = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
  }

  function helper(path) {
    let len = path.length
    if (len == digits.length) {
      res.push(path)
      return
    }
    //横向
    for (let i = 0; i < map[digits[len]].length; i++) {
      helper(path + map[digits[len]][i])
    }
  }
  helper('')
  return res
};

console.log(letterCombinations('5678'));