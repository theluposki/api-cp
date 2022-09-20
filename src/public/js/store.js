export const store = Vuex.createStore({
  state () {
    return {
      user: null
    }
  },
  mutations: {
    logar(state, payload) {
      state.user = payload
    },
    logout(state, payload) {
      state.user = null
    },
  }
})
