import { cloneDeep } from "lodash-es";
import { ajax } from "@functions/utils";
import { Status } from "twitter-d";

const defaultState = {
  latestStatuses: [],
};

const mutations = {
  latestStatusesUpdate(state, payload: Status[]) {
    state.latestStatuses = payload;
  },
};
const actions = {
  async latestStatusesFetch(context, params: StatusesHomeTimelinePayload = {}) {
    const url = `/timelines/latest-statuses`;
    console.log("url", url);
    return ajax({
      url,
      options: {
        method: "GET",
        credentials: "include",
        cache: "no-cache",
      },
      params,
    })
      .then(async (res) => {
        const result = await res.json();
        if (!res.ok) throw result;
        return result;
      })
      .then((result) => {
        context.commit("latestStatusesUpdate", result);
      });
  },
};
const getters = {
  latestStatusesGet: (state) => state.latestStatuses as Status[],
};

export default {
  namespaced: true,
  state: cloneDeep(defaultState),
  getters,
  actions,
  mutations,
};
