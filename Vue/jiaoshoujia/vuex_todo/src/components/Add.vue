<template>
  <div>
    <input type="text" v-model="text" placeholder="输入待办事项后按回车键" @keyup.enter='add'/>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
export default {
  name: 'Add',
  // props: {
  //   appAdd: Function // app主组件传过来的方法
  // },
  data () {
    return {
      text: '' // 文本框数据
    }
  },
  methods: {
    add () {
      // console.log(4)
      if (!this.text.trim()) { // 数据过滤
        return window.alert('请输入文本')
      }
      const todo = {list: this.text, complete: false}
      // console.log(todo)
      this.$store.dispatch('add', todo)

      this.text = ''
    }
    // add () { // 回车键方法
    // if (!this.text.trim()) { // 数据过滤
    //   return window.alert('请输入文本')
    // }
    // this.appAdd(this.text) // 调用主组件传过来的方法将数据传过去
    //   this.text = '' // 清空文本框
    // }
  }
}
</script>
