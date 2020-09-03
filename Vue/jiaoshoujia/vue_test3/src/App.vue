<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <Add :addd='addd' />
    <List :content='content' :delet='delet' />
  </div>
</template>

<script>

import Add from './components/Add'

import List from './components/Lest'

export default {
  name: 'App',
  data () {
    return {
      msg: '留下你的评论',
      content: [
        {
          name: 'jack',
          text: '娃娃拉拉'
        }
      ]
    }
  },
  components: {
    Add,
    List
  },
  methods: {
    addd (cont) {
      this.content.push(cont)
    },
    delet (index) {
      this.content.splice(index, 1)
    }
  }
}
</script>

<style>
 #app {
      overflow: hidden;
    }

    h1 {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 150px;
      line-height: 150px;
      text-align: center;
      background-color: gray;
      margin-bottom: 20px;
    }
</style>
