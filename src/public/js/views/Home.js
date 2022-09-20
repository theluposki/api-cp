export const Home  = { 
  template: "<h1>Home</h1>",
  mounted() {
    this.isLoggedIn()
  },
  data() {
    return {

    }
  },
  methods: {
    isLoggedIn() {
      if(!localStorage.getItem('user') && !this.$store.state.user) {
        this.$router.push('/Login')
      }
    },
  } 
}
