import { api } from "@services/api";
import { Status } from "twitter-d";
import { defineStore } from "pinia";

export const useTimelineStore = defineStore("timeline", {
  state: () => ({ latestStatuses: [], profileStatuses: [] }),
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

    profileStatusesFetch(params: Partial<TimelinePaginationParams> = {}, screen_name: string) {
      const url = `/timelines/profile-statuses`;
      return api({
        url,
        params: { ...params, screen_name },
      }).then((res: any) => {
        if (!res.ok) throw res.data;
        // @ts-ignore
        this.profileStatuses = res.data as Status[];
      });
    },
  },
});
