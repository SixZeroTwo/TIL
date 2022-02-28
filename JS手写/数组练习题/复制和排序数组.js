let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
function copySorted(arr) {
  let sorted = arr.slice()//slice()可以创建数组副本
  sorted.sort()
  return sorted
}
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr); // HTML, JavaScript, CSS (no changes)