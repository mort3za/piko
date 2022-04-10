export const getQueryParamsString = (queryParams: any) => {
  if (Object.keys(queryParams).length === 0) return "";

  return `?${new URLSearchParams(queryParams)}`;
};
