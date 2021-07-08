const { VITE_API_BASE } = import.meta.env;

export function makeApiUrl(path: string) {
  return `${VITE_API_BASE}${path}`;
}

export function ajax(url: string, options: RequestInit, isRelativeUrl = url[0] === "/") {
  let _url = url;
  if (isRelativeUrl) {
    _url = makeApiUrl(url);
  }
  return fetch(_url, {
    credentials: "include",
    headers: {
      "content-type": "application/json",
    },
    ...options,
  });
}
