<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light my-3">
    <router-link to="/"
      ><a class="navbar-brand" href="#">Stock Trader</a></router-link
    >
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link class="nav-item" tag="li" to="/portfolio">
          <a class="nav-link" href="#"
            >Portfolio <span class="sr-only">(current)</span></a
          >
        </router-link>
        <router-link class="nav-item" to="/stocks" tag="li"
          ><a class="nav-link" href="#">Stocks</a></router-link
        >
       
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item" tag="li" to="/portfolio">
          <a class="nav-link" href="#" @click.prevent="randomizeStocks"
            >End Day <span class="sr-only">(current)</span></a
          >
        </li>
        
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Save & Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" @click="saveData" href="javascript:void(0)">Save Data</a>
            <a class="dropdown-item" @click="loadData" href="javascript:void(0)">Load Data</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link">Your funds: {{funds | currency}}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

export default {
  computed: {
    ...mapState('portfolio', [ 'funds' ])
  },
  methods: {
    ...mapMutations('stocks', ['randomizeStocks']),
    ...mapActions(['saveData', 'loadData'])
  }
};
</script>

<style></style>
