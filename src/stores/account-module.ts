import { api } from "@services/api";
import { onJsonResponse } from "@services/response";
import { defineStore } from "pinia";

const defaultState = {};

const actions = {
  listsListFetch() {
    const url = `/lists/list`;
    return api(url, { method: "GET" }).then(onJsonResponse);
  },
};

export const useAccountStore = defineStore("account", {
  state: () => defaultState,
  actions,
});
