import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: "",
    token: "",
    isLoading: false
  },
  getters: {
    user(state) {
      if (!_.size(state.user)) {
        var user = {};
        var u = JSON.parse(window.localStorage.getItem("user"));
        if (u) {
          user = u;
        }
        localStorage.setItem("user", JSON.stringify(user));
        state.user = user; //this.$store.commit("setUser", user);
        return user;
      }
      return state.user
    },
    token(state) {
      return state.token
    }
  },
  mutations: {
    setUser(state, user) {
      sessionStorage.setItem("token", user);
      state.user = user;
    },
    setToken(state, token) {
      sessionStorage.setItem("token", token);
      state.token = token;
    },
    LOGOUT(state) {
      sessionStorage.clear();
      state.user = null;
      state.token = null
    },
    updateLoadingStatus(state, isLoading) {
      state.isLoading = isLoading;
    }
  },
  actions: {

  }
})
