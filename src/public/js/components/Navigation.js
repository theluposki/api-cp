export const Navigation = {
  template: 
  `
  <header class="navigation">
      <button @click="activeTextNavLink()" class="nav-menu">
        <i class="ai-command"></i>
      </button>
      <router-link class="nav-link" to="/">
        <i class="ai-home"></i>
        <span class="text-nav-link">Início</span>
      </router-link>
      <router-link class="nav-link" to="/about">
        <i class="ai-info"></i>
        <span class="text-nav-link">Info</span>
      </router-link>
  </header>
  `,
  data() {
    return {
      
    }
  },
  methods: {
    activeTextNavLink() {
      const activeTextNavLink = document.querySelectorAll(".text-nav-link")
      activeTextNavLink.forEach(item => {
          item.classList.toggle("active")
      });
    }
  }
}
