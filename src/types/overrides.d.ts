import { AxiosResponse } from "axios";

declare module "axios" {
  export interface AxiosResponse {
    ok: boolean;
  }
  export interface AxiosError {
    status: number;
  }
}

declare module "twitter-d" {
  export interface Status {
    text: string;
    id_str: string;
    created_at: string;
  }
}
