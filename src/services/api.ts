const { VITE_API_ORIGIN, VITE_API_BASE } = import.meta.env;

const apiUrl = `${VITE_API_ORIGIN}${VITE_API_BASE}`;
export const api = (path: string, options: RequestInit) => {
  const headers = new Headers();

  const req = new Request(`${apiUrl}${path}`, { credentials: "include", headers, ...options });
  return fetch(req);
};

export const apiLink = (path: string) => `${apiUrl}${path}`;
