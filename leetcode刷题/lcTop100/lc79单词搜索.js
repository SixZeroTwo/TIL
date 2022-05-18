/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  //思路：首先在棋盘中匹配首字母，匹配到之后进入全单词匹配函数
  //参数说明：行、列、当前要匹配的字母位置
  function Compare(r, c, p) {
    //终止条件
    if (map[r][c]) return false
    if (p == word.length) return true
    //在当前位置，上下左右寻找下一个匹配的字母
    map[r][c] = 1
    //上/下/左/右
    if ((r - 1 >= 0 && board[r - 1][c] == word[p] && Compare(r - 1, c, p + 1))
      || (r + 1 < m && board[r + 1][c] == word[p] && Compare(r + 1, c, p + 1))
      || (c - 1 >= 0 && board[r][c - 1] == word[p] && Compare(r, c - 1, p + 1))
      || (c + 1 < n && board[r][c + 1] == word[p] && Compare(r, c + 1, p + 1))
    ) return true
    map[r][c] = 0
    return false
  }

  let m = board.length
  let n = board[0].length
  let map = new Array(m).fill(0).map(() => new Array(n).fill(0))
  let firsChar = word[0]
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      //如果当前字母匹配到了首字母
      if (board[i][j] == firsChar && Compare(i, j, 1)) return true
    }
  }
  return false
};
