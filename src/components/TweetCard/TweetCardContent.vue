<template>
  <div
    :class="{ rtl: isRTL, ltr: !isRTL }"
    :dir="lang === 'und' ? 'auto' : undefined"
    class="border border-blue-200 p-4 rounded-md shadow-md shadow-blue-100"
  >
    <div class="user-content whitespace-pre-line leading-6" v-html="text"></div>

    <MediaContent v-if="media" class="mt-2" :media="media" />
    <TweetCardContent
      class="mt-2"
      v-if="status.quoted_status"
      :status="status.quoted_status"
      :status-content="status.quoted_status"
    />
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
      const rawText = this.statusContent.full_text;
      return setEntitiesOnText(rawText, this.statusContent.entities);
    },
    media() {
      return this.statusContent.extended_entities?.media ?? this.statusContent.entities.media;
    },
  },
  components: { MediaContent },
});
</script>
