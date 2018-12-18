<template>
  <div class="row" >
   <Stock v-for="item in all" :stock="item" :key="item.id"></Stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";

export default {
  data() {
    
    return {
      all: this.$store.state.stocks.all,
    };
    
  },
  components: {
    Stock
  },
  methods: {
    foo() {
      //console.log(this.$store.state.stocks.all);
    },
  }
};
</script>

<style scoped> 

.row {
  align-content: space-evenly;
  justify-content: space-evenly;
}
 
</style>
