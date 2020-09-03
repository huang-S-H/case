// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入vue核心库
import App from './App' // 引入app模块

Vue.config.productionTip = false // 貌似是禁止控制台提示

/* eslint-disable no-new */
new Vue({ // new 一个vue实例
  el: '#app', // 对应页面中的那个插入元素的
  components: { App }, // 以解构赋值的形式设定app模板名
  template: '<App/>' // 拿App做模板
})
