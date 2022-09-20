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
    if(localStorage.getItem('user')) {
      this.$store.commit('logar', JSON.parse(localStorage.getItem('user')))
      this.$router.push('/')
    } else {
      this.$router.push('/Login')
    }
  },
  data(){
    return {
      title: "MyApp Vue =D"
    }
  }
});

app.use(store);

app.use(router);

app.mount("#app");
