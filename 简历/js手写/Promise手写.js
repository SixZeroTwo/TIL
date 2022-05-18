/* //Promise核心思想——创造一个Promise实例，pending状态向resolved或rejected状态的转换，只可转换一次
class Promise {
  constructor(executor) {
    //实例状态
    this.state = 'pending'
    //成功的值
    this.value = undefined
    //失败原因
    this.reason = undefined
    //存放成功和失败的回调函数
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    //resolve和reject函数的定义
    let resolve = (value) => {
      //改变value值和实例的状态
      if (this.state == 'pending') {
        this.value = value
        this.state = 'resolved'
        this.onResolvedCallbacks.forEach(fn => fn())
      }
      console.log('Promise成功')
    }
    let reject = (reason) => {
      //改变reason值和实例的状态
      if (this.state == 'pending') {
        this.reason = reason
        this.state = 'resolved'
        this.onRejectedCallbacks.forEach(fn => fn())
      }
      console.log('Promises失败')
    }

    //实例化的时候同步调用executor函数
    try {
      executor(resolve, reject)
    }
    catch (e) {
      //promise A+规范规定，在有异常错误时，则执行失败函数
      reject(e)
    }
  }
  //原型方法
  then(onFuiFilled, onRejected) {
    //防止值的穿透 
    onFuiFilled = typeof onFuiFilled === 'function' ? onFuiFilled : y => y;
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err; }
    let promise2;//作为下一次then方法的promise
    if (this.status === 'resolved') {
      promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            //成功的逻辑 失败的逻辑
            let x = onFuiFilled(this.value);
            //看x是不是promise 如果是promise取他的结果 作为promise2成功的的结果
            //如果返回一个普通值，作为promise2成功的结果
            //resolvePromise可以解析x和promise2之间的关系
            //在resolvePromise中传入四个参数，第一个是返回的promise，第二个是返回的结果，第三个和第四个分别是resolve()和reject()的方法。
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e);
          }
        }, 0)
      });
    }
    if (this.status === 'rejected') {
      promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason);
            //在resolvePromise中传入四个参数，第一个是返回的promise，第二个是返回的结果，第三个和第四个分别是resolve()和reject()的方法。
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e);
          }
        }, 0)

      });
    }
    //当前既没有完成也没有失败
    if (this.status === 'pending') {
      promise2 = new Promise((resolve, reject) => {
        //把成功的函数一个个存放到成功回调函数数组中
        this.onResolvedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onFuiFilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0)
        });
        //把失败的函数一个个存放到失败回调函数数组中
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)
        })
      })
    }
    return promise2;//调用then后返回一个新的promise
  }
  catch(onRejected) {
    // catch 方法就是then方法没有成功的简写
    return this.then(null, onRejected);
  }

}
 */

class MyPromise {
  constructor(executor) {
    this.status = 'pending'
    this.value = undefined
    this.reason = undefined
    //onFulfilledCallbacks和onRejectedCallbacks
    this.onFuifilledCallbacks = []
    this.onRejectedCallbacks = []
    //new Promise时同步执行executor函数
    //首先定义resolve和reject
    let resolve = (value) => {
      //首先判断当前状态
      if (this.status == 'pending') {
        //再改变value值和status
        this.value = value
        this.status = 'fulfilled'
        //查看是否有回调函数，如果有，全部调用出来执行（每个回调函数都是定义为箭头函数的，调用的时候this指向都不同）
        while (this.onFuifilledCallbacks.length) {
          this.onFuifilledCallbacks.shift()(value)
        }
      }


    }
    let reject = (reason) => {
      //首先判断当前状态
      if (this.status == 'pending') {
        //再改变value值和status
        this.reason = reason
        this.status = 'rejected'
        //查看是否有回调函数，如果有，全部调用出来执行
        while (this.onRejectedCallbacks.length) {
          this.onRejectedCallbacks.shift()(reason)
        }
      }
    }

    //执行executor函数，错误捕获直接reject
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }

  //then原型方法，返回一个新的Promise对象，根据state判断调用成功还是失败回调函数
  //错误捕获直接reject
  then(onFuiFilled, onRejected) {
    //then参数可选设置
    onFuiFilled = typeof onFuiFilled == 'function' ? onFuiFilled : value => value
    onRejected = typeof onRejected == 'function' ? onRejected : reason => { throw (reason) }
    //定义一个promise对象，之后直接返回该对象
    let promise2 = new MyPromise((resolve, reject) => {
      //该部分会直接执行，this沿用上一作用域的this，也就是调用当前then方法的实例对象
      //判断实例的状态
      if (this.status == 'fulfilled') {
        //异步，等待promise2初始化完成
        setTimeout(() => {
          try {
            //成功回调
            const x = onFuiFilled(this.value)
            //成功后要判断返回值，根据返回值返回不同结果
            promise2 = resolvePromise(promise2, x, resolve, reject)
          }
          catch (e) {
            reject(e)
          }

        }, 0)

      }
      else if (this.status == 'rejected') {
        // 创建一个微任务等待 promise2 完成初始化
        setTimeout(() => {
          try {
            // 调用失败回调，并且把原因返回
            const x = onRejected(this.reason);
            // 传入 resolvePromise 集中处理
            promise2 = resolvePromise(promise2, x, resolve, reject);
          } catch (error) {
            reject(error)
          }
        }, 0)
      }
      //pending状态，这是由于之前的Promise对象中执行了异步操作，而then作为同步方法先执行，此时状态还未改变，我们先将回调函数储存，
      //在状态进行改变时（resolve和rejected函数内部）调用
      else if (this.status == 'pending') {

        //这部分注意 压入异步函数
        this.onFuifilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              //根据回调函数返回值确定promise2的状态
              const x = onFuiFilled()
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)

        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              //根据回调函数返回值确定promise2的状态
              const x = onRejected()
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              reject(e)
            }
          }, 0)

        })

      }
    })
    return promise2
  }

  //静态方法
  static resolve(value) {
    //如果value是promise对象
    if (value instanceof MyPromise) {
      return value
    }
    //返回一个成功状态下的Promise对象
    return new MyPromise((resolve, reject) => resolve(value))
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => reject(reason

    ))
  }
}
function resolvePromise(promise2, x, resolve, reject) {
  //防止循环调用
  if (x == promise2) {
    throw (new TypeError('cycle detected'))
  }
  //当x是一个Promise对象，调用then方法，通过传进来的resolve和reject改变promise2的状态
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  }
  // 当x是值，resolve(x)
  else {
    resolve(x)
  }
}

//调用测试
let p1 = new MyPromise((resolve, reject) => {
  resolve('1')
})
let p2 = p1.then(value => '2')
console.log(p1)