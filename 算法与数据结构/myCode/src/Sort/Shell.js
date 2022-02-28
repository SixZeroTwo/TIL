/* function insertSort(list) {
    for (let i = 0; i < list.length; i++) {
        let j = i + 1
        let temp = list[j]
        while (j !== 0) {
            if (temp >= list[j - 1]) {
                list[j] = list[temp]
                break
            }
            else {
                list[j] = list[j - 1]
                j--
                if (j === 0) {
                    list[j] = temp
                }
            }
        }
    }
} */
function shell(list) {
    //设置增量
    let N = list.length
    let gain = Math.floor(N / 2)
    //外层循环，当增量为0时终止循环

    while (gain >= 1) {
        //分组，对每组进行插入排序
        //注意，这里是从每组的第二个元素开始，往前进行插入排序
        for (let i = gain; i < list.length; i++) {
            let j = i
            let temp = list[j]
            while (j >= gain) {
                //temp小与有序部分的最后一个数，换位往前找
                if (temp < list[j - gain]) {
                    list[j] = list[j - gain]
                }
                else {
                    list[j] = temp
                    break
                }
                j -= gain
                if (j < gain) {
                    list[j] = temp
                }
            }
        }
        gain = Math.floor(gain / 2)
    }

}
exports.shell = shell