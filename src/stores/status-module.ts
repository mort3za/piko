import { api } from "@services/api";
import { defineStore } from "pinia";

const defaultState = {};

const actions = {
  statusPost(statusPayload: StatusPayload) {
    return api({
      url: "/statuses",
      options: {
        method: "POST",
        body: JSON.stringify({ status: statusPayload }),
      },
    });
  },
  statusFetch({ id, params }) {
    const url = `/statuses/${id}`;
    return api({ url, params, cache: true }).then(async (res) => {
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
