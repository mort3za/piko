<template>
  <div class="toolbar flex gap-4">
    <span v-if="status.favorited">FAV: {{ status.favorite_count }}</span>
    <span v-if="status.retweeted">RT: {{ status.retweet_count }}</span>
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
});
</script>

<style scoped></style>
