export default {
  namespaced: true,
  state: {
    all: [
      { id: 1, name: "BMW", price: 110 },
      { id: 2, name: "APPLE", price: 120 },
      { id: 3, name: "GOOGLE", price: 130 }
    ]
  },
  getters: {
    stocks: (state) => state.all,
  },
  mutations: {
    randomizeStocks: (state, payload) => 
        state.all.forEach(stock => 
          stock.price = Math.round(stock.price * (1 + Math.random() - 0.5))
        ),
    
  },
};
