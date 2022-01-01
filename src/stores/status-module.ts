import { api } from "@services/api";
import { defineStore } from "pinia";
import { Response } from "redaxios";
import { Status } from "twitter-d";

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
  statusFetch(id) {
    const url = `/statuses/${id}`;
    return api({ url, cache: true }).then((res as Response)=> {
      if (!res.ok) throw res.data;
      return res.data as Status;
    });
  },
};

export const useStatusStore = defineStore("status", {
  state: () => defaultState,
  actions,
});
