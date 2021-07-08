import { cloneDeep } from "lodash-es";
import { ajax } from "@functions/utils";
import { Status } from "twitter-d";

const defaultState = {
  latestStatuses: [],
};

const mutations = {
  latestStatusesUpdate(state, payload: Status[]) {
    console.log("payload", payload);

    state.latestStatuses = payload;
  },
};
const actions = {
  async latestStatusesFetch(context, payload: StatusesHomeTimelinePayload = {}) {
    const searchParams = new URLSearchParams(payload);
    console.log("searchParams:", searchParams.toString());

    const url = `/timelines/latest-statuses?${searchParams.toString()}`;
    return ajax(url, {
      method: "GET",
      credentials: "include",
      // fixme: remove in prod
      cache: "force-cache",
    }).then(async (res) => {
      if (!res.ok) {
        throw await res.json();
      }
      const list = await res.json();
      context.commit("latestStatusesUpdate", list);
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
