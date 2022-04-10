import { Status } from "twitter-d";

const { VITE_API_ORIGIN, VITE_API_BASE } = import.meta.env;

const apiUrl = `${VITE_API_ORIGIN}${VITE_API_BASE}`;
export const api = (path: string, options: RequestInit) => {
  const headers = new Headers();

  const req = new Request(`${apiUrl}${path}`, { credentials: "include", headers, ...options });
  return fetch(req).then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response;
  });
};

export const apiLink = (path: string) => `${apiUrl}${path}`;

// adapt api v2 statuses
export const statusesAdaptorV2 = (data: any[], includes: any): Status[] => {
  const v1status = data.map((v2item: any) => {
    const {
      created_at,
      id,
      text,
      entities,
      source,
      in_reply_to_user_id,
      lang,
      reply_settings,
      public_metrics,
      possibly_sensitive,
      author_id,
    } = v2item;
    return {
      author_id,
      possibly_sensitive,
      created_at,
      id,
      id_str: id,
      full_text: text,
      entities: {
        hashtags: [],
        symbols: [],
        user_mentions: (entities.mentions ?? []).map((mention: any) => ({
          id: mention.id,
          id_str: mention.id,
          screen_name: mention.username,
          indices: [mention.start, mention.end],
        })),
        urls: (entities.urls ?? []).map((url: any) => ({
          indices: [url.start, url.end],
          display_url: url.display_url,
          expanded_url: url.expanded_url,
          url: url.url,
        })),
      },
      source,
      in_reply_to_user_id,
      in_reply_to_user_id_str: in_reply_to_user_id,
      lang,
      reply_settings,
      retweet_count: public_metrics.retweet_count,
      favorite_count: public_metrics.like_count,
      reply_count: public_metrics.reply_count,
      quote_count: public_metrics.quote_count,
    };
  });

  const v1statusHyderatedWithUsers = v1status.map((item: any) => {
    const { profile_image_url, id, name, username, verified } = (includes.users || []).find(
      (u: any) => u.id === item.author_id,
    );

    return {
      ...item,
      user: {
        id_str: id,
        id,
        name,
        profile_image_url_https: profile_image_url,
        screen_name: username,
        verified,
      },
    };
  });

  return v1statusHyderatedWithUsers;
};
