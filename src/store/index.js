import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: "",
  },
  mutations: {
    update_joke(state, payload) {
      state.joke = payload;
    },
  },
  actions: {
    // This is retriving the joke from the axios call
    get_joke_from_axios(store) {
      axios
        .request({
          url: "https://geek-jokes.sameerkumar.website/api?format=json",
        })
        .then((response) => {
          store.commit("update_joke", response.data.joke);
        })
        .catch((error) => {
          error;
        });
    },
  },
});
