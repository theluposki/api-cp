export const About  = { 
  template: "<h1>About</h1>",
  mounted() {
    this.isLoggedIn()
  },
  data() {
    return {

    }
  },
  methods: {
    isLoggedIn() {
      console.log("no log")
      if(!localStorage.getItem('user') && !this.$store.state.user) {
        console.log("isLogii")
        this.$router.push('/Login')
      }
    },
  }  
}
