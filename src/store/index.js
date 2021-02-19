import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    userData: '',
  },
  mutations: {
    addUserForm (state, data) {
      state.userData = data
    },
  },
  actions: {
    sendUserForm ({ commit }, data) {
      commit('addUserForm', data)
    },
  },
})
