import { cloneDeep } from "lodash-es";
import { makeApiUrl } from "@functions/helpers";

const defaultState = {};

const mutations = {};
const actions = {
  fetchLatestTweets(context, { count = 20 }) {
    const url = makeApiUrl("/timelines/latest-tweets");
    fetch(url, { method: "GET" });
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
