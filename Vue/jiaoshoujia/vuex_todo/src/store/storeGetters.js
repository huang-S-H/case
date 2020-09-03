export default {
  // 有几个选中
  isTrue (state) {
    return state.todoList.reduce((prTotal, todo) => {
      return prTotal + (todo.complete ? 1 : 0)
    }, 0)
  },
  // 总数
  all (state) {
    return state.todoList.length
  }
  // 是否全选
  // checkAll (state, getters) {
  //   if (state.todoList.length !== 0 && getters.isTrue === getters.all) {
  //     return true
  //   }
  // }
}
