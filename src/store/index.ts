import { createStore } from "vuex";
import timeline from "./modules/timeline";
import status from "./modules/status";

export const store = createStore({
  strict: process.env.NODE_ENV === "development",
  modules: { timeline, status },
});
