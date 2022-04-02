export const RTLLanguageCodes = ["fa"];
import { cloneDeep } from "lodash-es";
import { Entities, QuotedStatusPermalink, Status } from "twitter-d";

type Indices = [number, number];
export const isRTL = (langCode: Status["lang"]) => RTLLanguageCodes.includes(langCode as string);

export const setEntitiesOnText = ({
  rawText = "",
  entities,
  quoted_status_permalink,
}: {
  rawText: string;
  entities: Entities;
  quoted_status_permalink?: QuotedStatusPermalink | null;
}): string => {
  const linkProps = 'rel="noopener noreferrer" target="_blank"';
  const upgradedEntities = cloneDeep(entities);
  upgradedEntities.hashtags = (upgradedEntities.hashtags ?? []).map((hashtag) => {
    return {
      ...hashtag,
      linkStart: `<a class="link link--hashtag" ${linkProps} href="https://twitter.com/hashtag/${hashtag.text}">`,
      linkEnd: "</a>",
      type: "hashtag",
    };
  });
  upgradedEntities.symbols = (upgradedEntities.symbols ?? []).map((symbol) => {
    return {
      ...symbol,
      linkStart: `<a class="link link--symbol" ${linkProps} href="https://twitter.com/search?q=%23${symbol.text}">`,
      linkEnd: "</a>",
      type: "symbol",
    };
  });
  upgradedEntities.user_mentions = (upgradedEntities.user_mentions ?? []).map((mention) => {
    return {
      ...mention,
      linkStart: `<a class="link link--mention" ${linkProps} href="https://twitter.com/${mention.screen_name}">`,
      linkEnd: "</a>",
      type: "mention",
    };
  });
  upgradedEntities.urls = (upgradedEntities.urls ?? []).map((url_item) => {
    return {
      ...url_item,
      linkStart: `<a class="link link--url" ${linkProps} title="${url_item.expanded_url}" href="${url_item.url}">`,
      linkText: url_item.display_url,
      linkEnd: "</a>",
      type: "url",
    };
  });
  upgradedEntities.media = (upgradedEntities.media ?? []).map((media) => {
    return {
      ...media,
      type: "media",
    };
  });

  const entities_all = [
    ...upgradedEntities.hashtags,
    ...upgradedEntities.symbols,
    ...upgradedEntities.user_mentions,
    ...upgradedEntities.urls,
    ...upgradedEntities.media,
  ].sort((a, b) => {
    return (a.indices as Indices)[0] - (b.indices as Indices)[0];
  });

  let plainTextIndex = 0;
  let textSlices = [] as { text: string; entity?: any }[];
  const rawTextInArray = Array.from(rawText);

  entities_all.forEach((entity_item) => {
    const indices_item = entity_item.indices as Indices;

    // add plain text part to the text slices
    if (plainTextIndex < indices_item[0]) {
      textSlices.push({
        text: rawTextInArray.slice(plainTextIndex, indices_item[0]).join(""),
      });
      plainTextIndex = indices_item[1];
    }

    // add entity part to the text slices
    textSlices.push({
      text: rawTextInArray.slice(indices_item[0], indices_item[1]).join(""),
      entity: entity_item,
    });
    plainTextIndex = indices_item[1];
  });
  // add the last plain text part to the text slices
  if (plainTextIndex < rawTextInArray.length) {
    textSlices.push({
      text: rawTextInArray.slice(plainTextIndex, rawTextInArray.length).join(""),
    });
  }

  return textSlices
    .map((slice) => {
      // remove media text from status text
      if (slice.entity?.type === "media") {
        return "";
      }
      if (quoted_status_permalink && quoted_status_permalink.url === slice.entity?.url) {
        return "";
      }

      const sliceText = slice.entity?.linkText ?? slice.text;
      const html = slice.entity
        ? slice.entity.linkStart + sliceText + slice.entity.linkEnd
        : slice.text;
      return html;
    })
    .join("");
};
