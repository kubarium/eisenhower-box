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
    actionsForThisItem: state => payload => {
      const possibleActions = [];
      //add a move action only if the designated list is not full and it's moving to a different section
      const move = ["Do", "Decide", "Delegate", "Later"]
        .filter(section => section.toLowerCase() != payload.section)
        .reduce((moveables, section) => {
          if (state.section[section.toLowerCase()].length != 4) {
            return moveables.concat({
              text: `Move to ${section}`,
              payload: {
                intention: "move",
                from: payload.section,
                which: payload.index,
                to: section.toLowerCase()
              }
            });
          } else {
            return moveables;
          }
        }, []);

      possibleActions.unshift({
        text: "Delete It",
        payload: { intention: "removeItem" }
      });
      if (state.section[payload.section][payload.index].done != true) {
        possibleActions.unshift({
          text: "I'm Done!",
          payload: { intention: "done" }
        });
      }
      return possibleActions.concat(move);
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
    concatItem(state, payload) {
      state.section[payload.section].unshift(payload.item);
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
    },
    moveItem(context, payload) {
      //hold the item we want to move
      const item = context.state.section[payload.from][payload.index];
      //remove the item from existing section
      context.commit("removeItem", { section: payload.from, index: payload.index });
      //move the holding item to the new section
      context.commit("concatItem", { section: payload.to, item });
      //then store the changes
      context.commit("updateStorage");
    }
  }
});
