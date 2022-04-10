import { Router } from "vue-router";

export const useErrorHnadler = () => {
  const onApiError = (error: any, router: Router) => {
    if (error.status === 401) {
      router.push({ name: "Login" });
    }
  };

  return { onApiError };
};
