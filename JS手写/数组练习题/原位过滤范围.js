let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1)
      i--
    }
  }
}
console.log(arr); // [3, 1]