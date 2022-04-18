import { Router } from "vue-router";

export const useErrorHandler = async (e: any) => {
  const onApiError = (error: any, router?: Router) => {
    if (error?.status === 401 && router) {
      router.push({ name: "Login" });
    }

    console.log("onApiError", error);
  };

  if (!e) {
    console.trace("error with no message.");
    return { onApiError, message: "", response: null };
  }
  if (!e.json) {
    return { onApiError, message: e.message, response: e };
  }
  const json = await e.json();

  return { onApiError, message: json.message ?? e.statusText, response: e };
};
