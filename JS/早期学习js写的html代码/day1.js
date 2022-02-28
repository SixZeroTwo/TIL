var mySum = function (...rest) {
    var sum = 0;
    for (let i of rest) {
        sum += i;
    }
    return sum;
};
console.log(mySum(1, 2, 3, 4, 5));