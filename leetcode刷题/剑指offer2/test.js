function AIncludesB(A, B) {
  //A:number[][]
  //B:number[]
  for (let item of A) {
    if (item.join('') == B.join('')) return true
  }
  return false
}

let a = [[1, 2], [1, 3], [1, 4]]
let b = [1, 3]

AIncludesB(a, b)