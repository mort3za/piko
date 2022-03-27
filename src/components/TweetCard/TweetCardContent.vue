<template>
  <div
    :class="{ rtl: isRTL }"
    :dir="lang === 'und' ? 'auto' : undefined"
    class="border border-blue-200 p-4 rounded-md shadow-md shadow-blue-100"
  >
    <div class="user-content" v-html="text"></div>

    <div class="mt-4" v-if="media">
      <MediaContent :media="media" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Status } from "twitter-d";
import { setEntitiesOnText, isRTL } from "@services/utils";
import MediaContent from "@components/MediaContent/MediaContent.vue";

export default defineComponent({
  name: "Content",
  props: {
    status: { type: Object as () => Status, required: true },
    statusContent: { type: Object as () => Status, required: true },
  },
  computed: {
    lang() {
      return this.status.lang;
    },
    isRTL() {
      return isRTL(this.lang);
    },
    text() {
      // todo: remove media urls from rawText here
      const rawText = this.statusContent.full_text;
      return setEntitiesOnText(rawText, this.statusContent.entities);
    },
    media() {
      return this.statusContent.entities.media;
    },
  },
  components: { MediaContent },
});
</script>
