import { ajax } from "@functions/utils";
import { defineStore } from "pinia";

const defaultState = {};

const actions = {
  statusPost(statusPayload: StatusPayload) {
    return ajax({
      url: "/statuses",
      options: {
        method: "POST",
        body: JSON.stringify({ status: statusPayload }),
      },
    });
  },
  statusFetch({ id, params }) {
    const url = `/statuses/${id}`;
    return ajax({ url, options: { cache: "force-cache" }, params }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) throw result;
      return result;
    });
  },
};

export const useStatusStore = defineStore("status", {
  state: () => defaultState,
  actions,
});
