import { defineStore } from "pinia";

const defaultState = {
  showCompose: false,
};

const actions = {
  toggleCompose() {
    console.log("toggle1");

    // @ts-ignore
    this.showCompose = !this.showCompose;
  },
};

export const useLayoutStore = defineStore("layout", {
  state: () => defaultState,
  actions,
});
