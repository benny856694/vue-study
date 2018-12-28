import auth from "../auth";

export default {
  namespaced: true,
  state: {
    idToken: null
  },

  getters: {
    isAuthenticated: state => state.idToken !== null,
  },

  mutations: {
    logIn: (state, token) => (state.idToken = token),
    logOut: state => state.idToken = null,
  },

  actions: {
    signUp: (context, payload) => {
      auth
        .post("/signupNewUser", { email: payload.email, password: payload.password, returnSecureToken: true })
        .then(response => {
          context.commit("logIn", response.data.idToken);
          
        })
        .catch(error => console.log(error));
    },
    signIn: (context, payload) => {
      auth
        .post("/verifyPassword", {email: payload.email, password: payload.password, returnSecureToken: true})
        .then(response => {
          context.commit("logIn", response.data.idToken);
        })
        .catch(error => console.log(error));
    },
  }
};
