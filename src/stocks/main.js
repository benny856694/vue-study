// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import router from "./router";
import store from "./store/index";

import axios from "axios";
import VeeValidate from "vee-validate";

Vue.use(VeeValidate);

Vue.filter("currency", value => "$" + value.toLocaleString(value));

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://vue-study-ebc06.firebaseio.com/stocktrader";

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
