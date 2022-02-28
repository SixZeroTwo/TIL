import Stack from './Stack'
export default function dec2bin(dec) {
    let stack = new Stack([])
    for (; dec > 0; dec = Math.floor(dec / 2)) {
        stack.push(dec % 2)
    }
    let bin = ''
    while (!stack.isEmpty()) {
        bin += stack.pop()
    }
    return bin
}