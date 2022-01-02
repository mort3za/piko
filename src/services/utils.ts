export const RTLLanguageCodes = ["fa"];
import { format } from "date-fns";
import { Status } from "twitter-d";

export const isRTL = (langCode: Status["lang"]) => RTLLanguageCodes.includes(langCode as string);

export const formatDateTime = (date: string) => {
  const timestamp = new Date(date).getTime();
  return format(timestamp, "dd/MM/yyyy HH:mm");
};
