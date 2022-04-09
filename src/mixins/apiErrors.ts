import { router } from "@router/index";
import { AxiosError } from "axios";

export function useApiErrors() {
  function onApiError(error: AxiosError) {
    if (error.status === 401) {
      router.push({ name: "Login" });
    }
  }
  return {
    onApiError,
  };
}
