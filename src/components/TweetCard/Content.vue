<template>
  <div :class="{ rtl: isRTL }" class="border border-blue p-4">{{ text }}</div>
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
    text() {
      return this.status.retweeted_status?.text ?? this.status.text;
    },
    isRTL() {
      return isRTL(this.status.lang);
    },
  },
});
</script>

<style scoped></style>
