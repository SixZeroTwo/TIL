/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
    /*     解题思路：显然K的值肯定在 [min(piles[i]),max(piles[i])]的区间内。
        将猴子吃香蕉的动作写成函数，输入K，h，piles，返回是否吃完了香蕉（是则返回true，否则返回false）。
        二分查找K，找到使得所有香蕉在h小时内吃完的最小K值。 */
    var sums = 0;
    var maxVal = Math.max.apply(null, piles);
    var minVal = Math.min.apply(null, piles);
    piles.forEach(value => sums += value);
    var clone = function (obj) {
        if (obj === null) return null
        if (typeof obj !== 'object') return obj;
        if (obj.constructor === Date) return new Date(obj);
        if (obj.constructor === RegExp) return new RegExp(obj);
        var newObj = new obj.constructor();  //保持继承链
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {   //不遍历其原型链上的属性
                var val = obj[key];
                newObj[key] = typeof val === 'object' ? arguments.callee(val) : val; // 使用arguments.callee解除与函数名的耦合
            }
        }
        return newObj;
    };
    function pilesFinished(k) {
        var bananas = 0;
        var temp = clone(piles);
        for (let hour = 0, i = 0; hour < h; hour++) {
            temp[i] -= k;
            if (temp[i] <= 0) {
                bananas += k + temp[i];
                i++;
            }
            else {
                bananas += k;
            }
            if (i == temp.length) {
                break;
            }

        }
        //现在的bug在于temp的值会不断变化(已解决（深度拷贝）)
        if (bananas == sums) {
            return true;
        }
        else {
            return false;
        }
    }
    //二分查找k
    var left = minVal;
    var right = maxVal;
    while (left < right) {
        var mid = parseInt(left + (right - left) / 2);
        console.log("k:", mid);
        if (pilesFinished(mid) == true) {
            right = mid;
        }
        else {
            left = mid + 1;
        }

    }
    return left;
};