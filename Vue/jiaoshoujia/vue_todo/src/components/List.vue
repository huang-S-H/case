<template>
<ul>
  <li v-for="(item,index) in list" :key='index'>
    <input @change="change(index)" type="checkbox" :checked='item.accomplish'>
    <span>{{item.matter}}</span>
    <button @click="dele(index)">删除</button>
  </li>
</ul>
</template>

<script>
// 拆分此组件
export default {
  name: 'List',
  props: {
    list: Array, // 主组件传过来的方法
    appChange: Function, // 主组件传过来的方法
    appDel: Function // 主组件传过来的方法
  },
  methods: {
    change (index) { // 选中状态改变方法
      this.appChange(index)
    },
    dele (index) { // 删除数据方法
      this.appDel(index)
    }
  }
}
</script>
