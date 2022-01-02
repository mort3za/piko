import { api } from "@services/api";
import { AxiosResponse } from "axios";
import { defineStore } from "pinia";
import { Status } from "twitter-d";

const defaultState = {};

const actions = {
  statusPost(statusPayload: Partial<StatusPayload>) {
    return api({
      url: "/statuses",
      method: "POST",
      data: JSON.stringify({ status: statusPayload }),
    });
  },
  statusFetch(id: string) {
    const url = `/statuses/${id}`;
    return api({ url, cache: true }).then((res: AxiosResponse) => {
      if (!res.ok) throw res.data;
      return res.data as Status;
    });
  },
};

export const useStatusStore = defineStore("status", {
  state: () => defaultState,
  actions,
});
