//Promise核心思想——创造一个Promise实例，pending状态向resolved或rejected状态的转换，只可转换一次
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
    //防止值得穿透 
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

