<template>
  <div class="ltr mt-2 border border-zinc-150 dark:border-slate-700 dark:bg-slate-700 rounded-lg p-3">
    <TweetCardHeader :status="status" :status-content="statusContent" :quoted="true" />
    <TweetCardContent :status="status" :status-content="statusContent" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TweetCardHeader from "./TweetCardHeader.vue";
import TweetCardContent from "./TweetCardContent.vue";
import { Tweet } from "@services/tweet";

export default defineComponent({
  components: { TweetCardHeader, TweetCardContent },
  props: {
    status: { type: Object as () => Tweet, required: true },
  },
  computed: {
    statusContent(): Tweet {
      console.log("this.status", this.status);

      return this.status.retweeted ?? this.status;
    },
  },
});
</script>

<style scoped></style>
