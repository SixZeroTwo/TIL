import DoubLinkedList from "./DoubLinkedList";

let dll = new DoubLinkedList()
//验证append
dll.append('node1')
dll.append('node2')
dll.append('node3')
dll.append('node4')
dll.append('node5')
console.log(dll);
//验证insert
dll.insert(6, 'node6')
dll.insert(1, 'node0')
dll.insert(3, 'inserted node')
console.log(dll);
//验证get indexOf 
console.log(dll.get(2));
console.log(dll.indexOf('node0'));
//验证removeAt
dll.removeAt(1)
console.log(dll);
dll.removeAt(dll.length)
console.log(dll);
dll.removeAt(3)
console.log(dll);

//验证remove
dll.remove('node4')
console.log(dll);
//update
dll.update('node changed', dll.length)
console.log(dll);