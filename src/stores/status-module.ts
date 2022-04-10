import { api } from "@services/api";
import { onJsonResponse } from "@services/response";
import { AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { Status } from "twitter-d";

const defaultState = {};

const actions = {
  statusPost(statusPayload: Partial<StatusPayload>) {
    const url = "/statuses";
    return api(url, {
      method: "POST",
      body: JSON.stringify({ status: statusPayload }),
    });
  },
  statusFetch(id: string) {
    const url = `/statuses/${id}`;
    return api(url, { method: "GET" }).then(onJsonResponse);
  },
};

export const useStatusStore = defineStore("status", {
  state: () => defaultState,
  actions,
});
