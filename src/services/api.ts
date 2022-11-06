import { components } from "@twitter";

const { VITE_API_ORIGIN, VITE_API_BASE } = import.meta.env;
const apiUrl = `${VITE_API_ORIGIN}${VITE_API_BASE}`;

export const api = async (path: string, options: RequestInit = {}) => {
  await refreshToken();
  const headers = new Headers({ "Content-Type": "application/json" });

  const req = new Request(`${apiUrl}${path}`, {
    method: "GET",
    headers,
    ...options,
    credentials: "include",
  });
  return fetch(req).then((response) => {
    if (!response.ok) {
      return Promise.reject(response);
    }
    return response;
  });
};

export const refreshToken = () => {
  const headers = new Headers({ "Content-Type": "application/json" });
  const req = new Request(`${apiUrl}${"/refresh-token"}`, {
    method: "GET",
    headers,
    credentials: "include",
  });
  return fetch(req);
};

export const apiLink = (path: string) => `${apiUrl}${path}`;
