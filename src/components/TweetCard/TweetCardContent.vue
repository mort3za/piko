<template>
  <div
    :class="{ rtl: isRTL }"
    :dir="lang === 'und' ? 'auto' : undefined"
    class="border border-blue-200 p-4 rounded-md shadow-md shadow-blue-100"
  >
    <div class="user-content" v-html="text"></div>

    <div class="mt-4" v-if="media">
      <img v-for="mediaItem in media" :src="mediaItem.media_url_https" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Status } from "twitter-d";
import { setEntitiesOnText, isRTL } from "@services/utils";

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
    statusSource() {
      return this.status.retweeted_status ?? this.status;
    },
    text() {
      // todo: remove media urls from rawText here
      const rawText = this.statusSource.full_text;
      return setEntitiesOnText(rawText, this.statusSource.entities);
    },
    media() {
      return this.statusSource.entities.media;
    },
  },
});
</script>
