import { cloneDeep } from "lodash-es";
import { makeApiUrl } from "@functions/helpers";
import { Status } from "twitter-d";

const defaultState = {
  latestTweets: [],
};

const mutations = {
  latestTweetsUpdate(state, payload: Status[]) {
    state.latestTweets = payload;
  },
};
const actions = {
  async latestTweetsFetch(context, { count = 20 }) {
    let searchParams = new URLSearchParams("");
    searchParams.set("count", String(count));

    const url = makeApiUrl(`/timelines/latest-tweets?${searchParams.toString()}`);
    return fetch(url, {
      method: "GET",
      credentials: "include",
      // fixme: remove in prod
      cache: "force-cache",
    }).then(async (res) => {
      if (!res.ok) {
        throw await res.json();
      }
      const { list } = await res.json();
      context.commit("latestTweetsUpdate", list);
    });
  },
};
const getters = {
  latestTweetsGet: (state) => state.latestTweets as Status[],
};

export default {
  namespaced: true,
  state: cloneDeep(defaultState),
  getters,
  actions,
  mutations,
};
