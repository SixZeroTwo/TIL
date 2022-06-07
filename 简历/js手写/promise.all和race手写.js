//Promise.all(arr)，返回一个Promise,成功值为数组
Promise.myAll = function (arr) {
  let res = []
  let count = 0
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      Promise.resolve(arr[i]).then(val => {
        res[i] = val
        if (++count == arr.length) resolve(res)
      }).catch(
        err => reject(err)
      )
    }
  })
}

//Promise.race(arr)，返回最先成功的Promise
Promise.myRace = function (arr) {
  return new Promise((resolve, reject) => {
    for (p of arr) {
      Promise.resolve(p).then(data => {
        resolve(data)
      }).catch(err => reject(err))
    }
  })
}
function asyncFn(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time)
    }, time);
  })
}
let arr = [asyncFn(1000), asyncFn(100), asyncFn(10)]
Promise.myRace(arr).then(data => console.log(data))