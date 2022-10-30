import { components } from "@twitter";

export const onTimelineResponse = ({ data }: any) => {
  let result = data;
  result = result.data.map((tweet: components["schemas"]["Tweet"]) => {
    const user = data.includes.users.find(
      (user: components["schemas"]["User"]) => user.id === tweet.author_id,
    );
    return { ...tweet, user };
  });
  // todo:
  return result;
};
