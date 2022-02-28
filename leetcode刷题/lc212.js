/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
    //获取board大小，m行n列
    let m = board.length
    let n = board[0].length
    //将board内的单词转化为map，提高查找指定单词的效率
    let map = new Map()
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            let places = map.get(j)
            if (!places) { map.set(board[i][j], [[i, j]]) }
            else {
                map.set(board[i][j], places.push([i, j]))
            }
        }
    }
    let result = []

    //定义迭代函数，用来查找指定row、col下的某个字母是否存在，以及在board对应的相邻位置该字母的下一字母是否存在
    const search = function (row, col, word, wordIndex) {
        //判断row和col的合法性
        if (row < 0 || row >= m || col < 0 || col >= n) {
            return false
        }
        //终止条件，该单词已搜索完毕，返回true
        if (!word[wordIndex]) {
            return true
        }
        //判断该位置是否存在要找的单词
        if (word[wordIndex] !== board[row][col]) {
            return false
        }
        //如果该单词是最后一个单词则返回true
        if (wordIndex === word.length - 1) {
            return true
        }
        //判断四周是否有下一个（上下左右）,存在一条通路则返回true
        if (search(row - 1, col, word, wordIndex + 1)) {
            return true
        }
        if (search(row + 1, col, word, wordIndex + 1)) {
            return true
        }
        if (search(row, col - 1, word, wordIndex + 1)) {
            return true
        }
        if (search(row, col + 1, word, wordIndex + 1)) {
            return true
        }

        //不存在通路且不是最后一个单词，返回false
        return false
    }

    //取出words里面的每个word
    for (let index = 0; index < words.length; index++) {
        //找出word的首字母的每个位置，遍历
        let charPlaces = map.get(words[index][0])
        if (charPlaces) {
            for (let t = 0; t < charPlaces.length; t++) {
                let r = charPlaces[t][0]
                let c = charPlaces[t][1]
                if (search(r, c, words[index], 0)) {
                    result.push(words[index])
                    break
                }
            }
        }
    }
    return result
};

let board = [["a"]]

let words = ["a"]
console.log(findWords(board, words));