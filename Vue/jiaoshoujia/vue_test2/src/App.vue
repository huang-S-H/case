<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <h1>{{ msg }}</h1>
    <MyHelloWorld/>
  </div>
</template>

<script>

import MyHelloWorld from './components/MyHelloWorld'

export default {
  name: 'App', // 我的组件名
  components: { // 配置模板
    MyHelloWorld // 我的模板名
  },
  data () { // 必须以方法定义我的数据 以return{} 的方式
    return {
      msg: 'is my app'
    }
  }
}
</script>

<style>
/* 再此定义我的模板页面样式 */
h1 {
  padding: 0;
  margin: 0;
}

</style>
