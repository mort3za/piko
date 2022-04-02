import { defineStore } from "pinia";

const defaultState = {
  showCompose: false,
};

const actions = {
  toggleCompose() {
    // @ts-ignore
    this.showCompose = !this.showCompose;
  },
};

export const useLayoutStore = defineStore("layout", {
  state: () => defaultState,
  actions,
});
