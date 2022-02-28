import Dictionay from "../Map/map"
import Queue from "../Queue/queue"
import Stack from '../Stack/Stack'
export class Graph {
    constructor() {
        this.vertexes = [] //顶点
        this.edges = new Dictionay() //边
    }
    addVertex(v) {
        this.vertexes.push(v)
        this.edges.set(v, [])
    }
    addEdge(v1, v2) {
        //无向图加边
        this.edges.get(v1).push(v2)
        this.edges.get(v2).push(v1)
    }
    toString() {
        //转换成邻接表的形式
        //定义一个字符串 用来保存结果
        let res = ''
        //遍历所有顶点以及顶点对应的边
        for (let i = 0; i < this.vertexes.length; i++) {
            res += this.vertexes[i] + '->'
            res += this.edges.get(this.vertexes[i]) + '\n'
        }
        return res
    }
    //图的遍历   
    //初始化顶点的状态颜色
    initialColor() {
        // 白色: 表示该顶点还没有被访问.
        // 灰色: 表示该顶点被访问过, 但并未被探索过.
        // 黑色: 表示该顶点被访问过且被完全探索过.
        let colors = []
        for (let i = 0; i < this.vertexes.length; i++) {
            //相当于给colors数组添加属性
            colors[this.vertexes[i]] = 'white'
        }
        return colors
    }
    //广度优先搜索 BFS(Breadth-First-Search)
    BFS(initV, handler) {
        // initV-搜索的入口顶点
        //初始化颜色状态
        let colors = this.initialColor()
        //创建队列用来访问顶点
        let queue = new Queue()
        //将顶点放入队列中
        queue.enqueue(initV)

        while (!queue.isEmpty()) {
            //从队列中取出顶点
            let v = queue.dequeue()
            //取出该顶点所连接的所有其他顶点
            let vlist = this.edges.get(v)

            //改变状态
            colors[v] = 'gray'
            //遍历vlist加入队列中
            vlist.forEach(value => {
                //先判断是否有被探测过，防止顶点重复进入队列
                if (colors[value] === 'white') {
                    colors[value] = 'gray'
                    queue.enqueue(value)

                }
            })

            //v被探测，可以被访问
            handler(v)
            colors[v] = 'black'
        }
    }
    //深度优先搜索 DFS(Deepth-First-Search)
    DFS(initV, handler) {
        //初始化颜色
        let colors = this.initialColor()

        this.DFSVisit(initV, handler, colors)
    }
    DFSVisit(v, handler, colors) {
        //将颜色设置成灰色
        colors[v] = 'gray'
        //处理v顶点
        handler(v)
        //获取v的连接顶点
        let vlist = this.edges.get(v)
        //访问vlist并一个个进入函数
        vlist.forEach(value => {
            //先判断是否有被探测过，防止顶点重复进入队列
            if (colors[value] === 'white') {
                colors[value] = 'gray'
                this.DFSVisit(value, handler, colors)
            }
        })
        //该顶点后的顶点被深度访问，将该顶点设置成黑色
        colors[v] = 'black'
    }


}