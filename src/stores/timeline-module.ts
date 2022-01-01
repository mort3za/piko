import { api } from "@services/api";
import { Status } from "twitter-d";
import { defineStore } from "pinia";

const actions = {
  latestStatusesFetch(params: TimelinePaginationParams = {}) {
    const url = `/timelines/latest-statuses`;
    return api({
      url,
      params,
    }).then((res) => {
      if (!res.ok) throw res.data;
      this.latestStatuses = res.data as Status[];
    });
  },
};

export const useTimelineStore = defineStore("timeline", {
  state: () => ({ latestStatuses: [] }),
  actions,
});
