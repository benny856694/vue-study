<template>
  <div class="card col-sm-6 fix-width mb-4 px-0">
    <div class="card-header bg-success text-white">
      {{ stock.name }}
      <small>(price: {{ stock.price }} | quantity: {{ stock.quantity }})</small>
    </div>
    <div class="card-body">
     <form class="form-inline" style="justify-content: space-between">
     <input type="text" v-model.number="quantity" placeholder="Quantity" class="form-control col-6" >
      <button href="#" @click.prevent="sellStock({id: stock.id, quantity, price: stock.price})" class="btn btn-success">Sell</button>
     </form>
      
    </div>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

export default {
  data() {
    return {
      quantity: 0,
    };
  },
  props: ["stock"],
  methods: {
    
    ...mapMutations('portfolio', [
    'sellStock'
    ])
  }

};
</script>

<style scoped>

</style>
