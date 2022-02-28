import Queue from "./Queue";
class QueueElement {
    constructor(element, priority) {
        this.element = element
        this.priority = priority
    }
}
export default class PriorityQueue extends Queue {
    //创建Queue
    enqueue(element, priority) {

        //将传入的元素和优先级封装
        let ele = new QueueElement(element, priority)
        let isInserted = false
        //考虑如何插入
        if (this.isEmpty()) {
            this.items.push(ele)
        }
        else {
            //找到队列中优先值大于ele.priority的第一元素位置，如果有则插入并将 isInserted置true
            for (let i = 0; i < this.items.length; i++) {

                if (ele.priority < this.items[i].priority) {
                    this.items.splice(i, 0, ele)

                    isInserted = true
                    break
                }

            }
            if (!isInserted) {
                this.items.push(ele)
            }

        }
    }
}