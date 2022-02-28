/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    //返回值和初始参数
    const Length = n
    let result = []
    let subresInit = ['....', '....', '....', '....']
    let record = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
    //定义递归函数
    const placeQ = function (subres, level, count) {

        const replaceStr1 = (str, index, char) => {
            const strAry = str.split('');
            strAry[index] = char;
            return strAry.join('');
        }
        if (count === n) {
            result.push(subres)
            record = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
            return
        }
        //遍历当前层的所有格子
        for (let i = 0; i < Length; i++) {
            //判断是否能置Q，如果是则将该格子的record矩阵行列和撇和捺置1
            if (record[level][i] === 0) {

                subres[level] = replaceStr1(subres[level], i, 'Q')
                record[level] = [1, 1, 1, 1]
                for (let n = 0; i < Length; i++) {
                    record[n][i] = 1
                }
                for (let j = 0; j < Length; j++) {
                    for (let k = 0; k < Length; k++) {
                        if (j + k === level + i) {
                            record[j][k] = 1
                        }
                        if (j - k === level - i) {
                            record[j][k] = 1
                        }
                    }
                }
                placeQ(subres, level + 1, count + 1)
            }
        }
    }
    placeQ(subresInit, 0, 0)
    return result
};
console.log(solveNQueens(4));