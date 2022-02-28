//栈的封装
export default class Stack {
    //栈的属性（元素）
    constructor(items) {
        this.items = items//items是一个Array
    }
    //栈的操作
    //push
    push(element) {
        this.items.push(element)
    }
    //pop返回栈顶元素（改变栈结构）
    pop() {
        return this.items.pop()
    }
    //peek查看栈顶元素（不改变栈结构）
    peek() {
        return this.items[this.items.length - 1]
    }
    //isEmpty
    isEmpty() {
        return !this.items.length
    }

    //toString
    toString() {
        this.items.toString()
    }

    //size
    size() {
        return this.items.length
    }
}