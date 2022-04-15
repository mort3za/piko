import { Router } from "vue-router";

export const useErrorHnadler = async (e: any) => {
  const json = await e.json();
  const onApiError = (error: any, router: Router) => {
    if (error.status === 401) {
      router.push({ name: "Login" });
    }
  };

  return { onApiError, message: json.message ?? e.statusText, response: e };
};
