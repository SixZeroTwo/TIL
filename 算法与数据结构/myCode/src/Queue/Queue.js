//封装队列
export default class Queue {
    constructor() {
        this.items = []
    }
    //enqueue进入队列
    enqueue(elem) {
        this.items.push(elem)
    }
    //dequeue出队列
    dequeue() {
        return this.items.shift()
    }
    //front 查看队列的第一个元素
    front() {
        if (!this.items.isEmpty) {
            return this.items[0]
        }
    }
    //isEmpty
    isEmpty() {
        return this.items.length === 0
    }
    //size
    size() {
        return this.items.length
    }
}