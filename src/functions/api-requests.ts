import { ajax } from "./utils";

export function tweet(statusPayload: StatusPayload) {
  ajax("/tweet", {
    method: "POST",
    body: JSON.stringify({ tweet: statusPayload }),
  });
}
