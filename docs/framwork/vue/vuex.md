# vuex 原理

简述下 Vuex 的实现原理

### 重要组成

Vuex 作为 Vue 的插件，首先要安装，并初始化

```js
import Vue from 'vue'
import Vuex from 'vuex'
// 安装插件
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
```

### state

定义全局 state 数据，单一状态树，唯一数据源

### mutation

是改变 state 的唯一方法，有两个参数：

- state，全局 state 数据
- payload，要修改的数据

举个例子：

```js
// 定义
mutations: {
  increment (state, payload) {
    state.count += payload.amount
  }
}

// 触发
store.commit(increment, { amount: 2 })
```

注意：mutation 必须是同步函数！

### action

mutation 必须是同步函数，action 则解决异步问题。

action 类似于 mutation，不同在于：

- 提交 mutation，不直接变更状态
- 可以包含异步操作
- 可以分发多重 mutation

action 接受一个参数，与 store 实例有相同属性和方法：

```js
mutations: {
  increment (state) {
    state.count++
  }
},
actions: {
  increment (context) {
    context.commit('increment')
  }
}

// 触发
store.dispatch('increment')
```

### 挂载

vuex 的数据方法定义好了，要在组件中使用，还差最后一步的挂载：

```js
import store from './store'

new Vue({
  store
})
```

