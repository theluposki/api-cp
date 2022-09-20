export const HeaderMain = {
  template: 
  `
  <header class="header-main">
    <div class="logo">
      <router-link to="/">
        <img src="../img/logo.svg" alt="Logotipo"/>
        <h2>Api-cp</h2>
      </router-link>
    </div>

    <div class="session-user">
      <h3 v-if="$store.state.dataUser">{{ $store.state.dataUser.nickName }}</h3>
      <img v-if="$store.state.dataUser" :src="$store.state.dataUser.urlProfileImg" alt="Photo profile"/>
      <img v-else src="https://i.pravatar.cc/150?img=14" alt="Photo profile"/>
      <i class="ai-more-vertical-fill"></i>
    </div>

    <div class="profile-configs">
      <div class="logout">
        <button @click="logout()">Sair</button>
      </div>
    </div>
  </header>
  `,
  mounted(){
    this.getInfoUser()
  },
  data() {
    return {
      
    }
  },
  methods: {
    getInfoUser(){
      const id  = this.$store.state.user.id
      axios.get(`/users/${id}`).then((data) => {
        console.log(data.data)
        this.$store.commit('setDataUser', data.data)
      }).catch((error) => {
        if(error.response) {
          let err = error.response.data.error
          console.log(err)
        }
      })
    },
    logout() {
      localStorage.removeItem('user')
      this.$store.commit('logout')
      this.$router.push('/Login')
    }
  }
}
