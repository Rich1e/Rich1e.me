## 在 Vue 中为什么不推荐用 index 做 key

> https://juejin.cn/post/7026119446162997261

- 用 index 作为 key 时，在对数据进行，逆序添加，逆序删除等破坏顺序的操作时，会产生没必要的真实 DOM更新，从而导致效率低
- 用 index 作为 key 时，如果结构中包含输入类的 DOM，会产生错误的 DOM 更新
- 在开发中最好每条数据使用唯一标识固定的数据作为 key，比如后台返回的 ID，手机号，身份证号等唯一值
- 如果不存在对数据逆序添加，逆序删除等破坏顺序的操作时，仅用于渲染展示用时，使用 index 作为 key 也是可以的（但是还是不建议使用，养成良好开发习惯）。

## Vue 组件通信

> https://juejin.cn/post/6999687348120190983

## Vue computed value is readonly

> https://blog.csdn.net/qq_39773416/article/details/114274275
> https://juejin.cn/post/6903857677178011655
> https://juejin.cn/post/6873053158173179918
> https://juejin.cn/post/6844903926819454983
> https://v3.vuejs.org/guide/computed.html#computed-setter

```js
const contentValue = computed({
  get() {
  	return props.value
  },
  set() {
  	return props.value
  }
})
```

## VueRequest

> https://www.attojs.com/
>
> 在以往的业务项目中，常常被 loading 状态的管理、请求的节流防抖、接口数据的缓存、分页等这些重复的实现所困惑。每当开启一个新项目时，我们都得手动去处理以上这些问题，这将是一个重复性的工作，而且还得确保团队的一致。
>
> VueRequest 旨在为开发者提供便捷、快速的方式来管理接口的状态。在业务开发中省去上述的那些“脏活累活”，只需要简单的配置即可使用，专注于业务核心的开发。

- 🚀  所有数据都具有响应式
- 🔄  轮询请求
- 🤖  自动处理错误重试
- 🗄  内置请求缓存
- 💧  节流请求与防抖请求
- 🎯  聚焦页面时自动重新请求
- ⚙️  强大的分页扩展以及加载更多扩展
- 📠  完全使用 Typescript 编写，具有强大的类型提示
- ⚡️  兼容 Vite
- 🍃  轻量化
- 📦  开箱即用

## Keep-alive

> https://xie.infoq.cn/article/987b17e0c8b59198785025162

## Provide / Inject

> https://juejin.cn/post/6893813975318790151
> https://juejin.cn/post/6844903989935341581

## A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.

> https://www.jianshu.com/p/8490d645b458
> https://github.com/vueComponent/ant-design-vue/issues/4881

## Watch / wathEffect

> https://www.jianshu.com/p/8490d645b458
> https://juejin.cn/post/6867125503007375373
> https://www.jianshu.com/p/e498b12b2c62

## 带你理解scoped、>>>、/deep/、::v-deep的原理

> https://juejin.cn/post/7023343999909888037

