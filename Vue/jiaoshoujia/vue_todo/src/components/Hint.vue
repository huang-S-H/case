<template>
<div class="hint">
    <input v-model="checkAll" type="checkbox" >
    <span>已完成{{isTrue}}/总数{{list.length}}</span>
    <button @click="del">删除已完成</button>
</div>
</template>

<script>
// 改掉这个组件 拿到数据 自己操作
/**
 * 数据改变时数量统计要改变
 * 数据状态改变时，数据状态统计要改变
 * 本组件复选框改变各项数据复选框要改变
 * 本组件增加删除已完成事件功能
 * 无数据时复选框不要被选中
*/
export default {
  name: 'Hint',
  props: {
    list: Array,
    appCheckAll: Function,
    delCheckAll: Function
  },
  methods: {
    del () {
      this.delCheckAll()
    }
  },
  computed: {
    isTrue () {
      return this.list.reduce((prTotal, todo) => {
        return prTotal + (todo.accomplish ? 1 : 0)
      }, 0)
    },
    checkAll: {
      get () {
        return this.isTrue === this.list.length && this.isTrue !== 0
      },
      set (value) {
        this.appCheckAll(value)
      }
    }
  }

}
</script>

<style>
button {
  background: none;
  border: none;
  float: right;
  margin-top: 11px;
  outline: none;
}

button:active  {
  background: rgba(0, 0, 0,.3);
}
</style>
