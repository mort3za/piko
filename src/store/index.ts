import { createStore } from "vuex";
import timeline from "./modules/timeline";

export const store = createStore({
  strict: process.env.NODE_ENV === "development",
  modules: { timeline },
});
