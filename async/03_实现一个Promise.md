## 背景

不手动撸一个Promise，永远不能彻底了解它的运作原理。

再来复习下 Promise 的组成要素：

**1. 三种状态**

* pending 状态，表示进行中
* fulfilled 状态，表示成功完成
* rejected 状态，表示操作失败、被拒绝

**2. 两个参数**

resolve, reject，都是函数

执行 resolve()，状态设置为fulfilled，逻辑走到then中去；
执行 rejected()，状态设置为rejected，逻辑走到catch中去；

根据这些开始手动实现。

## 实现

```js
class Promise {

    constructor(executor) {
        // executor是实例化传过来的函数

        // 1. 定义resolve和reject函数，第2部会用到
        function resolve(value) {
            if(this.status!=='pending') return;
            this.status = 'fulfilled';;
            if(this.thenCallback) {
                // 
                this.thenCallback(value)
            }
        };
        function reject(error) {
            if(this.status!=='pending') return;
            this.status = 'rejected';
            if(this.errorCallback) {
                this.errorCallback(error)
            }
        };
        // 2. 调用executor执行函数体内的逻辑。同时，再把定义好的resolve，reject函数传回去，等待函数体内调用。
        executor(resolve.bind(this), reject.bind(this))
    }

    status = 'pending'
    thenCallback = null
    errorCallback = null

    then(fn) {
        // 3. 定义then方法时，这里会传来一个函数参数。then方法的作用就是把该函数存起来，等待resolve时调用。
        // then方法与catch同理。then方法返回实例化对象（this）是为了链式调用
        this.thenCallback = fn
        return this
    }

    catch(fn) {
        this.errorCallback = fn
    }
}
```