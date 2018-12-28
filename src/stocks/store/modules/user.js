import auth from "../auth";
import {mapMutations} from 'vuex';

export default {
  namespaced: true,
  state: {
    idToken: null,
    expiresIn: null,
  },

  getters: {
    isAuthenticated: state => state.idToken !== null,
  },

  mutations: {
    
    logIn: (state, {idToken, expiresIn}) => {
      state.idToken = idToken;
      //var expiresInD = new Date(new Date().getTime() + parseInt(expiresIn, 10) * 1000 );
      state.expiresIn = expiresIn;
     
    },
    
    logOut: state => {
      state.idToken = null;
      state.expiresIn = null;
      localStorage.removeItem("idToken");
      localStorage.removeItem("expiresIn");
    } ,
  },

  actions: {
    tryLogIn(context) {
      var idToken = localStorage.getItem("idToken");
      var expiresIn = localStorage.getItem("expiresIn");
      if (expiresIn) expiresIn = new Date(Date.parse(expiresIn));
      if (expiresIn > new Date()) {
        console.log("logIn");
        context.commit("logIn", { idToken, expiresIn });
      }
    },
    signUp: (context, payload) => {
      auth
        .post("/signupNewUser", {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        .then(response => {
          
          localStorage.setItem("idToken", response.data.idToken);
          var expiresInD = new Date(new Date().getTime() + parseInt(response.data.expiresIn, 10) * 1000);
          localStorage.setItem("expiresIn", expiresInD);
          context.commit("logIn", {idToken: response.data, expiresIn: expiresInD} );
        })
        .catch(error => console.log(error));
    },
    signIn: (context, payload) => {
      auth
        .post("/verifyPassword", {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        })
        .then(response => {
          
          localStorage.setItem("idToken", response.data.idToken);
          var expiresInD = new Date(new Date().getTime() + parseInt(response.data.expiresIn, 10) * 1000);
          localStorage.setItem("expiresIn", expiresInD); 
          context.commit("logIn", { idToken: response.data, expiresIn: expiresInD });
        })
        .catch(error => console.log(error));
    }
  }
};
