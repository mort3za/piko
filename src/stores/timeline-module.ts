import { api } from "@services/api";
import { components } from "@twitter";
import { defineStore } from "pinia";
import { getQueryParamsString } from "@services/url";
import { onJsonResponse } from "@services/response";
import { onTimelineResponse, Tweet } from "@services/tweet";
import { router } from "@router/index";

export type TimelineTypes = "latestStatuses" | "profileStatuses" | "mentionStatuses";

export const useTimelineStore = defineStore("timeline", {
  state: () => ({
    statuses: [] as Tweet[],
    meta: {} as components["schemas"]["Get2UsersIdTimelinesReverseChronologicalResponse"]["meta"],
  }),
  getters: {
    timelineParams: (state) => {
      const until_id = router.currentRoute.value.query.oldest_id;
      const since_id = router.currentRoute.value.query.newest_id;
      const result = {
        ...(since_id && { since_id }),
        ...(until_id && { until_id }),
        ...(router.currentRoute.value.meta?.timeline ?? {}),
      };
      return result as Partial<TimelinePaginationParams>;
    },
  },
  actions: {
    clear() {
      this.statuses = [];
    },
    latestStatusesFetch() {
      const path = `/timelines/latest-statuses${getQueryParamsString(this.timelineParams)}`;

      return api(path)
        .then(onJsonResponse)
        .then(onTimelineResponse)
        .then((result) => {
          this.statuses = result.tweets;
          this.meta = result.meta;
          return result.tweets;
        });
    },

    profileStatusesFetch(username: string) {
      const qParams = { ...this.timelineParams, username };
      const path = `/timelines/profile-statuses${getQueryParamsString(qParams)}`;
      return api(path)
        .then(onJsonResponse)
        .then(onTimelineResponse)
        .then((result) => {
          this.statuses = result.tweets;
          this.meta = result.meta;
          return result.tweets;
        });
    },

    listStatusesFetch(list_id: string) {
      const qParams = { ...this.timelineParams, list_id };
      const path = `/timelines/list-statuses${getQueryParamsString(qParams)}`;
      return api(path)
        .then(onJsonResponse)
        .then(onTimelineResponse)
        .then((result) => {
          this.statuses = result.tweets;
          this.meta = result.meta;
          return result.tweets;
        });
    },
  },
});
