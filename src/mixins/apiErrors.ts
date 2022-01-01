import { router } from "@router/index";
import { AxiosError } from "axios";

export const apiErrors = {
  methods: {
    onApiError(error: AxiosError) {
      console.log(error);

      if (error.status === 401) {
        router.push({ name: "Login" });
      }
    },
  },
};
