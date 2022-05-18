//对输入的每一行字符串调用这个函数，
function main(str) {
  let [A_B, C] = str.split('=')
  let [A, B] = A_B.split('*')
  let AB = parseInt(A) * parseInt(B)//A*B
  const AL = A.length
  const BL = B.length
  const CL = C.length
  const ABL = AB.length
  //首先确定A，B相乘的上下界
  const upper = parseInt('9'.repeat(AL)) * parseInt('9'.repeat(BL))
  const lower = parseInt('1' + '0'.repeat(AL)) * parseInt('1' + '0'.repeat(BL))
  //判断C的长度是否在上下界内
  if (CL > upper.toString().length || CL < lower.toString().length) return -1

  //找到A,B中的较大值
  let max = Math.max(A, B)
  let min = Math.min(A, B)
  const gap = parseInt(AB) - parseInt(C)
  //对于AB和C的差值，先改变小的数补齐
  if ()
    const max_mul = gap / max
  const max_yu = gap % max
}