<template>
  <div>
    <h4>Msg</h4>
    <ul>
      <li v-for="msg in data" :key='msg.id'><router-link :to="`/home/msgs/detail/${msg.id}`">{{msg.title}}</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Msgs',
  data () {
    return {
      data: {}
    }
  },
  mounted () {
    axios.get('http://localhost:3030/msg')
      .then((res) => {
        this.data = res.data
      }).catch((res) => {
        console.log(res)
      })
  }
}
</script>

<style>
</style>
