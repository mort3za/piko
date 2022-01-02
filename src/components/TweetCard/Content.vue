<template>
  <div
    :class="{ rtl: isRTL }"
    :dir="lang === 'und' ? 'auto' : undefined"
    class="border border-blue p-4"
  >
    {{ text }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Status } from "twitter-d";
import { isRTL } from "@services/utils";

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
    text() {
      return this.status.retweeted_status?.text ?? this.status.text;
    },
  },
});
</script>

<style scoped></style>
