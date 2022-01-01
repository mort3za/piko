import { ajax } from "@functions/utils";
import { Status } from "twitter-d";
import { defineStore } from "pinia";

const defaultState = {
  latestStatuses: [],
};

const actions = {
  async latestStatusesFetch(params: StatusesHomeTimelinePayload = {}) {
    const url = `/timelines/latest-statuses`;
    return ajax({
      url,
      options: {
        method: "GET",
        credentials: "include",
        cache: "no-cache",
      },
      params,
    }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) throw result;
      return result;
    });
  },
};

export const useTimelineStore = defineStore("timeline", {
  state: () => defaultState,
  actions,
});
