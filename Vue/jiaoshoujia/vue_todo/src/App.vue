<template>
<div id="app">
    <Add :appAdd='appAdd' />
    <List :list='list' :appChange='appChange' :appDel='appDel' />
    <Hint :list='list' :appCheckAll='appCheckAll' :delCheckAll='delCheckAll' />
</div>
</template>

<script>
// 引入组件
import Add from './components/Add'

import List from './components/List'

import Hint from './components/Hint'
/**
 * 搞本地储存
*/
export default {
  name: 'App',
  data () {
    return {
      list: JSON.parse(window.localStorage.getItem('list_key') || '[]')
    }
  },
  components: { // 定义组件
    Add,
    List,
    Hint
  },
  methods: { // 方法集合
    appAdd (text) { // 增加数据方法
      this.list.unshift({matter: text, accomplish: false})
    },
    appChange (index) { // 选中状态改变方法
      this.list[index].accomplish = !this.list[index].accomplish
    },
    appDel (index) { // 删除数据方法
      this.list.splice(index, 1)
    },
    appCheckAll (value) {
      this.list.forEach(element => {
        element.accomplish = value
      })
    },
    delCheckAll () {
      console.log(1)
      this.list = this.list.filter((item) => {
        return item.accomplish !== true
      })
    }
  },
  watch: {
    list: {
      deep: true,
      handler (val) {
        window.localStorage.setItem('list_key', JSON.stringify(val))
      }
    }
  }
}
</script>
