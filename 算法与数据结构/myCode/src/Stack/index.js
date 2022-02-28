import Stack from './Stack'
import dec2bin from './dec2bin'
//栈的使用
let stack = new Stack([1, 2, 3, 4, 5, 6, 7])
stack.push(20)
console.log(stack);
stack.push(10)
console.log(stack);
console.log(stack.pop());
console.log(stack)
console.log(stack.peek());
console.log(stack.isEmpty());
stack.toString()
console.log(stack);

//十进制转二进制
const HUNDRED = 100
let bin = dec2bin(HUNDRED)
console.log(bin);
