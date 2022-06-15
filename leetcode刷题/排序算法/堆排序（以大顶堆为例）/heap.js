//利用数组表示堆（就是一个完全二叉树）
//堆的几个性质：
//下标为i的节点，左子节点为 2*i+1，右子节点为2*i+2，父亲节点为Math.floor((i-1)/2)

//维护大顶堆
//数组，数组长度，待维护节点下标
//保证三元组内的大小关系，递归维护
function heapify(arr, n, i) {
  let largest = i
  let l = 2 * i + 1
  let r = 2 * i + 2
  if (l < n && arr[l] > arr[i]) {
    largest = l
  }
  if (r < n && arr[r] > arr[largest]) {
    largest = r
  }
  //如果需要交换
  if (largest != i) {
    swap(arr, largest, i)
    //递归维护
    heapify(arr, n, largest)
  }
}


//堆排序
function heapSort(arr, n) {
  if (n == 1) return
  //建堆
  //(类似于冒泡的思想，从堆的最后开始维护，这样才能将最大值一步步交换上去)。
  //从最后一个需要维护的节点开始（也可以从最后开始，但是为了节省时间）
  for (let i = Math.floor((n - 2) / 2); i >= 0; i--) {
    heapify(arr, n, i)
  }
  //堆排序，每次建堆之后交换头尾，并重新排序
  swap(arr, 0, n - 1)
  heapSort(arr, n - 1)
}



//交换数组元素
function swap(arr, l, r) {
  let temp = arr[l]
  arr[l] = arr[r]
  arr[r] = temp
}

let arr = [12, 8, 5, 13, 7, 19]
heapSort(arr, arr.length)
console.log(arr)