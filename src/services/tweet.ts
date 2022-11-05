import { components } from "@twitter";

type ReferencedTweetType = "retweeted" | "quoted" | "replied_to";

export type PureTweet = components["schemas"]["Tweet"];

export type Tweet = components["schemas"]["Tweet"] & {
  retweeted?: Tweet;
  replied_to?: Tweet;
  quoted?: Tweet;
  user?: components["schemas"]["User"];
  in_reply_to_user?: components["schemas"]["User"];
  photos: components["schemas"]["Photo"][];
  videos: components["schemas"]["Video"][];
  hasMedia: boolean;
};

function attachUser(tweet: PureTweet, users: components["schemas"]["User"][]) {
  const user = users.find((user) => user.id === tweet.author_id);
  const in_reply_to_user = users.find((user) => user.id === tweet.in_reply_to_user_id);
  return { ...tweet, user, in_reply_to_user };
}

function attachMedia(tweet: PureTweet, mediaList: components["schemas"]["Media"][]): Tweet {
  const photos: Tweet["photos"] = [];
  const videos: Tweet["videos"] = [];
  let hasMedia = false;
  tweet.attachments?.media_keys?.forEach((mediaKey) => {
    const mediaItem = mediaList.find((item) => item.media_key === mediaKey);
    if (mediaItem?.type === "photo") {
      photos.push(mediaItem);
      hasMedia = true;
    }
    if (mediaItem?.type === "video") {
      videos.push(mediaItem);
      hasMedia = true;
    }
  });
  return { ...tweet, photos, videos, hasMedia };
}

export const onTimelineResponse = ({ data }: any) => {
  let result = data;
  result = result.data
    .map((tweet: Tweet) => attachUser(tweet, data.includes.users))
    .map((tweet: Tweet) => attachMedia(tweet, data.includes.media));
  result = result.map((tweet: Tweet) => {
    const referencedTweetTypes: ReferencedTweetType[] = ["retweeted", "quoted", "replied_to"];
    referencedTweetTypes.forEach((type: ReferencedTweetType) => {
      const tweetRef = tweet?.referenced_tweets?.find((reference) => reference.type === type);
      if (tweetRef) {
        let referencedTweet = data.includes.tweets.find((tweet: Tweet) => tweet.id === tweetRef.id);
        referencedTweet = attachUser(referencedTweet, data.includes.users);
        referencedTweet = attachMedia(referencedTweet, data.includes.media);
        tweet[type] = referencedTweet;
      }
    });
    return tweet;
  });
  return result;
};
