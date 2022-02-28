



class Node {
    constructor(data) {
        this.data = data
        this.left = null
        this.right = null
    }
}

export class Tree {
    constructor() {
        this.root = null
    }
    //
    insert(data) {
        const node = new Node(data)
        if (this.root) {
            this.insertNode(this.root, node)
            /*            let compare = this.root
                       while (true) {
                           let prev = compare
                           if (node.data > compare.data) {
                               compare = compare.right
                               if (!compare) {
                                   prev.right = node
                                   break
                               }
                           }
                           else {
                               compare = compare.left
                               if (!compare) {
                                   prev.left = node
                                   break
                               }
                           }
           
                       } */
            //递归实现
        }
        else {
            this.root = node
        }
    }
    insertNode(node, newNode) {
        if (newNode.data > node.data) {
            if (node.right) {
                this.insertNode(node.right, newNode)
            }
            else {
                node.right = newNode
            }
        }
        else {
            if (node.left) {
                this.insertNode(node.left, newNode)
            }
            else {
                node.left = newNode
            }
        }
    }
    //先序遍历
    pre() {
        this.preOrderTranversalNode(this.root)
    }
    //递归函数
    preOrderTranversalNode(node) {
        if (node) {
            console.log(node.data);
            //遍历左子树
            this.preOrderTranversalNode(node.left)
            //遍历右子数
            this.preOrderTranversalNode(node.right)
        }
    }

    //中序遍历
    mid() {
        this.midOrderTranversalNode(this.root)
    }
    midOrderTranversalNode(node) {
        if (node) {

            //遍历左子树
            this.midOrderTranversalNode(node.left)
            //访问根节点
            console.log(node.data);
            //遍历右子数
            this.midOrderTranversalNode(node.right)
        }
    }

    //后序遍历
    post() {
        this.postOrderTranversalNode(this.root)
    }
    postOrderTranversalNode(node) {
        if (node) {

            //遍历左子树
            this.postOrderTranversalNode(node.left)

            //遍历右子数
            this.postOrderTranversalNode(node.right)
            //访问根节点
            console.log(node.data);
        }
    }
    //最大最小值
    min() {
        let node = this.root
        while (node.left) {
            node = node.left
        }
        return node.data
    }
    max() {
        let node = this.root
        while (node.right) {
            node = node.right
        }
        return node.data
    }

    search(data) {
        //return this.searchNode(this.root, data)
        let node = this.root
        while (node) {
            if (data === node.data) {
                return true
            }
            if (data <= node.data) {
                node = node.left
            }
            if (data >= node.data) {
                node = node.right
            }
        }
        return false
    }
    //search的递归方法
    /*     searchNode(node, data) {
    
            if (node) {
                if (data === node.data) {
                    return true
                }
                else if (data < node.data) {
                    //遍历左子树
                    return this.searchNode(node.left, data)
                }
                else if (data > node.data) {
                    //遍历右子数
                    return this.searchNode(node.right, data)
                }
    
            }
            else {
                return false
            }
        } */
    //删除
    remove(data) {
        function compareData(node, prev) {
            if (node.data > prev.data) {
                prev.right = node
            }
            else {
                prev.left = node
            }
        }
        let condition = this.returnNodeAndPrev(data)//{node,data}
        //首先寻找是否有节点，没有则返回false
        if (condition) {
            let { node, prev } = condition
            //待删除节点node没有子节点
            if (!(node.left && node.right)) {
                if (node === this.root) {
                    this.root = null
                }
                else {
                    if (node.data > prev.data) {
                        prev.right = null
                    }
                    else {
                        prev.left = null
                    }
                }

            }
            //node有一个子节点
            else if (node.left || node.right) {
                if (node === this.root) {
                    if (node.left) {

                        this.root = node.left
                    }
                    else {
                        this.root = node.right
                    }
                }
                else {
                    if (node.left) {

                        compareData(node.left, prev)
                    }
                    else {
                        compareData(node.right, prev)
                    }
                }

            }
            //node有两个子节点
            else if (node.left && node.right) {
                // 1、找到后续节点
                let successor = this.getSuccessor(node);

                // 2、判断是否为根节点
                if (node === this.root) {
                    this.root = successor;
                } else {
                    compareData(successor, prev)
                }

                // 3、将后续的左节点改为被删除的左节点
                successor.left = node.left;
            }
            return true
        }
        else {
            return false
        }
    }
    // 获取后续节点，即从要删除的节点的右边开始查找最小的值
    getSuccessor(delNode) {

        // 定义变量，保存要找到的后续
        let successor = delNode;
        let current = delNode.right;
        let successorParent = delNode;

        // 循环查找 current 的右子树节点
        while (current !== null) {
            successorParent = successor;
            successor = current;
            current = current.left;
        }

        // 判断寻找到的后续节点是否直接就是要删除节点的 right
        if (successor !== delNode.right) {
            successorParent.left = successor.right;
            successor.right = delNode.right;
        }
        return successor;
    }
    returnNodeAndPrev(data) {
        let prev = null
        let node = this.root
        while (node) {
            if (data === node.data) {

                return { node, prev }
            }
            if (data < node.data) {
                prev = node
                node = node.left

            }
            if (data > node.data) {
                prev = node
                node = node.right
            }
        }
        return false
    }
}