# 框架 50 题

主要记录高频的 React 和 Vue 面试题
## 1. 聊一下 vue 和 react 的区别

共同点：

- 都是数据驱动视图
- 都是组件化
- 都是用 Virtual DOM

不同点：

- Vue 是双向绑定，React 是单向数据流，处理表单时 Vue 更便捷。
- React 数据流更清晰，大型项目中更便于规范排错。Vue 相对来说更松散一点。
- Vue 的单文件组件，模板与样式分层清晰。React 的 JSX 更能充分发挥 js 的灵活性。

## 2. react 生命周期有哪些

旧生命周期：

- componentWillMount（废弃）
- render
- componentDidMount
- componentWillReceiveProps（废弃）
- shouldComponentUpdate
- componentWillUpdate（废弃）
- componentDidUpdate
- componentWillUnmount

shouldComponentUpdate：性能优化用到的生命周期。两个参数 nextProps, nextState。与旧数据做对比，决定是否re-render。返回 false 会终止生命周期。

新生命周期新增两个方法：

- getDerivedStateFromProps

和 componentWillReceiveProps 类似，接收 props 和 state 两个入参。只用于 state 的值在任何时候都取决于 props 的这种场景

- getSnapshotBeforeUpdate

## 3. react 中的合成事件是什么？

合成事件是对浏览器原生事件的统一封装。

它们将不同浏览器的行为合并为一个 API。这样做是为了确保事件在不同浏览器中显示一致的属性。

## 4. react 的 refs 有什么了解？

ref 用于获取组件的 DOM 信息

如果要获取自定义组件的 dom，需要通过 `React.forwardRef`

```js
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
<FancyButton ref={ref}>Click me!</FancyButton>;
```

## 5. react 的 Fragment


## 6. react 的 setState 是同步还是异步

有时同步，有时异步。

- 原生事件和 setTimeout 中是同步
- 合成事件和生命周期中是异步的

合成事件（SyntheticEvent）是指 react 不直接监听 dom，而是等事件冒泡到 document 上，在 document 实现事件监听。

## vue 数组和对象的更新

双向数据绑定原理，也就是问响应式原理。

说一下 Object.defineProperty 为 data 的每个属性设置 getter/setter，getter 依赖收集，setter 触发批量更新。

数组更新时特例。

当利用索引直接设置一个数组项，或修改数组长度时，Vue是监听不到的。

```js
this.$set(array, index, newValue)
```
直接修改数组长度，Vue也监听不到。应该这样：

```js
this.array.splice(newLength)
```
