
export class Node {
    constructor(item) {
        //保存元素
        this.item = item
        //指向下一节点
        this.next = null
    }
}
export default class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    append(item) {
        //Node
        const node = new Node(item)
        //current变量，寻找链表的最后的节点
        let current = this.head
        //判断链表是否为空
        if (this.head) {
            //找到最后一个节点，将其next指向新的节点
            while (current.next !== null) {
                current = current.next
            }
            current.next = node
        }
        else {
            this.head = node
        }
        this.length++
    }

    insert(item, position) {

        //牵涉到插入位置，首先判断越界问题

        if (position < 1 && position > this.length) {
            throw ('越界')
        }
        const node = new Node(item)
        //分两种情况，插入position 0 和其他

        if (position === 1) {
            this.head = node
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
            //插入操作

            node.next = previous.next
            previous.next = node
        }
        this.length++
    }
    get(position) {
        //牵涉到插入位置，首先判断越界问题

        if (position < 1 && position > this.length) {
            throw ('越界')
        }
        let index = 1
        let current = this.head
        while (index < position) {

            current = current.next
            index++
        }
        return current
    }
    indexOf(item) {
        let current = this.head
        let index = 1
        while (current) {
            if (current.item === item) {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }
    removeAt(position) {
        if (position < 1 && position > this.length) {
            throw ('越界')
        }
        if (position === 1) {
            this.head = this.head.next
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
            current.next = null

        }
        this.length--
    }
    update(item, position) {
        if (position < 1 && position > this.length) {
            throw ('越界')
        }
        const result = this.get(position)
        this.get(position).item = item
        return result
        //当然也有更简便的方法：
        /*        this.removeAt(position)
               this.insert(item,position) */
    }
    remove(item) {
        this.removeAt(this.indexOf(item))
    }
    isEmpty() {
        return this.length === 0
    }
    toString() {
        //遍历所有节点item，拼接成字符串
        let current = this.head
        let result = ''
        while (current) {
            result += current.item
            current = current.next
        }
        return result
    }
}