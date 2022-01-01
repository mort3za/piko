import { api } from "@services/api";
import { Status } from "twitter-d";
import { defineStore } from "pinia";

const actions = {
  latestStatusesFetch(params: StatusesHomeTimelinePayload = {}) {
    const url = `/timelines/latest-statuses`;
    return api({
      url,
      params,
    }).then(async (res) => {
      console.log(res);

      if (!res.ok) throw res.data;

      this.latestStatuses = res.data as Status[];
    });
  },
};

export const useTimelineStore = defineStore("timeline", {
  state: () => ({ latestStatuses: [] }),
  actions,
});
