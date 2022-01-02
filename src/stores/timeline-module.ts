import { api } from "@services/api";
import { Status } from "twitter-d";
import { defineStore } from "pinia";

export const useTimelineStore = defineStore("timeline", {
  state: () => ({ latestStatuses: [] }),
  actions: {
    latestStatusesFetch(params: Partial<TimelinePaginationParams> = {}) {
      const url = `/timelines/latest-statuses`;
      return api({
        url,
        params,
      }).then((res: any) => {
        if (!res.ok) throw res.data;
        // @ts-ignore
        this.latestStatuses = res.data as Status[];
      });
    },
  },
});
