<template>
  <div class="ltr mt-2 border border-zinc-150 dark:border-slate-700 dark:bg-slate-700 rounded-lg p-3">
    <TweetCardHeader :status="status" :status-content="statusContent" :quoted="true" />
    <TweetCardContent :status="status" :status-content="statusContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { components } from "@twitter";
import TweetCardHeader from "./TweetCardHeader.vue";
import TweetCardContent from "./TweetCardContent.vue";

export default defineComponent({
  components: { TweetCardHeader, TweetCardContent },
  props: {
    status: { type: Object as () => components["schemas"]["Tweet"], required: true },
  },
  computed: {
    statusContent() {
      return this.status.retweeted_status ?? this.status;
    },
  },
});
</script>

<style scoped></style>
