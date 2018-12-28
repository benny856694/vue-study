<template>
  <div class="container">
    <AppHeader></AppHeader>
    <router-view></router-view>
  </div>
</template>

<script>
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
  }
};
</script>

<style>
.fix-width {
  max-width: 40%;
}
</style>
