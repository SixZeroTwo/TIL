/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
//ASCII码相减
var findTheDifference = function (s, t) {
  let asc = 0
  for (let i of t) {
    asc += i.charCodeAt()
  }
  for (let j of s) {
    asc -= j.charCodeAt()
  }
  return String.fromCharCode(asc)
};
//位运算
var findTheDifference = function (s, t) {
  let asc = 0
  for (let i of t) {
    asc ^= i.charCodeAt()
  }
  for (let j of s) {
    asc ^= j.charCodeAt()
  }
  return String.fromCharCode(asc)
};
console.log(findTheDifference('abc', 'abce'));