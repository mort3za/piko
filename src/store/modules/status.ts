import { ajax } from "@functions/utils";
import { cloneDeep } from "lodash-es";

const defaultState = {};

const mutations = {};
const actions = {
  statusPost(context, statusPayload: StatusPayload) {
    return ajax({
      url: "/statuses",
      options: {
        method: "POST",
        body: JSON.stringify({ status: statusPayload }),
      },
    });
  },
  statusFetch(context, { id, params }) {
    const url = `/statuses/${id}`;
    return ajax({ url, options: { cache: "force-cache" }, params }).then(async (res) => {
      const result = await res.json();
      if (!res.ok) throw result;
      return result;
    });
  },
};
const getters = {};

export default {
  namespaced: true,
  state: cloneDeep(defaultState),
  getters,
  actions,
  mutations,
};
