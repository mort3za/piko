import axios from "redaxios";
const { VITE_API_ORIGIN, VITE_API_BASE } = import.meta.env;

const apiUrl = `${VITE_API_ORIGIN}${VITE_API_BASE}`;

export const api = axios.create({
  baseURL: apiUrl as string,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

export const apiLink = (path: string) => `${apiUrl}/${path}`;
