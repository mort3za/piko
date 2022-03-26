<template>
  <div class="toolbar flex gap-4 justify-between mt-2 px-4">
    <div class="text-xs">
      <span v-if="status.favorite_count > 0" class="mr-4">FAV: {{ status.favorite_count }}</span>
      <span v-if="status.retweet_count > 0">RT: {{ status.retweet_count }}</span>
    </div>
    <div class="flex">
      <a class="link text-xs" :href="twitterLink" rel="noopener noreferrer" target="_blank"
        >Open in Twitter</a
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Toolbar",
  props: {
    status: {
      type: Object,
      required: true,
    },
  },
  computed: {
    twitterLink() {
      return `https://twitter.com/${this.status.user.screen_name}/status/${this.status.id_str}`;
    },
  },
});
</script>

<style scoped></style>
