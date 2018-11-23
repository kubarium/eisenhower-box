import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    placeholder: {
      do: "Do it, do it now!",
      decide: "decide",
      delegate: "delegate",
      later: "later"
    },
    section: {
      do: ["Write a blog post", "Do taxes", "Project deadline", "Wife in labor"],
      decide: ["Exercise", "Family Time. Call friends", "Researching articles", "Planning long term business strategy"],
      delegate: ["Phone calls and text messages", "Booking fligts", "Answering some emails", "Schedule interviews"],
      later: [
        "Watching television",
        "Social media",
        "Sorting junk email",
        "Beating yourself up for being in this situation"
      ]
    }
  },
  mutations: {
    addItem(state, payload) {
      state.section[payload.section].splice(state.section[payload.section].length, 0, "");
    },
    editItem(state, payload) {
      state.section[payload.section].splice(payload.index, 1, payload.value);
    },
    removeItem(state, payload) {
      state.section[payload.section].splice(payload.index, 1);
      /* switch(payload.section){
        case "do":

      } */
    },
    updateStorage(state, payload) {
      localStorage.setItem("eisenhower-box", JSON.stringify(state.section));
    }
  },
  actions: {}
});
