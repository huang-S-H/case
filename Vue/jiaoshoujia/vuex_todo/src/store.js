import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const state = {
  todoList: [{list: 'yi', complete: false}, {list: 're', complete: false}, {list: 'san', complete: false}]
}

const mutations = {
  // appChange (index) { // 选中状态改变方法
  //   this.list[index].accomplish = !this.list[index].accomplish
  // }
  // 操作数据的改变方法
  mutChange (state) {

  },
  // 操作数据的增加方法
  mutAdd (state, txt) {

  }
}

const actions = {
  // 改变方法
  change ({commit}) {
    commit('mutChange')
  },

  // 增加方法
  add ({commit}) {
    commit('mutAdd')
  }
}

const getters = {}

export default new Vuex.Store({state, mutations, actions, getters})
