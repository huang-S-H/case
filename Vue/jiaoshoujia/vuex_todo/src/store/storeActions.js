import {MUT_ADD, MUT_DELE, MUT_CHANGE, MUT_DELETE, CHECK_ALL} from './mut_types'

export default {
  add ({commit}, todo) {
    commit(MUT_ADD, {todo}) // 参数无论如何都要用{}包裹
  },
  dele ({commit}, index) {
    commit(MUT_DELE, {index})
  },
  change ({commit}, index) {
    commit(MUT_CHANGE, {index})
  },
  delete ({commit}) {
    commit(MUT_DELETE)
  },
  checkAll ({commit}, isCheck) {
    commit(CHECK_ALL, {isCheck})
  }

}
