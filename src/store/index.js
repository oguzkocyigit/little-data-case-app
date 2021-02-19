import Vue from 'vue'
import Vuex from 'vuex'
import { CountriesProxy } from '@/proxies/CountriesProxy'
import { IndustriesProxy } from '@/proxies/IndustriesProxy'
import { QualificationsProxy } from '@/proxies/QualificationsProxy'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    countries: [],
    industries: [],
    qualifications: [],
  },
  getters: {
    countries: state => {
      return state.countries
    },
    industries: state => {
      return state.industries
    },
    qualifications: state => {
      return state.qualifications
    },
  },
  mutations: {
    GET_COUNTRIES (state, data) {
      state.countries = data
    },
    GET_INDUSTRIES (state, data) {
      state.industries = data
    },
    GET_QUALIFICATIONS (state, data) {
      state.qualifications = data
    },
  },
  actions: {
    getCountries ({ commit }) {
      new CountriesProxy()
        .all()
        .then(response => {
          commit('GET_COUNTRIES', response)
        })
    },
    getIndustries ({ commit }) {
      new IndustriesProxy()
        .all()
        .then(response => {
          commit('GET_INDUSTRIES', response)
        })
    },
    getQualifications ({ commit }) {
      new QualificationsProxy()
        .all()
        .then(response => {
          commit('GET_QUALIFICATIONS', response)
        })
    },
  },
})
