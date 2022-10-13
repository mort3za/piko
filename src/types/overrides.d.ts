import { AxiosResponse } from "axios";

declare module "twitter-d" {
  export interface Status {
    text: string;
    id_str: string;
    created_at: string;
  }
}
