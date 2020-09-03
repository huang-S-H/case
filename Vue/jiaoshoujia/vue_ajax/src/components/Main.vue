<template>
<div class="body">
    <h2 v-show="one"> 大人想搜点啥？点按钮就好啦！！！</h2>
    <h2 v-show="two"> 正在搜索，请等待。。。</h2>
    <h2 v-show="three"> 不好了大人，您要找的资料可能丢失了，或者宁家里的网络不太好/(ㄒoㄒ)/~~</h2>
    <List :items='items' />
</div>
</template>

<script>

import List from './List'
import PubSub from 'pubsub-js'

export default {
  name: 'Main',
  components: {
    List
  },
  data () {
    return {
      items: [],
      one: true,
      two: false,
      three: false
    }
  },
  mounted () {
    PubSub.subscribe('search1', (msg, data) => {
      this.items = []
      this.three = false
      this.one = false
      this.two = true
      let url = `https://api.github.com/search/users?q=${data}`
      this.$http.get(url)
        .then((response) => {
          this.two = false
          this.items = response.body.items
          console.log(this.items)
        }, (response) => {
        //   console.log(response)
          this.two = false
          this.three = true
        })
    })
  },
  methods: {
  }
}

</script>
