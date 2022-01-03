<template>
  <div
    :class="{ rtl: isRTL }"
    :dir="lang === 'und' ? 'auto' : undefined"
    class="border border-blue-200 p-4 rounded-md shadow-md shadow-blue-100"
  >
    <div v-html="text"></div>

    <div class="mt-4" v-if="media">
      <img v-for="mediaItem in media" :src="mediaItem.media_url_https" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Status, UrlEntity } from "twitter-d";
import { addLinkToText, isRTL } from "@services/utils";

export default defineComponent({
  name: "Content",
  props: {
    status: { type: Object as () => Status, required: true },
  },
  computed: {
    lang() {
      return this.status.lang;
    },
    isRTL() {
      return isRTL(this.lang);
    },
    visibleStatus() {
      return this.status.retweeted_status ?? this.status;
    },
    text() {
      // todo: remove media urls from rawText here
      const rawText = this.visibleStatus.full_text;
      return addLinkToText(rawText, this.visibleStatus.entities.urls as UrlEntity[]);
    },
    media() {
      return this.visibleStatus.entities.media;
    },
  },
});
</script>

<style scoped></style>
