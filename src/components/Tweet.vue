<template>
  <div>
    <div class="border border-blue p-4">{{ status.text }}</div>
    <div class="toolbar flex gap-4">
      <span v-if="status.favorited">FAV: {{ status.favorite_count }}</span>
      <span v-if="status.retweeted">RT: {{ status.retweet_count }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Status } from "twitter-d";

export default defineComponent({
  name: "Tweet",
  props: {
    status: { type: Object as () => Status, required: true },
  },
});
</script>
