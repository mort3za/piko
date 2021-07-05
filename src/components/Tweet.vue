<template>
  <div>
    <div class="border border-blue p-4">{{ tweet.text }}</div>
    <div class="toolbar flex gap-4">
      <span v-if="tweet.favorited">FAV: {{ tweet.favorite_count }}</span>
      <span v-if="tweet.retweeted">RT: {{ tweet.retweet_count }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Status } from "twitter-d";

export default defineComponent({
  name: "Tweet",
  props: {
    tweet: { type: Object as () => Status, required: true },
  },
});
</script>

<style scoped></style>
