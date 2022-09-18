import { Home } from "./views/Home.js"
import { About } from "./views/About.js"
import { Login } from "./views/Login.js"


export const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/about", component: About },
];
