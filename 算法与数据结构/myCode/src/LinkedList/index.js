import LinkedList from "./LinkedList";

const ll = new LinkedList()
console.log(ll);
ll.append('node1')
ll.append('node2')
ll.append('node3')
ll.append('node4')
ll.append('node5')
console.log(ll);
ll.insert('inserted node', 3)
console.log(ll);
console.log(ll.get(4));
console.log(ll.indexOf('inserted node'));
ll.update(3, 'inserted node changed')
console.log(ll.get(3));
ll.removeAt(3)
console.log(ll);
ll.removeAt(1)
console.log(ll);
ll.remove('node2')
console.log(ll);