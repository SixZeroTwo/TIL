import Queue from "./Queue";

export default function passGame(persons, number) {
    //传入数组，返回passGame最后的那个人，
    let queue = new Queue()
    let discard = []
    let count = 0
    queue.items = persons
    while (queue.size() !== 1) {
        count++
        if (count % number !== 0) {
            let temp = queue.dequeue()
            queue.enqueue(temp)
        }
        else {
            let temp = queue.dequeue()
            discard.push(temp)
        }
    }
    return queue.front()
}