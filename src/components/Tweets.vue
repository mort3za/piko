<template>
  <section>
    <Tweet v-for="tweet in tweets" :key="tweet.id" :tweet="tweet"></Tweet>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tweet from "@components/Tweet.vue";
export default defineComponent({
  name: "Timeline",
  props: {
    tweets: {
      type: Array,
      required: true,
    },
  },
  components: { Tweet },
});
</script>
