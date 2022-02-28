/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/* var solveSudoku = function (board) {
  function isValid(row, col, val, board) {
    let len = board.length
    // 行不能重复
    for (let i = 0; i < len; i++) {
      if (board[row][i] === val) {
        return false
      }
    }
    // 列不能重复
    for (let i = 0; i < len; i++) {
      if (board[i][col] === val) {
        return false
      }
    }
    let startRow = Math.floor(row / 3) * 3
    let startCol = Math.floor(col / 3) * 3

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) {
          return false
        }
      }
    }

    return true
  }
  let res = null
  back()
  function back() {
    //两个for循环
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[0].length; c++) {

        if (board[r][c] !== '.') continue
        //for循环填入1-9中的合法数字
        for (let i = 1; i <= 9; i++) {
          if (isValid(r, c, `${i}`, board)) {
            board[r][c] = `${i}`
            //找到合适的立即返回true，说明这条分支能走完
            if (back()) {
              return true
            }
            //回溯
            board[r][c] = '.'
          }
        }
        //1-9的数字全部无法生效，返回false，说明这条分支已经走不通了
        return false


      }
    }
    //遍历完成，没有返回false说明找到了合适的棋盘摆放
    return true


  }
  return board
} */

/* //递归实现
var solveSudoku = function (board) {
  function isValid(row, col, val, board) {
    let len = board.length
    // 行不能重复
    for (let i = 0; i < len; i++) {
      if (board[row][i] === val) {
        return false
      }
    }
    // 列不能重复
    for (let i = 0; i < len; i++) {
      if (board[i][col] === val) {
        return false
      }
    }
    let startRow = Math.floor(row / 3) * 3
    let startCol = Math.floor(col / 3) * 3

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] === val) {
          return false
        }
      }
    }

    return true
  }
  let res = null
  back(0, 0)
  function back(row, col, map) {
    //终止条件
    for (let i = 1; i <= 9; i++) {
      if (isValid(r, c, `${i}`, map)) {
        map[r][c] = `${i}`
        board =                              
          //回溯
          board[r][c] = '.'
      }
    }

  }
  return board
} */


let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
console.log(solveSudoku(board));