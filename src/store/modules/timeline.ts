import { cloneDeep } from "lodash-es";
import { makeApiUrl } from "@functions/helpers";

const defaultState = {
  latestTweets: [],
};

const mutations = {
  latestTweetsUpdate(state, payload) {
    state.latestTweets = payload;
  },
};
const actions = {
  async latestTweetsFetch(context, { count = 20 }) {
    let searchParams = new URLSearchParams("");
    searchParams.set("count", String(count));
    console.log("searchParams", searchParams);

    const url = makeApiUrl("/timelines/latest-tweets");
    return fetch(url, { method: "GET", credentials: "include" }).then(async (res) => {
      if (!res.ok) {
        throw await res.json();
      }
      return res.json();
    });
  },
};
const getters = {
  latestTweetsGet: (state) => state.latestTweets,
};

export default {
  namespaced: true,
  state: cloneDeep(defaultState),
  getters,
  actions,
  mutations,
};
