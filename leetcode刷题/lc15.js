/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    //当nums的长度不足三个时，返回[]
    if (nums.length < 3) {
        return []
    }
    //一层循环遍历
    let result = []
    nums = nums.sort((a, b) => a - b)//数组排序
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) {
            return result
        }
        //去重
        while (i > 0 && nums[i] === nums[i - 1]) {
            i++
        }
        //左右指针法
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            //判断三元组是否满足条件
            if (nums[i] + nums[l] + nums[r] === 0) {
                result.push([nums[i], nums[l], nums[r]])
                //判断下一个是否为相同解
                l++
                r--
                while (l < r && nums[l - 1] === nums[l]) {
                    l++
                }
                while (l < r && nums[r + 1] === nums[r]) {
                    r--
                }
            }
            else if (nums[i] + nums[l] + nums[r] > 0) {
                r--
            }
            else if (nums[i] + nums[l] + nums[r] < 0) {
                l++
            }
        }
    }
    return result
};
let nums = [-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]
console.log(threeSum(nums));