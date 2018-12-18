<template>
  <div class="card col-sm-6 fix-width mb-4 px-0 ">
    <div class="card-header bg-success text-white">
      {{ stock.name }}
      <small>(price: {{ stock.price }})</small>
    </div>
    <div class="card-body">
    
    <form class="form-inline" style="justify-content: space-between">
     <input type="text" v-model.number="quantity" placeholder="Quantity" class="form-control col-6" >
      <button  
      @click.prevent="buyStockWrapper({id: stock.id, quantity, price: stock.price})" 
      class="btn btn-success"
      :disabled=" quantity <= 0 || insufficientFunds"
      >
      {{ insufficientFunds ? "Insufficient Funds" : 'Buy'}}
      </button>
    </form>

      
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      quantity: 0
    };
  },
  props: ["stock"],
  methods: {
    buyStockWrapper(payload) {
      this.buyStock(payload);
      this.quantity = 0;
    },
    ...mapMutations('portfolio', [
    'buyStock'
    ])
  },
  computed: {
    insufficientFunds() {
      return this.quantity * this.stock.price > this.$store.state.portfolio.funds;
    }
  }
};
</script>
<style scoped>



</style>
