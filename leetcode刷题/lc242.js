/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
//错了
var isAnagram = function (s, t) {
    //首先判断s和t的长度是否相等
    if (s.length !== t.length) {
        return false
    }
    //建立哈希表
    const table = {}
    //遍历s字符串，如果该字母没key，则value置1，如果有key，则value+1
    for (let letter of s) {
        table[letter] ? table[letter]++ : table[letter] = 1
    }
    //遍历t字符串，如果该字母在table中没有key或对应的value值--后小于0，则return false
    for (let letter of t) {
        if (!table[letter] || --table[letter] < 0) {
            return false
        }
    }
    return true
};

console.log(isAnagram("rat", "car"));