function unique(arr) {
  let set = new Set(arr)
  let newArr = []
  for (let item of set) {
    newArr.push(item)
  }
  return newArr
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O