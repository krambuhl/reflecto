import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const archive = global.__REFLECTO_ARCHIVE__.default
const debug = process.env.NODE_ENV !== 'production'

export const UPDATE_ROUTE = 'UPDATE_ROUTE'
export const UPDATE_QUERY = 'UPDATE_QUERY'
export const UPDATE_PROPS = 'UPDATE_PROPS'

export default new Vuex.Store({
  state: {
    archive,
    route: {},
    query: {}
  },
  getters: {
    pages () {
      return this.archive.filter(def => def.isPage)
    },
    collections () {
      return this.archive.filter(def => def.isCollection)
    }
  },
  mutations: {
    [UPDATE_ROUTE]: (state, { route }) => {
      state.route = route
    },

    [UPDATE_QUERY]: (state, { route }) => {
      state.query = {
      }
    }
  },
  actions: {
    updateRoute: ({ commit }, { route }) => {
      commit(UPDATE_ROUTE, { route })
      commit(UPDATE_QUERY, { route })
    }
  },
  strict: debug
})
