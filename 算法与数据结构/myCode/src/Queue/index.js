import Queue from "./Queue";
import passGame from "./passGame";
import PriorityQueue from "./PriorityQueue";
const queue = new Queue()

queue.enqueue('hello')
queue.enqueue('the')
queue.enqueue('world')

console.log(queue.items);
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.items);

console.log(passGame(['james', 'lily', 'helper', 'judy', 'fucker'], 7));

const PQ = new PriorityQueue()

PQ.enqueue('a', 100)
PQ.enqueue('b', 20)
PQ.enqueue('c', 90)
PQ.enqueue('d', 150)
PQ.enqueue('e', 1000)

PQ.items.forEach(item => {
    console.log(item.element, item.priority);
})