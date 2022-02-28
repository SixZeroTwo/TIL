/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    //滑动窗口的头尾
    let currentHead = 0
    let currentTail = 0
    //最长不重复子串和当前最长
    let maxS = ''
    let currentMax = ''
    //遍历s
    for (let i = 0; i < s.length; i++) {
        //判断s[i]是否在currentMax中有重复
        let lastI = currentMax.lastIndexOf(s[i])
        //有重复字符的情况
        if (lastI !== -1) {
            //将头指针指向currentMax中最后一个重复字符后一位的位置
            currentHead += currentMax.lastIndexOf(s[i]) + 1
            //将尾指针+1
            currentTail++
            //更新currentMax,String.slice方法取不到尾索引位置的元素
            currentMax = s.slice(currentHead, currentTail)
        }
        else {
            currentMax += s[i]
            currentTail++
        }
        //比较currentMax和maxS
        if (currentMax.length > maxS.length) {
            maxS = currentMax
        }
    }
    return maxS.length
};
let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s));