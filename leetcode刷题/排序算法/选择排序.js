function selectionSort(arr) {
  function swap(a, b) {
    let temp = arr[b];
    arr[b] = arr[a];
    arr[a] = temp;
  }
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    swap(i, minIndex);
  }
}