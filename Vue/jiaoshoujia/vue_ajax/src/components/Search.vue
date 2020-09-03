<template>
  <header class="header">
    <h2>搜索github用户</h2>
    <div>
        <input type="search" v-model="searchTxt">
        <button @click="search">search</button>
    </div>
    </header>
</template>

<script>
import PubSub from 'pubsub-js'

export default {
  name: 'Search',
  data () {
    return {
      searchTxt: ''
    }
  },
  methods: {
    search () {
      if (!this.searchTxt.trim()) {
        return window.alert('不允许输入空文本哦')
      }
      PubSub.publish('search1', this.searchTxt)
      this.searchTxt = ''
    }
  }

}

</script>
