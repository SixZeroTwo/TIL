let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(topSalary(salaries));
function topSalary(salaries) {
  let max = 0
  let men = Object.entries(salaries)
  let res = null
  for (let [name, salary] of men) {
    if (salary > max) {
      max = salary
      res = name
    }
  }
  return res
}