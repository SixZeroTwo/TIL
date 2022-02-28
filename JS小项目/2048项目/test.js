var search = function (nums, target) {
    var left = 0;
    var right = nums.length - 1;
    var mid = left + (right - left) / 2;
    while (nums[left] != target | nums[right] != target | nums[mid] != target) {
        if (nums[mid] < target) {
            [left, mid] = [mid, mid + (right - mid) / 2];
        }
        else {
            [right, mid] = [mid, left + (mid - left) / 2];
        }
        while ((right - left) / 2 == 0) {
            return -1;
        }
    }
    if (nums[left] == target) {
        return left;
    }
    else if (nums[right] == target) {
        return right;
    }
    else if (nums[left] == target) {
        return mid;
    }
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));