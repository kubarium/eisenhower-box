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
      state.section[payload.section].splice(payload.index, 1, payload.text);
    },
    removeItem(state, payload) {
      state.section[payload.section].splice(payload.index, 1);
    },
    updateStorage(state) {
      localStorage.setItem("eisenhower-box", JSON.stringify(state.section));
    }
  },
  actions: {
    interactWithItem(context, payload) {
      //payload.intention will be like addItem, editItem, etc.
      context.commit(payload.intention, payload);
      //then store the changes
      context.commit("updateStorage");
    }
  }
});
