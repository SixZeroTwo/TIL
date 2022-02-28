
function quick(left, right) {
    //选择排序枢纽(选择l ，r ，center的中位数)
    center = Math.floor(list, left, center)
    if (list[left] > list[center]) {
        let temp = list[left]
        list[left] = list[right]
        list[right] = temp
    }
    if (list[center] > list[right]) {
        swap(center, right)
    }
}