import Vue from "vue";
import Vuex from "vuex";
import portfolio from "./modules/portfolio";
import stocks from "./modules/stocks";
import user from "./modules/user";
import axio from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  getters: {},
  actions: {
    saveData: (context, payload) => {
      var data = {
        portfolio: context.state.portfolio,
        stocks: context.state.stocks
      };
      axio.put("/.json", data, {
        params: { auth: context.state.user.idToken }
      });
    },
    loadData: (context, payload) => {
      var ctx = context;
      axio
        .get("/.json", { params: { auth: context.state.user.idToken } })
        .then(function(response) {
          console.log(response);
          ctx.commit("loadData", response.data);
        });
    }
  },
  mutations: {
    loadData: (state, payload) => {
      state.stocks.all = payload.stocks.all;
      state.portfolio.funds = payload.portfolio.funds;
      state.portfolio.stocks = payload.portfolio.stocks
        ? payload.portfolio.stocks
        : [];
    }
  },

  modules: {
    stocks,
    portfolio,
    user
  }
});
