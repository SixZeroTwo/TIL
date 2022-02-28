/* 题目描述：

实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去 */

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    //x的平方根思路：mid=x/2取整，二分查找找到满足mid*mid<=x的最大mid值，该mid值即为所求的返回值
    //首先判断x是不是小与1的数
    while (x < 1) {
        return 0;
    }
    //x大于1时，利用以下的二分查找算法可以使left和right指向临界的两个整数
    var left = 0;
    var right = x;
    while (left < right) {
        var mid = Math.ceil(left + (right - left) / 2);
        if (mid * mid <= x) {
            left = mid;
        }
        else {
            right = mid - 1;
        }
    }
    return left;
    /*  if(left*left<=x & right*right>x){
         return left;    
     }
     else if(left*left<=x & right*right<=x){
         return right;
     } */
};