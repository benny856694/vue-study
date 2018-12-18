<template>
  <div class="row">
    <Stock v-for="stock in stockHolding" :stock="stock" :key="stock.id"></Stock>
    <h6 v-if="stockHolding.length == 0">Buy stock from stocks view</h6>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Stock from "./Stock.vue";

export default {
  computed: {
    ...mapGetters("portfolio", ["stockHolding"])
  },
  components: {
    Stock
  }
};
</script>

<style scoped>
.row {
  align-content: space-evenly;
  justify-content: space-evenly;
}
</style>
