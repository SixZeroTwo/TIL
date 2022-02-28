let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...

function shuffle(arr) {
  arr.sort((a, b) => {
    if (Math.random() > 0.5) {
      return 1
    }
    else {
      return -1
    }
  })
  console.log(arr);
}