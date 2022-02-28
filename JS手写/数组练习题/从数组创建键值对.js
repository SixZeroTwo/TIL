let users = [
  { id: 'john', name: "John Smith", age: 20 },
  { id: 'ann', name: "Ann Smith", age: 24 },
  { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
/* function groupById(users) {
  let newObj = {}
  for (let usr of users) {
    newObj[usr.id] = usr
  }
  return newObj
} */
//调用了reduce方法的方案
function groupById(users) {
  return users.reduce((obj, usr) => {
    obj[usr.id] = usr
    return obj
  }, {})
}
console.log(usersById);
/*
// 调用函数后，我们应该得到：

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/