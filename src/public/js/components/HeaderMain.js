export const HeaderMain = {
  template:
    `
  <header class="header-main">
    <div class="logo">
      <router-link to="/">
        <img class="img-logo" src="../img/logo.svg" alt="Logotipo"/>
        <h2>Api-cp</h2>
      </router-link>
    </div>

    <div class="session-user">
      <h3 v-if="$store.state.dataUser">@{{ $store.state.dataUser.nickName }}</h3>
      <img v-if="$store.state.dataUser" :src="$store.state.dataUser.urlProfileImg" alt="Photo profile"/>
      <img v-else src="https://i.pravatar.cc/150?img=14" alt="Photo profile"/>
      <i @click="showProfileConfigs()" class="ai-more-vertical-fill"></i>
    </div>

    <div class="profile-configs">
      <div v-if="$store.state.dataUser">
        <h2 class="pc-name"><i class="ai-person"></i>{{ $store.state.dataUser.name }}</h2>
        <span class="pc-email">{{ $store.state.dataUser.email }}</span>
      </div>
      <div class="logout">
        <button @click="logout()">Sair</button>
      </div>
    </div>
  </header>
  `,
  mounted() {
    this.getInfoUser()
  },
  data() {
    return {

    }
  },
  methods: {
    showProfileConfigs() {
      const profileConfigs = document.querySelector(".profile-configs")
      profileConfigs.classList.toggle("show-pc")
    },
    getInfoUser() {
      const id = this.$store.state.user.id
      axios.get(`/users/${id}`).then((data) => {
        this.$store.commit('setDataUser', data.data)
      }).catch((error) => {
        if (error.response) {
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
