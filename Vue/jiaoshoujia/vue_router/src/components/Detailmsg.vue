<template>
  <div>
    <p>id:{{$route.params.id}}</p>
    <ul>
    <li v-for="detailmsg in detailmsg" :key="detailmsg.id"><p>{{detailmsg}}</p></li>
  </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Detailmsg',
  data () {
    return {
      detailmsg: {}
    }
  },
  mounted () {
    let url = `http://localhost:3030/msg/${this.$route.params.id}`
    axios.get(url)
      .then((res) => {
        this.detailmsg = res.data
      })
      .catch((res) => {
        console.log(res)
      })
  },
  watch: {
    $route: {
      deep: true,
      handler: (val) => {
        let url = `http://localhost:3030/msg/${val.params.id}`
        axios.get(url)
          .then((res) => {
            this.detailmsg = res.data
            console.log(this.detailmsg)
          })
          .catch((res) => {
            console.log(res)
          })
      }
    }
  }
}
</script>

<style>

</style>
