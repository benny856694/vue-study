<template>
  <div class="container">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import AppHeader from "./components/Header";
import Stocks from "./components/stocks/Stocks";
import Portfolio from "./components/portfolio/Portfolio";
import SignUp from "./components/users/signup";

export default {
  components: {
    AppHeader,
    Stocks,
    Portfolio,
    SignUp
  },
  methods: {
    ...mapActions("user", ['tryLogIn'])
  },
  created() {
    //console.log("try Log in");
    this.tryLogIn();
  },
 
};
</script>

<style>
.fix-width {
  max-width: 40%;
}
</style>
