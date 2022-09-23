export const Login  = { 
  template: 
  `
    <div class="login">
      <form class="form-login">

        <img width="100" src="./img/logo.svg" alt="Logotipo" />

        <div class="form-controll">
          <input v-model="email" type="email" placeholder="digite seu email"/>
          <span :class="classEmailMessage">{{ validMail }}</span>
        </div>

        <div class="form-controll">
          <input v-model="password" type="password" placeholder="digite sua senha"/>
          <span :class="classPasswordMessage">{{ validPassword }}</span>
        </div>
        <span class="messagem-login" v-if="$store.state.user !== null">{{ $store.state.user.msg }}</span>
        <div class="form-controll">
          <button class="btn" type="submit" @click.prevent="logar()">Entrar</button>
        </div>
      </form>
    </div>
  `,
  data() {
    return {
      email: "lu@mail.com",
      validMail: "",
      classEmailMessage: "form-controll-message",
      
      password: "12345678",
      validPassword: "",
      classPasswordMessage: "form-controll-message",
    }
  },
  methods: {
    async logar() {
      this.validMail = ""
      this.validPassword = ""


      axios.post('/users/auth', {
        email: this.email,
        password: this.password
      }).then((data) => {
        this.$store.commit('logar', data.data)
        localStorage.setItem('user', JSON.stringify(data.data))
        this.$router.push('/')
      }).catch((error) => {

        if(error.response) {
          let err = error.response.data.error

          if(err === "Usuário não encontrado.") {
            this.validMail = err
            return 
          }

          if(err === "Senha inválida.") {
            this.validPassword = err
            return
          }
        }
      })


    }
  } 
}
