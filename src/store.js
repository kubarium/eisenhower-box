import Vue from "vue";
import Vuex from "vuex";
import items from "./items.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    heading: {
      do: "Do",
      decide: "Decide",
      delegate: "Delegate",
      later: "Do it later"
    },
    subheading: {
      do: "Do it now.",
      decide: "Schedule a time to do it.",
      delegate: "Who can do it for you?",
      later: "Stop doing this or do it in moderation!"
    },
    placeholder: {
      do: "Do it, do it now!",
      decide: "Tackle this soon but not right now.",
      delegate: "Find another poor soul to help you. AI for conscience?",
      later: "This may be what you want but is this what you really need?"
    },
    section: {}
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
    },
    loadStorage(state) {
      let storedItems = localStorage.getItem("eisenhower-box");

      state.section = storedItems ? JSON.parse(storedItems) : items;
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
