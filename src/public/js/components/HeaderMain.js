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
      <h3>Luposki</h3>
      <img src="https://i.pravatar.cc/150?img=14" alt="Photo profile"/>
      <i class="ai-more-vertical-fill"></i>
    </div>

    <div class="profile-configs">
      <div class="logout">
        <button @click="logout()">Sair</button>
      </div>
    </div>
  </header>
  `,
  data() {
    return {
      
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('user')
      this.$store.commit('logout')
      this.$router.push('/Login')
    }
  }
}
