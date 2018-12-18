//stocks shape: {id, quantity}

export default {
  namespaced: true,
  state: {
    funds: 10000,
    stocks: []
  },
  mutations: {
    buyStock: (state, payload) => {
      var record = state.stocks.find(item => item.id == payload.id);
      if (record) {
        record.quantity += payload.quantity;
      } else {
        state.stocks.push({
          id: payload.id,
          quantity: payload.quantity
        });
      }

      state.funds -= payload.quantity * payload.price;
    },
    sellStock: (state, payload) => {
      var record = state.stocks.find(item => item.id == payload.id);
      if(record) {
        record.quantity -= payload.quantity;
        if(record.quantity == 0) state.stocks.splice(state.stocks.indexOf(record), 1);
      }

      state.funds += payload.price * payload.quantity;
    },
  },
  getters: {
    stockHolding: (state, getters, rootState, rootGetters) => {
      return state.stocks.map(({ id, quantity }) => {
        var stock = rootState.stocks.all.find(item => item.id == id);
        return { id, name: stock.name, quantity, price: stock.price };
      });
    }
  }
};
