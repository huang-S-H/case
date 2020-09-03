<template>
<div class="hint">
    <input v-model="checkAll"  type="checkbox" >
    <span>已完成{{isTrue}}/总数{{all}}</span>
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
// import {mapGetters} from 'vuex'

export default {
  name: 'Hint',
  // props: {
  //   list: Array,
  //   appCheckAll: Function,
  //   delCheckAll: Function
  // },
  data () {
    return {
      check: false
    }
  },

  methods: {
    del () {
      this.$store.dispatch('delete')
    }
    // checkAll () {
    //   this.$store.dispatch('checkAll', !this.check)
    // }
    // ...mapGetters(['isTrue']), // 几个选中
  },
  computed: {
    // ...mapGetters(['isTrue']), // 几个选中
    isTrue () {
      return this.$store.getters['isTrue']
    },
    // isTrue () {
    //   return this.list.reduce((prTotal, todo) => {
    //     return prTotal + (todo.accomplish ? 1 : 0)
    //   }, 0)
    // },
    // ...mapActions(['checkAll']),
    // ...mapGetters(['checkAll']), // 是否全选
    // ...mapGetters(['all']), // 总数
    all () {
      return this.$store.getters['all']
    },
    checkAll: {
      get () {
        return this.$store.state.todoList.length !== 0 && this.$store.getters.isTrue === this.$store.getters.all
      },
      set (value) {
        console.log(value)
        this.$store.dispatch('checkAll', value)
        // this.appCheckAll(value)
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
