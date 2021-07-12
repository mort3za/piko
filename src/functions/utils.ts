const { VITE_API_BASE } = import.meta.env;

export function makeApiUrl(path: string) {
  return `${VITE_API_BASE}${path}`;
}

export function ajax({ url, options = {}, params = {}, isUrlRelative = undefined }: AjaxOptions) {
  const _isUrlRelative = isUrlRelative ?? url[0] === "/";
  const queryParams = getQueryParams(params);

  let _url = url;
  if (_isUrlRelative) {
    _url = makeApiUrl(url);
  }
  if (queryParams) {
    _url = `${_url}?${queryParams}`;
  }

  const _options: RequestInit = {
    credentials: "include",
    cache: "force-cache",
    headers: {
      "content-type": "application/json",
    },
    ...options,
  };

  return fetch(_url, _options);
}

function getQueryParams(params: Object) {
  const normalizedParams: Record<string, string> = Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      let updatedValue = String(value);
      if (typeof value === "boolean") {
        updatedValue = value ? "1" : "0";
      }
      return [key, updatedValue];
    }),
  );
  const _params = new URLSearchParams(normalizedParams);
  const queryParams: string = _params.toString();
  return queryParams;
}