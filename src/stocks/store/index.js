import Vue from "vue";
import Vuex from "vuex";
import portfolio from "./modules/portfolio";
import stocks from "./modules/stocks";
import axio from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  actions: {
    saveData: (context, payload) => {
      var data = {
        portfolio: context.state.portfolio,
        stocks: context.state.stocks
      };
      axio.put("https://vue-study-ebc06.firebaseio.com/stocktrader/.json", data);
    },
    loadData: (context, payload) => {
      var ctx = context;
      axio.get("https://vue-study-ebc06.firebaseio.com/stocktrader/.json")
        .then(function(response){
            console.log(response);
            ctx.commit('loadData', response.data);
        });
      
    },
  },
  mutations: {
    loadData: (state, payload) => {
      state.stocks.all = payload.stocks.all;
      state.portfolio.funds = payload.portfolio.funds;
      state.portfolio.stocks = payload.portfolio.stocks ? payload.portfolio.stocks : [];
    } 
  },

  modules: {
    stocks,
    portfolio
  }
});
