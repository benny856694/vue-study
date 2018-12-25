<template>
  <div class="row" >
   <Stock v-for="item in stocks" :stock="item" :key="item.id"></Stock>
  </div>
</template>

<script>
import Stock from "./Stock.vue";
import {mapGetters} from 'vuex';

export default {
  data() {
    
    return {
      all: this.$store.state.stocks.all,
    };
    
  },
  computed: {
    ...mapGetters('stocks', ['stocks'])
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
