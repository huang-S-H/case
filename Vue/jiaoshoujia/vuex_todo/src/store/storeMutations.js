import {MUT_ADD, MUT_DELE, MUT_CHANGE, MUT_DELETE, CHECK_ALL} from './mut_types'

export default {
  // 增加
  [MUT_ADD] (state, {todo}) {
    console.log(4)
    state.todoList.unshift(todo)
  },
  // 删除一项
  [MUT_DELE] (state, {index}) {
    state.todoList.splice(index, 1)
  },
  // 选中改变状态
  [MUT_CHANGE] (state, {index}) {
    state.todoList[index].complete = !state.todoList[index].complete
  },
  // 删除以完成
  [MUT_DELETE] (state) {
    state.todoList = state.todoList.filter((item) => {
      return item.complete !== true
    })
  },
  // 改变所有
  [CHECK_ALL] (state, {isCheck}) {
    state.todoList.forEach((item) => {
      console.log(isCheck)
      item.complete = isCheck
    })
  }
}
