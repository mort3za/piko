import { api } from "@services/api";
import { Status } from "twitter-d";
import { defineStore } from "pinia";

export const useTimelineStore = defineStore("timeline", {
  state: () => ({ latestStatuses: [], profileStatuses: [], mentionStatuses: [] }),
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

    mentionStatusesFetch(params: Partial<TimelinePaginationParams> = {}, query: string) {
      const url = `/timelines/search-statuses`;
      return api({
        url,
        params: {
          ...params,
          query,
          "tweet.fields":
            "attachments,author_id,context_annotations,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,public_metrics,referenced_tweets,reply_settings,source,text,withheld",
          "media.fields":
            "alt_text,duration_ms,height,media_key,preview_image_url,public_metrics,type,url,width",
          "user.fields":
            "created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,public_metrics,url,username,verified,withheld",
        },
      }).then((res: any) => {
        if (!res.ok) throw res.data;
        // @ts-ignore
        this.profileStatuses = res.data as Status[];
      });
    },
  },
});
