import { Router } from "vue-router";

export const useErrorHnadler = async (e: any) => {
  const onApiError = (error: any, router?: Router) => {
    if (error.status === 401 && router) {
      router.push({ name: "Login" });
    }

    // todo: show snackbar on other errors
    console.log("onApiError", error);
  };

  if (!e.json) {
    return { onApiError, message: e.message, response: e };
  }
  const json = await e.json();

  return { onApiError, message: json.message ?? e.statusText, response: e };
};
