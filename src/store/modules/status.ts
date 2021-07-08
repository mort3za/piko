import { ajax } from "@/functions/utils";
import { cloneDeep } from "lodash-es";

const defaultState = {};

const mutations = {};
const actions = {
  statusFetch(context, id: number) {
    const url = "/status";
    return ajax(url, { method: "GET", body: JSON.stringify({ id: id }) });
  },
};
const getters = {};

export default {
  namespaced: true,
  state: cloneDeep(defaultState),
  getters,
  actions,
  mutations,
};
