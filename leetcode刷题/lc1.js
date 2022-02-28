/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = new Map()
    //该方法可以避免两个相同的数在map中key值冲突的问题
    //遍历nums,每一个元素为num，查看是否存在target-num
    for (let i = 0; i < nums.length; i++) {
        let x = map.get(target - nums[i])
        if (x !== undefined) {
            return [i, x]
        }
        map.set(nums[i], i)
    }
};
let nums = [2, 7, 11, 15]
console.log(twoSum(nums, 9));