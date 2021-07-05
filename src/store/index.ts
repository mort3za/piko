import { createStore } from "vuex";
import timeline from "./modules/timeline";

export const store = createStore({
  modules: { timeline },
});
