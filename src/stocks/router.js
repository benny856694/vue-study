import vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Portfolio from "./components/portfolio/Portfolio.vue";
import Stocks from "./components/stocks/Stocks.vue";
import SignUp from "./components/users/signup.vue";
import SignIn from "./components/users/signin.vue";

vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    { path: "/portfolio", component: Portfolio },
    { path: "/stocks", component: Stocks },
    { path: "/signup", component: SignUp },
    { path: "/signin", component: SignIn },
  ]
});
