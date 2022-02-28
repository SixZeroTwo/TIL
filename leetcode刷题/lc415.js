/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let p1 = num1.length - 1
    let p2 = num2.length - 1
    let up = 0
    let add = 0
    let ans = []
    //外层循环，当两个字符串都从后往前遍历完成，且无进位
    while (p1 >= 0 || p2 >= 0 || up > 0) {
        const x = p1 >= 0 ? num1.charAt(p1) - '0' : 0
        const y = p2 >= 0 ? num2.charAt(p2) - '0' : 0
        add = (x + y + up) % 10
        up = Math.floor((x + y + up) / 10)
        ans.unshift(add)
        p1--
        p2--
    }
    return ans.join('')

};
console.log(addStrings('123', '11'));