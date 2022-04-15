import { RouteLocationNormalizedLoaded } from "vue-router";

export const getQueryParamsString = (queryParams: any) => {
  if (Object.keys(queryParams).length === 0) return "";

  return `?${new URLSearchParams(queryParams)}`;
};

export const isHomeExact = (route: RouteLocationNormalizedLoaded) => route.fullPath === "/home";
