export const RTLLanguageCodes = ["fa"];
import { Status } from "twitter-d";

export const isRTL = (langCode: Status["lang"]) => RTLLanguageCodes.includes(langCode as string);
