/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    //将version1和version2转换成数组形式（以.为界）
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    //遍历直至v1和v2遍历完
    let i = 0
    while (i < v1.length || i < v2.length) {
        //判断是否修订号为undefined，如果是则变为字符串
        let cor1 = v1[i] ? v1[i] : ''
        let cor2 = v2[i] ? v2[i] : ''
        //反转字符串
        cor1 = cor1.split('').reverse().join('')
        cor2 = cor2.split('').reverse().join('')
        //比较大小，如果修订号相同则继续比较
        //按位从右往左比较，短的修订号补0
        let j = Math.max(cor1.length, cor2.length)
        while (--j >= 0) {
            let char1 = cor1.charAt(j) ? cor1.charAt(j) : '0'
            let char2 = cor2.charAt(j) ? cor2.charAt(j) : '0'
            if (char1 > char2) {
                return 1
            }
            if (char1 < char2) {
                return -1
            }
        }
        i++
    }
    return 0
};
let version1 = '0.1'
let version2 = '1.1'
console.log(compareVersion(version1, version2));