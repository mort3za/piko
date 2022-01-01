import { ajax } from "@functions/utils";
import { Status } from "twitter-d";
import { defineStore } from "pinia";

const actions = {
  latestStatusesFetch(params: StatusesHomeTimelinePayload = {}) {
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
      console.log("result", result);

      this.latestStatuses = result as Status[];
    });
  },
};

export const useTimelineStore = defineStore("timeline", {
  state: () => ({ latestStatuses: [] }),
  actions,
});
