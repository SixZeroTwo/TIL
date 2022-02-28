export function hashFunc(str, max) {
    //根据传入字符串和实现哈希表的数组的最大长度实现哈希函数
    //定义hashCode
    let hashCode = 0
    //霍纳算法，这里的质数取31
    for (let i = 0; i < str.length; i++) {
        hashCode = 31 * hashCode + str.charCodeAt(i)
    }
    //对hashCode进行取余
    hashCode = hashCode % max
    return hashCode
}

const LOAD_FACTOR = 0.75 //填充因子
const MIN_LOAD_FACTOR = 0.25
export class HashTable {
    constructor() {
        this.storage = []//数组用来存储元素
        this.count = 0//当前存放的元素数量
        this.limit = 8//哈希表最大存放元素数量 

    }
    //哈希函数
    hashFunc(str, max) {
        //根据传入字符串和实现哈希表的数组的最大长度实现哈希函数
        //定义hashCode
        let hashCode = 0
        //霍纳算法，这里的质数取31
        const PRIME = 31
        for (let i = 0; i < str.length; i++) {
            hashCode = PRIME * hashCode + str.charCodeAt(i)
        }
        //对hashCode进行取余
        hashCode = hashCode % max
        return hashCode
    }

    //放入元素
    put(key, value) {
        //根据key映射到下标值
        let hashCode = hashFunc(key, this.limit)
        let bucket = this.storage[hashCode]

        if (!bucket) {
            //bucket为空
            bucket = []
            this.storage[hashCode] = bucket
            bucket.push([key, value])
            this.count++;
        }
        else {

            //bucket不为空，考虑键值是否已经存在，对bucket进行遍历
            for (let i = 0; i < bucket.length; i++) {
                let tuple = bucket[i]; // tuple 的格式：[key, value]
                if (tuple[0] === key) { // 如果 key 相等，则修改数据
                    tuple[1] = value;
                    return; // 修改完 tuple 里数据，return 终止，不再往下执行。
                }
            }

            // 5、bucket 新增数据
            bucket.push([key, value]); // bucket 存储元组 tuple，格式为 [key, value]
            this.count++;
            if (this.count >= this.limit * LOAD_FACTOR) {
                this.resize(this.getPrime(this.limit * 2))
            }

        }

    }

    get(key) {
        //获取hashCode
        let hashCode = hashFunc(key, this.limit)

        //拿到bucket
        let bucket = this.storage[hashCode]
        //判断是否有对应的bucket
        if (bucket) {
            //遍历bucket
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    return bucket[i][1]
                }
            }
        }
        else {
            return null
        }
    }

    remove(key) {
        //获取hashCode
        let hashCode = hashFunc(key, this.limit)

        //拿到bucket
        let bucket = this.storage[hashCode]
        //判断是否有对应的bucket
        if (bucket) {
            //遍历bucket
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i][0] === key) {
                    this.count--
                    if (this.limit > 8 && this.count < this.limit * MIN_LOAD_FACTOR) {
                        this.resize(this.getPrime(Math.floor(this.limit / 2)))
                    }
                    return bucket.splice(i, 1)
                }
            }
        }
        else {
            return null
        }
    }
    isEmpty() {
        return this.length === 0
    }
    size() {
        return this.length
    }
    //扩容函数
    resize(newLimit) {
        //存储旧的storage
        let oldStorage = this.storage
        //重置limit
        this.limit = newLimit
        this.count = 0
        //将storage清空
        this.storage = []
        //遍历旧的storage对没一个元素进行一轮新的put操作
        oldStorage.forEach(bucket => {
            if (bucket) {
                bucket.forEach(tuple => {
                    this.put(tuple[0], tuple[1])
                })
            }
        })
    }

    isPrime(value) {
        let sqrtVal = Math.sqrt(value)
        for (let i = 2; i <= sqrtVal; i++) {
            if (value % i === 0) {
                return false
            }
        }
        return true
    }

    getPrime(value) {
        while (!this.isPrime(value)) {
            value++
        }
        return value
    }
}