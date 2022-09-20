import { store } from "./store.js"
import { routes } from "./router.js"

import { HeaderMain } from "./components/HeaderMain.js"
import { Navigation } from "./components/Navigation.js"

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

const app = Vue.createApp({
  components: {
    HeaderMain,
    Navigation
  },
  mounted(){
    this.isLoggedIn()
  },
  data(){
    return {
      title: "MyApp Vue =D"
    }
  },
  methods: {
    isLoggedIn() {
      
      if(localStorage.getItem('user')) {
        const parts = JSON.parse(localStorage.getItem('user'))

        if(parts.token && parts.msg) {
          this.$store.commit('logar', JSON.parse(localStorage.getItem('user')))
          this.$router.push('/')
        }
      } else {
        this.$router.push('/Login')
      }
    },
  }
});

app.use(store);

app.use(router);

app.mount("#app");
