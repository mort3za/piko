export const RTLLanguageCodes = ["fa"];
import { format } from "date-fns";
import { Status, UrlEntity } from "twitter-d";

export const isRTL = (langCode: Status["lang"]) => RTLLanguageCodes.includes(langCode as string);

export const formatDateTime = (date: string) => {
  const timestamp = new Date(date).getTime();
  return format(timestamp, "dd/MM/yyyy HH:mm");
};

export const addLinkToText = (rawText: string, urls: UrlEntity[]): string => {
  let result = rawText;
  urls.forEach((urlEntity: UrlEntity) => {
    const linkStart = `<a class="link" rel="noopener noreferrer" href="${urlEntity.url}">`;
    const linkEnd = "</a>";
    const indices = urlEntity.indices ?? [];
    const link = [linkStart, result.slice(indices[0], indices[1]), linkEnd].join("");
    result = [result.slice(0, indices[0]), link, result.slice(indices[1])].join("");
  });
  return result;
};
