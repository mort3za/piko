<template>
  <div :class="{ rtl: isRTL, ltr: !isRTL }" :dir="lang === 'und' ? 'auto' : undefined">
    <div class="user-content whitespace-pre-line leading-6 break-words" v-html="text"></div>

    <div class="mt-2" v-if="statusContent.hasMedia">
      <MediaContent :status="statusContent" />
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { setEntitiesOnText, isRTL } from "@services/text";
const MediaContent = defineAsyncComponent(() => import("@components/MediaContent/MediaContent.vue"));
import { Tweet } from "@services/tweet";

export default defineComponent({
  name: "Content",
  props: {
    status: { type: Object as () => Tweet, required: true },
    statusContent: { type: Object as () => Tweet, required: true },
  },
  computed: {
    lang() {
      return this.status.lang;
    },
    isRTL() {
      return isRTL(this.lang);
    },
    text() {
      const rawText = this.statusContent.text;
      return setEntitiesOnText({
        rawText,
        entities: this.statusContent.entities,
        quoted_status_permalink: this.status.quoted_status_permalink,
      });
    },
  },
  components: { MediaContent },
});
</script>
