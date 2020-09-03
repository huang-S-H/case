<template>
  <div id="app">
    <p>数字是{{$store.state.aaa}}，他是{{oddOrEven}}</p>
    <button @click="minus">-1</button>
    <button @click="add">+1</button>
    <button @click="evenAdd">奇数才加1</button>
    <button @click="delay">一秒后加一</button>
  </div>
</template>

<script>
import {mapState, mapActions, mapGetters} from 'vuex'
// 有vuex太爽了
export default {
  name: 'App',
  methods: {
    // 加一方法
    ...mapActions(['add', 'minus', 'evenAdd', 'delay'])
    // add () {
    //   this.$store.dispatch('add')
    // },
    // 减一方法
    // minus () {
    //   this.$store.dispatch('minus')
    // },
    // 奇数加一方法
    // evenAdd () {
    //   this.$store.dispatch('evenAdd')
    // },
    // 延迟加一方法
    // delay () {
    //   this.$store.dispatch('delay')
    // }
  },
  computed: {
    // Odd or even
    // 直接搞store中的方法键是我本组件的名字值的store模块中的名字
    ...mapGetters({'oddOrEven': 'setOddOrEven'}),
    // oddOrEven () {
    //   return this.$store.getters.setOddOrEven
    // },
    ...mapState(['aaa']) // 弄到store模块中的aaa数据
  }
}
</script>
