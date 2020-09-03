import Vue from 'vue'
import Vuex from 'vuex'
import actions from './storeActions'
import mutations from './storeMutations'
import state from './storeState'
import getters from './storeGetters'

Vue.use(Vuex)

export default new Vuex.Store({actions, mutations, state, getters})
