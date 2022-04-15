import { api, statusesAdaptorV2 } from "@services/api";
import { Status } from "twitter-d";
import { defineStore } from "pinia";
import { getQueryParamsString } from "@services/url";
import { onJsonResponse } from "@services/response";

export type TimelineTypes = "latestStatuses" | "profileStatuses" | "mentionStatuses";

export const useTimelineStore = defineStore("timeline", {
  state: () => ({
    statuses: [] as Status[],
  }),
  actions: {
    latestStatusesFetch(params: Partial<TimelinePaginationParams> = {}) {
      const path = `/timelines/latest-statuses${getQueryParamsString(params)}`;

      return api(path, {
        method: "GET",
        // cache: "force-cache",
      })
        .then(onJsonResponse)
        .then((result: Status[]) => {
          this.statuses = result;
        });
    },

    profileStatusesFetch(paginationParams: Partial<TimelinePaginationParams>, screen_name: string) {
      const qParams = { ...paginationParams, screen_name };
      const path = `/timelines/profile-statuses${getQueryParamsString(qParams)}`;
      return api(path, {
        method: "GET",
      })
        .then(onJsonResponse)
        .then((result: Status[]) => {
          this.statuses = result;
        });
    },

    // api v2
    mentionStatusesFetch(paginationParams: Partial<TimelinePaginationParams> = {}, query: string) {
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
        ...paginationParams,
        query,
      };
      const path = `/timelines/search-statuses${getQueryParamsString(qParams)}`;
      return api(path, {
        method: "GET",
      })
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
