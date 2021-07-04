import { createStore } from "vuex";
import timeline from "./modules/timeline";

export const store = createStore({
  modules: { timeline },
  state() {
    return {
      count: 0,
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
