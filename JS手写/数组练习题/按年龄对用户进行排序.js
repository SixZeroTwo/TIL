let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);
function sortByAge(arr) {
  arr.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    }
    else {
      return -1
    }
  })
}
// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete