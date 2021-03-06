import { api, statusesAdaptorV2 } from "@services/api";
import { Status } from "twitter-d";
import { defineStore } from "pinia";
import { getQueryParamsString } from "@services/url";
import { onJsonResponse } from "@services/response";
import { router } from "@router/index";

export type TimelineTypes = "latestStatuses" | "profileStatuses" | "mentionStatuses";

export const useTimelineStore = defineStore("timeline", {
  state: () => ({
    statuses: [] as Status[],
  }),
  getters: {
    timelineParams: (state) => {
      const since_id = router.currentRoute.value.query.since_id as string;
      const max_id = router.currentRoute.value.query.max_id as string;
      const result = {
        ...(since_id && { since_id }),
        ...(max_id && { max_id }),
        ...((router.currentRoute.value.meta?.timeline as Object) ?? {}),
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
        .then((result: Status[]) => {
          this.statuses = result;
        });
    },

    profileStatusesFetch(screen_name: string) {
      const qParams = { ...this.timelineParams, screen_name };
      const path = `/timelines/profile-statuses${getQueryParamsString(qParams)}`;
      return api(path)
        .then(onJsonResponse)
        .then((result: Status[]) => {
          this.statuses = result;
        });
    },

    listStatusesFetch(list_id: string) {
      const qParams = { ...this.timelineParams, list_id };
      const path = `/timelines/list-statuses${getQueryParamsString(qParams)}`;
      return api(path)
        .then(onJsonResponse)
        .then((result: Status[]) => {
          this.statuses = result;
        });
    },

    // api v2
    mentionStatusesFetch(query: string) {
      // documentation: https://developer.twitter.com/en/docs/twitter-api/fields
      const defaultQueryParams = {
        "tweet.fields":
          "attachments,author_id,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,reply_settings,source,text,withheld",
        "media.fields":
          "alt_text,duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width",
        "user.fields":
          "created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld",
        expansions: "attachments.poll_ids,attachments.media_keys,author_id",
      };
      const qParams = {
        ...defaultQueryParams,
        ...this.timelineParams,
        query,
      };
      const path = `/timelines/search-statuses${getQueryParamsString(qParams)}`;
      return api(path)
        .then(onJsonResponse)
        .then(({ data, includes }) => {
          return statusesAdaptorV2(data, includes);
        })
        .then((result: Status[]) => {
          this.statuses = result;
        });
    },
  },
});
