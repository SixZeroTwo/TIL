/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
/* var merge = function (nums1, m, nums2, n) {
    //判断nums1或nums2有一个为空的特殊情况
    if (n === 0) {

    }
    else if (m === 0) {
        nums1 = null
        nums1 = nums2

    }

    else {
        let i = 0
        let l = 0
        while (i < n) {
            let r = m - 1 + i
            let toBeComp = nums2[i]
            //对nums1[0:m-1}进行二分查找，找到toBeComp要插入的位置，将插入位置之后的元素整体后移
            let position = binSearch(nums1, l, r, toBeComp)
            l = position
            //将整体position后整体后移
            let val = m + i
            while (val > position) {
                nums1[val] = nums1[val - 1]
                val--
            }
            nums1[position + 1] = toBeComp
            console.log(nums1);
            //nums2的指针++
            i++
        }
    }

};
function binSearch(nums, l, r, compare) {
    //终止条件
    if (l == r) {
        return l
    }
    let c = l + Math.ceil((r - l) / 2)
    if (compare >= nums[c]) {
        l = c
    }
    else {
        r = c - 1
    }
    return binSearch(nums, l, r, compare)
} */
var merge = function (nums1, m, nums2, n) {
    //判断nums1或nums2有一个为空的特殊情况
    if (n === 0) {

    }
    else if (m === 0) {
        temp = nums2
        nums1 = temp
    }

    else {
        //双指针逆向比较大小，从尾到首依次放入nums1
        let p1 = m - 1
        let p2 = n - 1
        let p3 = m + n - 1
        //依次往前遍历
        while (p1 > 0 || p2 > 0) {
            //比较大小
            if (nums1[p1] >= nums2[p2]) {
                nums1[p3] = nums1[p1]
                p1--
            }
            else {
                nums1[p3] = nums2[p2]
                p2--
            }
            p3--
        }
    }
};

let nums1 = [0], m = 0, nums2 = [2, 5, 6], n = 3
merge(nums1, m, nums2, n)
console.log(nums1);
