<template>
  <div class="card">
    
    <div class="card-body">
      <h5 class="card-title">Trade or View your funds</h5>
      <hr>
      <p class="card-text">
        Your funds: ${{funds}}
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    funds() {
      return this.$store.state.portfolio.funds;
    }
  },
  getters: {
    ...mapGetters('portfolio', [
    
    ])
  }
};
</script>

<style></style>
