import { Graph } from "./Graph";

let graph = new Graph()

let myVertexes = ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
for (let i = 0; i < myVertexes.length; i++) {
    graph.addVertex(myVertexes[i])
}
// 添加边
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

//toString方法测试
console.log(graph.toString());

//BFS测试
/* let result = ''
graph.BFS(graph.vertexes[0], function (v) {
    result += v
})
alert(result) */

//DFS
let result = ''
graph.DFS(graph.vertexes[0], function (v) {
    result += v
})
alert(result)