import axios from "redaxios";
const { VITE_API_BASE } = import.meta.env;

export const api = axios.create({
  baseURL: VITE_API_BASE as string,
  withCredentials: true,
});

export const apiLink = (path: string) => `${VITE_API_BASE}/${path}`;
