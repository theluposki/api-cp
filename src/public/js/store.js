export const store = Vuex.createStore({
  state () {
    return {
      user: null,
      dataUser: null
    }
  },
  mutations: {
    setDataUser(state, payload){
      state.dataUser = payload
    },
    logar(state, payload) {
      state.user = payload
    },
    logout(state, payload) {
      state.user = null
    },
  }
})
