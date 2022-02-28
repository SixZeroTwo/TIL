import { Node } from "../LinkedList/LinkedList"
import LinkedList from '../LinkedList/LinkedList'
class DoubNode extends Node {
    constructor(item) {
        super(item)
        this.prev = null
    }
}
export default class DoubLinkedList extends LinkedList {
    constructor() {
        super()
        this.tail = null
    }
    //需要重写的方法
    append(item) {
        const dNode = new DoubNode(item)
        if (!this.head) {
            this.head = dNode
            this.tail = dNode
        }
        else {

            let current = this.tail
            current.next = dNode
            dNode.prev = current
            this.tail = dNode
        }
        this.length++
    }
    insert(position, item) {
        //牵涉到插入位置，首先判断越界问题

        if (position < 1 && position > this.length + 1) {
            throw ('越界')
        }
        const node = new DoubNode(item)
        //分两种情况，插入position 1 和其他

        if (position === 1) {
            //数组为空时
            if (!this.head) {
                console.log('进入了');
                this.head = node
                this.tail = node
            }
            //数组不为空时
            else {
                this.head.prev = node
                node.next = this.head
                this.head = node
            }

        }
        else if (position === this.length + 1) {
            this.append(item)
            //由于调用了append,length需要--
            this.length--
        }
        else {

            //拿到position对应的node元素
            let prev = null
            let current = this.head
            let index = 1
            while (index < position) {

                current = current.next
                prev = current.prev
                index++
            }
            //插入操作
            node.prev = current.prev
            prev.next = node
            current.prev = node
            node.next = current

        }
        this.length++
    }
    removeAt(position) {
        if (position < 1 && position > this.length) {
            return false
        }
        if (position === 1) {
            if (this.length === 1) {
                this.head = null
                this.tail = null
            }
            else {
                this.head = this.head.next
                this.head.prev = null
            }

        }
        else if (position > 1 && position === this.length) {
            this.tail = this.tail.prev
            this.tail.next = null
        }
        else {
            //拿到position对应的node元素
            let current = this.head
            let index = 1
            let previous = null
            while (index < position) {
                previous = current
                current = current.next
                index++
            }
            previous.next = current.next
            current.next.prev = previous

        }
        this.length--
    }
}