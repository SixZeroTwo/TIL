import { Tree } from "./Tree";
const tree = new Tree();
tree.insert(11);
tree.insert(7);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(19);
console.log(tree);

//遍历
//先序遍历
//tree.pre()
//中序
//tree.mid()
//后序
tree.post()

//最大最小值
console.log('最小值' + tree.min());
console.log('最大值' + tree.max());

//search
console.log(tree.search(100));
console.log(tree.search(25));

//remove
console.log(tree.remove(25));
console.log(tree.search(25));
console.log(tree.remove(7));
console.log(tree.search(7));