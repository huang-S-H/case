/**
 * vuex模块
 */
import Vuex from 'vuex'

import Vue from 'vue'

Vue.use(Vuex)

// 放数据的对象
const state = {
  aaa: 1
}

// 改状态的对象
const mutations = {
  setAdd (state) {
    state.aaa++
  },
  setMinus (state) {
    state.aaa--
  },
  setEvenAdd (state) {
    let evenOrOdd = state.aaa % 2 === 0 ? '偶数' : '奇数'
    if (evenOrOdd === '奇数') {
      return state.aaa++
    }
  },
  setDelay (state) {
    setTimeout(() => {
      state.aaa++
    }, 1000)
  }
}

// 组件直接能控制的方法对象
const actions = {
  add ({commit}) {
    commit('setAdd')
  },
  minus ({commit}) {
    commit('setMinus')
  },
  evenAdd ({commit}) {
    commit('setEvenAdd')
  },
  delay ({commit}) {
    commit('setDelay')
  }
}

// 计算属性方法对象
const getters = {
  setOddOrEven (state) {
    return state.aaa % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({state, mutations, actions, getters})
