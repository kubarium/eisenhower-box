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
      delegate: "Ask someone to do it for you.",
      later: "Stop doing this or do it in moderation!"
    },
    placeholder: {
      do: "Do it, do it now!",
      decide: "Tackle this soon but not right now.",
      delegate: "Find another poor soul to help you.",
      later: "Is this what you really need?"
    },
    section: {}
  },
  getters: {
    actionsForSection: state => forSection => {
      return ["Do", "Decide", "Delegate", "Later"].filter(section => section.toLowerCase() != forSection).reduce(
        (actions, section) => {
          //add a move action only if the designated list is not full and it's moving to a different section
          if (state.section[section.toLowerCase()].length != 4) {
            return actions.concat({
              text: `Move to ${section}`,
              payload: { intention: "move", to: section }
            });
          } else {
            return actions;
          }
        },
        [
          {
            text: "I'm Done!",
            payload: { intention: "done" }
          },
          {
            text: "Delete It",
            payload: { intention: "removeItem" }
          }
        ]
      );
    }
  },
  mutations: {
    addItem(state, payload) {
      state.section[payload.section].unshift({ text: "", done: false });
    },
    editItem(state, payload) {
      const item = state.section[payload.section][payload.index];
      item.text = payload.text;
      state.section[payload.section].splice(payload.index, 1, item);
    },
    removeItem(state, payload) {
      state.section[payload.section].splice(payload.index, 1);
    },
    finishItem(state, payload) {
      const item = state.section[payload.section][payload.index];
      item.done = true;
      state.section[payload.section].splice(payload.index, 1, item);
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
