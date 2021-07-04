const { VITE_API_BASE } = import.meta.env;

export function makeApiUrl(path: string) {
  return `${VITE_API_BASE}${path}`;
}
